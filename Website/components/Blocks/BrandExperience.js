'use client'

export default function BrandExperience({ content }) {
  const {
    headline = 'Not Just a Villa. Your Private Kingdom in the Aravallis.',
    bodyText = `Escape the cramped city hotels and step into Dangiyo Ki Hundar, a sanctuary where silence is the ultimate luxury. At AGP Nature Villa, we don't just offer rooms; we offer the luxury of exclusivity.

Whether you are floating in the "Blue Wave" pool under the Udaipur sun, sharing stories by the "Heat Heaven" bonfire, or watching your pets run free in the "Infinity Garden", every corner of this 3-bedroom estate is yours. No sharing with strangers. No rigid hotel rules. Just you, your loved ones, and the mountains.`
  } = content || {}

  return (
    <section className="relative py-16 overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(99, 102, 241, 0.5) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-8 leading-tight" style={{ fontSize: '2.25rem' }}>
            {headline}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full mx-auto mb-8"></div>

          <div className="prose prose-lg md:prose-xl max-w-none mx-auto">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed whitespace-pre-line font-light">
              {bodyText}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
