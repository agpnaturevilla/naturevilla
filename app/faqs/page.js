'use client'

import { useState } from 'react'
import Layout from '../../components/Layout/Layout'
import { QuestionMarkCircleIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

export default function FAQsPage() {
  const [openFAQ, setOpenFAQ] = useState(null)
  const lastUpdated = "January 2025"

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const faqData = [
    {
      category: "Booking and Reservations",
      questions: [
        {
          question: "How do I book AGP Nature Villa?",
          answer: "You can book AGP Nature Villa by calling us directly at +91 9892611983, emailing us at agpnaturevilla@gmail.com, or contacting us through our website. We recommend booking in advance, especially during peak seasons (October to March) to ensure availability."
        },
        {
          question: "What is the minimum stay requirement?",
          answer: "We typically require a minimum stay of 2-3 nights for regular bookings. During peak seasons like Diwali, Christmas, and New Year, we may require a minimum stay of 5-7 nights. For longer stays, we offer attractive discounted rates."
        },
        {
          question: "How much deposit is required to secure my booking?",
          answer: "We require a 30% advance payment to confirm your booking. The remaining balance can be paid upon arrival at the villa. We accept payments via bank transfer, UPI, or cash. A refundable security deposit may also be required."
        },
        {
          question: "What is your cancellation policy?",
          answer: "Cancellations made 7 days prior to arrival are eligible for a full refund minus processing charges. Cancellations within 7 days may be subject to charges. We understand emergencies happen and will work with guests on a case-by-case basis."
        }
      ]
    },
    {
      category: "Accommodation Details",
      questions: [
        {
          question: "How many guests can AGP Nature Villa accommodate?",
          answer: "AGP Nature Villa can comfortably accommodate up to 8-10 guests. We have 3 spacious bedrooms (Love Nest, Mountain Peak, and Valley View) with attached bathrooms, plus additional space in the living areas for extra guests if needed."
        },
        {
          question: "Is the entire villa private for my group?",
          answer: "Absolutely! When you book AGP Nature Villa, you get the entire property exclusively for your group. We never share the villa with other guests, ensuring complete privacy and a personalized experience for you and your family or friends."
        },
        {
          question: "What amenities are included in the villa?",
          answer: "AGP Nature Villa features a private swimming pool, fully equipped open kitchen, spacious garden, bonfire area, air-conditioned bedrooms, attached bathrooms, Wi-Fi, parking space, and stunning views of the Aravali mountains. All basic amenities for a comfortable stay are provided."
        },
        {
          question: "Do you provide bedding and linens?",
          answer: "Yes, we provide fresh bed linens, towels, pillows, and blankets for all guests. All bedrooms are equipped with comfortable mattresses and quality bedding to ensure a good night's sleep."
        }
      ]
    },
    {
      category: "Location and Transportation",
      questions: [
        {
          question: "Where is AGP Nature Villa located?",
          answer: "AGP Nature Villa is located at 5, Dangiyo Ki Hundar, near Animal Aid, Udaipur, Rajasthan 313011. We're nestled in the beautiful Aravali mountains, offering a serene retreat while being accessible to Udaipur's main attractions."
        },
        {
          question: "How far is the villa from Udaipur city center?",
          answer: "The villa is approximately 15-20 minutes drive from Udaipur city center and major attractions like City Palace, Lake Pichola, and Jagdish Temple. Despite being close to the city, you'll feel like you're in a peaceful mountain retreat."
        },
        {
          question: "Do you provide airport/railway station pickup?",
          answer: "Yes, we can arrange airport and railway station transfers for our guests. Please inform us in advance so we can coordinate the pickup. Transfer charges may apply depending on the distance and vehicle type required."
        },
        {
          question: "Is parking available at the villa?",
          answer: "Yes, we have secure parking space available for your vehicles within the villa premises. The villa can accommodate 2-3 cars comfortably."
        }
      ]
    },
    {
      category: "Dining and Catering",
      questions: [
        {
          question: "Is food included in the stay?",
          answer: "Food is not included in the standard villa rental rate. However, our fully equipped open kitchen allows you to cook your own meals. We can also arrange for a local cook or catering services upon request at additional charges."
        },
        {
          question: "Can I cook my own meals at the villa?",
          answer: "Absolutely! Our villa features a modern open kitchen with all necessary cooking equipment, utensils, gas stove, refrigerator, and dining area. You're welcome to prepare your own meals and enjoy dining in the beautiful outdoor setting."
        },
        {
          question: "Are there restaurants nearby?",
          answer: "Yes, there are several local restaurants and dhabas within 5-10 minutes drive from the villa. We can also recommend some of the best restaurants in Udaipur city for special dining experiences."
        },
        {
          question: "Can you arrange for a chef or catering service?",
          answer: "Yes, we can arrange for local cooks or catering services for your stay. Please let us know your requirements in advance, including cuisine preferences and number of meals. Additional charges will apply for these services."
        }
      ]
    },
    {
      category: "Activities and Services",
      questions: [
        {
          question: "What activities are available at the villa?",
          answer: "At AGP Nature Villa, you can enjoy swimming in the private pool, bonfire evenings, barbecue sessions, outdoor games, mountain hiking, nature walks, stargazing, and relaxing in the beautiful garden. The villa is perfect for family gatherings and group celebrations."
        },
        {
          question: "Can I organize events or celebrations at the villa?",
          answer: "Yes, AGP Nature Villa is perfect for intimate celebrations like birthdays, anniversaries, family reunions, or small gatherings. Our spacious garden and bonfire area provide excellent venues for events. Please discuss your requirements with us during booking."
        },
        {
          question: "Are pets allowed at the villa?",
          answer: "We are pet-friendly! Your furry friends are welcome at AGP Nature Villa. Please inform us during booking if you're bringing pets so we can make necessary arrangements. Additional cleaning charges may apply."
        },
        {
          question: "Is housekeeping service included?",
          answer: "Basic housekeeping and maintenance services are included. For longer stays or additional cleaning requirements, we can arrange extra housekeeping services at nominal charges."
        }
      ]
    },
    {
      category: "Check-in and Policies",
      questions: [
        {
          question: "What are the check-in and check-out times?",
          answer: "Standard check-in time is 2:00 PM and check-out is 11:00 AM. However, we can be flexible with timing based on availability and prior arrangement. Early check-in or late check-out may be accommodated upon request."
        },
        {
          question: "What documents do I need for check-in?",
          answer: "Please bring valid government-issued photo ID proof for all guests (Aadhaar Card, Passport, Driving License, etc.). This is mandatory as per Indian hospitality regulations."
        },
        {
          question: "Do you allow smoking and alcohol at the villa?",
          answer: "Smoking is allowed in outdoor areas only. Alcohol consumption is permitted at the villa premises for guests above 21 years of age. We request responsible consumption and behavior."
        },
        {
          question: "What is your policy for damages?",
          answer: "We trust our guests to treat the villa with care. Any damages beyond normal wear and tear will be charged separately. Our security deposit covers minor damages, and we'll provide transparent billing for any additional charges."
        }
      ]
    }
  ]

  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.flatMap(category =>
      category.questions.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    )
  }

  return (
    <Layout>
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />

      <div className="relative py-16 pb-16 bg-gradient-to-br from-slate-100 via-gray-50 to-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full mb-6">
              <QuestionMarkCircleIcon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-900 to-primary-600 bg-clip-text text-transparent mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              Last Updated: {lastUpdated}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto"></div>
          </div>

          {/* Content */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/20 p-8 lg:p-12 mb-8">

            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed text-center">
                Welcome to AGP Nature Villa's FAQ section. Here you'll find answers to the most commonly asked questions about our luxury villa accommodation in Udaipur. If you can't find what you're looking for, please don't hesitate to{' '}
                <a href="/contact/" className="text-primary-600 hover:text-primary-800 underline transition-colors duration-200">
                  contact us directly
                </a>
                .
              </p>
            </div>

            <div className="space-y-8">
              {faqData.map((category, categoryIndex) => (
                <div key={categoryIndex} className="border-b border-gray-200 last:border-b-0 pb-8 last:pb-0">
                  <h2 className="text-2xl font-bold text-primary-900 mb-6 flex items-center">
                    <QuestionMarkCircleIcon className="w-6 h-6 mr-3 text-primary-600" />
                    {category.category}
                  </h2>

                  <div className="space-y-4">
                    {category.questions.map((faq, questionIndex) => {
                      const faqIndex = `${categoryIndex}-${questionIndex}`
                      const isOpen = openFAQ === faqIndex

                      return (
                        <div
                          key={questionIndex}
                          className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-200"
                        >
                          <button
                            onClick={() => toggleFAQ(faqIndex)}
                            className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
                          >
                            <h3 className="font-semibold text-gray-900 pr-4">
                              {faq.question}
                            </h3>
                            {isOpen ? (
                              <ChevronUpIcon className="w-5 h-5 text-primary-600 flex-shrink-0" />
                            ) : (
                              <ChevronDownIcon className="w-5 h-5 text-primary-600 flex-shrink-0" />
                            )}
                          </button>

                          {isOpen && (
                            <div className="px-6 py-4 bg-white">
                              <p className="text-gray-700 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
                <p className="text-gray-700 mb-6">
                  Can't find the answer you're looking for? Our friendly team is here to help!
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-xl p-6 border border-primary-200">
                <h3 className="font-semibold text-primary-900 mb-4 text-center">Contact AGP Nature Villa</h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="font-medium text-primary-800">Phone</p>
                    <a href="tel:+919892611983" className="text-primary-600 hover:text-primary-800 underline transition-colors duration-200">
                      +91 9892611983
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-primary-800">Email</p>
                    <a href="mailto:agpnaturevilla@gmail.com" className="text-primary-600 hover:text-primary-800 underline transition-colors duration-200">
                      agpnaturevilla@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="font-medium text-primary-800">Location</p>
                    <p className="text-primary-700 text-sm">Udaipur, Rajasthan</p>
                  </div>
                </div>

                <div className="text-center mt-6">
                  <a
                    href="/contact/"
                    className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors duration-200"
                  >
                    Contact Us Now
                  </a>
                </div>
              </div>
            </div>

            {/* Closing Statement */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl p-6 text-center">
                <p className="text-gray-700 font-medium">
                  Thank you for choosing AGP Nature Villa. We look forward to hosting you for an unforgettable stay in the beautiful Aravali mountains of Udaipur!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}