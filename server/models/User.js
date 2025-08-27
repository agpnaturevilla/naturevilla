const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  password: { 
    type: String, 
    required: true,
    minlength: 8
  },
  role: { 
    type: String, 
    enum: ['admin', 'editor'], 
    default: 'editor' 
  },
  name: { type: String, required: true },
  lastLogin: Date,
  loginAttempts: { type: Number, default: 0 },
  lockUntil: Date,
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

userSchema.virtual('isLocked').get(function() {
  return !!(this.lockUntil && this.lockUntil > Date.now());
});

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

userSchema.methods.comparePassword = async function(candidatePassword) {
  if (this.isLocked) {
    throw new Error('Account is temporarily locked');
  }
  
  try {
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    
    if (isMatch) {
      if (this.loginAttempts > 0) {
        this.loginAttempts = 0;
        this.lockUntil = undefined;
        await this.save();
      }
      return true;
    } else {
      this.loginAttempts += 1;
      if (this.loginAttempts >= 5) {
        this.lockUntil = Date.now() + 15 * 60 * 1000; // 15 minutes
      }
      await this.save();
      return false;
    }
  } catch (error) {
    throw error;
  }
};

module.exports = mongoose.model('User', userSchema);