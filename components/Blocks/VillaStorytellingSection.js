'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function VillaStorytellingSection({ content, settings }) {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSection, setCurrentSection] = useState(0)
  const sectionRef = useRef(null)

  const {
    title = "The Ultimate Villa in Udaipur",
    sections = [
      {
        title: "Udaipur's Hidden Gem",
        text: "Udaipur's charm is no secret—lakes ripple under golden light, palaces loom with history, and the Aravali mountains cast a timeless shadow. In 2023, nearly 2 million travelers flooded in, hooked on its royal allure.",
        image: "/images/Villa/agp-nature-villa-outer-area.jpg",
        accent: "from-blue-500 to-purple-600"
      },
      {
        title: "The Arrival Experience",  
        text: "Drive up to AGP Nature Villa, and the vibe hits hard—gravel pops under tires, and the big garden unfurls like a playground begging for chaos. Inside, three luxury rooms stand apart: Love Nest, a snug hideout; Mountain Peak, framed by jagged hills; Valley View, green and sprawling below.",
        image: "/images/Villa/slider-image-1.jpg",
        accent: "from-green-500 to-teal-600"
      },
      {
        title: "Private Paradise",
        text: "A swimming pool glimmers like a private jewel, a bonfire place crackles with promise, and kitchens—modern indoors, rugged outdoors—wait for your takeover. This isn't just a luxury villa in Udaipur—it's AGP Nature Villa, the king of private getaways.",
        image: "/images/Villa/pool-area-agp-nature-villa.jpg",
        accent: "from-orange-500 to-red-600"
      }
    ]
  } = content || {}

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % sections.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isVisible, sections.length])

  return (
    <div ref={sectionRef} className="relative py-16 overflow-hidden bg-gray-900">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
              index === currentSection ? 'opacity-20' : 'opacity-0'
            }`}
          >
            <Image
              src={section.image}
              alt={section.title}
              fill
              className="object-cover object-center"
              sizes="100vw"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Title */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-5xl lg:text-7xl font-light text-white mb-8">
            <span className="bg-gradient-to-r from-white via-primary-300 to-white bg-clip-text text-transparent">
              {title}
            </span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto rounded-full"></div>
        </div>

        {/* Story Sections */}
        <div className="grid lg:grid-cols-2 gap-16 items-start lg:items-center">
          
          {/* Left - Visual Panel */}
          <div className="relative">
            <div className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
            }`}>
              {/* Main Image */}
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
                <div className={`absolute inset-0 transition-all duration-1000 ${
                  currentSection >= 0 ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                }`}>
                  <Image
                    src={sections[currentSection]?.image}
                    alt={sections[currentSection]?.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${sections[currentSection]?.accent} opacity-20`} />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{currentSection + 1}</span>
                </div>
              </div>

              {/* Progress Indicators */}
              <div className="flex justify-center space-x-3 mt-8">
                {sections.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSection(index)}
                    className={`relative w-12 h-2 rounded-full transition-all duration-300 ${
                      index === currentSection ? 'bg-primary-500' : 'bg-white/20 hover:bg-white/40'
                    }`}
                  >
                    {index === currentSection && (
                      <div className="absolute inset-0 bg-primary-400 rounded-full animate-pulse" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Content Panel */}
          <div className="space-y-8">
            <div className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}>
              {/* Section Navigation */}
              <div className="space-y-4 mb-12">
                {sections.map((section, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSection(index)}
                    className={`group text-left w-full p-4 rounded-2xl transition-all duration-300 ${
                      index === currentSection 
                        ? 'bg-white/10 backdrop-blur-sm border border-white/20' 
                        : 'hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSection ? 'bg-primary-500' : 'bg-white/30'
                      }`} />
                      <span className={`font-medium transition-all duration-300 ${
                        index === currentSection ? 'text-primary-300' : 'text-white/70 group-hover:text-white/90'
                      }`}>
                        {section.title}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Active Section Content */}
              <div className="relative min-h-[300px] lg:min-h-[200px]">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      index === currentSection 
                        ? 'opacity-100' 
                        : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <h3 className="text-3xl lg:text-4xl font-light text-white mb-6">
                      <span className={`bg-gradient-to-r ${section.accent} bg-clip-text text-transparent`}>
                        {section.title}
                      </span>
                    </h3>
                    <p className="text-lg lg:text-xl text-white/80 leading-relaxed font-light">
                      {section.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className={`text-center mt-20 md:mt-20 transition-all duration-1000 delay-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <blockquote className="text-2xl lg:text-3xl font-light text-white/90 italic max-w-4xl mx-auto">
            "This is where the Aravalis embrace luxury, and every sunset writes a new story."
          </blockquote>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto mt-6"></div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
    </div>
  )
}