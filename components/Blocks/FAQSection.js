'use client'

import { useState } from 'react'
import { ChevronDownIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function FAQSection({ content }) {
  const [openIndex, setOpenIndex] = useState(null)

  const {
    title = 'Frequently Asked Questions about Your Luxury Stay',
    faqs = [
      {
        question: 'Is the entire villa private for my group, or will we share it?',
        answer: 'You get complete exclusivity. Unlike other villas in Udaipur, when you book AGP Nature Villa, the entire property-including the private swimming pool, garden, and open kitchen-is exclusively yours. We never mix groups, ensuring 100% privacy for your family or friends.'
      },
      {
        question: 'Is AGP Nature Villa pet-friendly?',
        answer: 'Yes, we are one of the top-rated pet-friendly luxurious villas in Udaipur. Your furry friends are welcome to roam freely in our secure, spacious garden while you relax. We believe a family vacation isn\'t complete without every family member.'
      },
      {
        question: 'How far is the villa from Udaipur City Palace and the lakes?',
        answer: 'We are located in a serene nature spot just 20-25 minutes from the City Palace and Fateh Sagar Lake. This gives you the perfect balance: quick access to Udaipur\'s tourist spots during the day, and a peaceful, noise-free luxury retreat at night.'
      },
      {
        question: 'Can we cook our own meals or is food provided?',
        answer: 'You have the best of both worlds. The villa features a fully equipped modern open kitchen if you wish to cook. Alternatively, we can arrange for a local chef to prepare authentic Rajasthani meals for you (at an additional cost), or you can order from nearby restaurants.'
      },
      {
        question: 'What is the sleeping capacity of the villa?',
        answer: 'The villa has 3 luxurious bedrooms (Love Nest, Mountain Peak, and Valley View). We comfortably accommodate 6 to 15 guests using extra bedding, making it the ideal 3 BHK villa in Udaipur for large family gatherings or group reunions.'
      },
      {
        question: 'Is there a pool and is it private?',
        answer: 'Yes, we feature a sparkling private swimming pool that overlooks the Aravali mountains. It is regularly cleaned and maintenance-free, ensuring a hygienic and luxurious dip whenever you want.'
      }
    ]
  } = content || {}

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="relative py-16 overflow-hidden bg-gradient-to-br from-primary-100 via-primary-50 to-white">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03]" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.5) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 bg-primary-600 rounded-full text-white text-sm font-medium mb-8 shadow-lg">
            <SparklesIcon className="w-4 h-4 mr-2" />
            Your Questions Answered
          </div>

          <h2 className="text-4xl font-light text-gray-900 mb-8 leading-tight" style={{ fontSize: '2.25rem' }}>
            {title}
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full mx-auto"></div>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-primary-200/50 transition-all duration-300 hover:shadow-lg"
              style={{
                boxShadow: openIndex === index
                  ? '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 4px 16px -4px rgba(0, 0, 0, 0.1)'
                  : '0 2px 8px 0 rgba(0, 0, 0, 0.04), 0 4px 16px 2px rgba(0, 0, 0, 0.03)'
              }}
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-5 lg:px-8 lg:py-6 flex items-start justify-between gap-4 hover:bg-primary-50/50 transition-colors duration-200"
              >
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex-shrink-0 mt-1">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition-colors duration-300 ${
                      openIndex === index
                        ? 'bg-primary-600 text-white'
                        : 'bg-primary-100 text-primary-600'
                    }`}>
                      Q{index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg lg:text-xl font-semibold text-gray-900 leading-relaxed pr-4">
                    {faq.question}
                  </h3>
                </div>
                <div className="flex-shrink-0 mt-1">
                  <ChevronDownIcon
                    className={`w-6 h-6 text-primary-600 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 lg:px-8 lg:pb-8 pl-20 lg:pl-24">
                  <div className="pt-2 border-t border-primary-100">
                    <p className="text-gray-700 leading-relaxed text-base lg:text-lg font-light mt-4">
                      <span className="font-semibold text-primary-600">A:</span> {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Below FAQs */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-600 mb-6 font-light">
            Still have questions? We're here to help!
          </p>
          <a
            href="/contact/"
            className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-full font-semibold hover:bg-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Contact Us
          </a>
        </div>

      </div>
    </section>
  )
}
