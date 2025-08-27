'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function StorySections({ content, settings }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const { sections = [] } = content || {}

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative">
      {sections.map((section, index) => {
        const isLeft = section.layout === 'left'
        const isGradient = section.backgroundColor === 'gradient'
        
        return (
          <section 
            key={index}
            className={`relative py-20 lg:py-28 overflow-hidden ${
              isGradient 
                ? 'bg-gradient-to-br from-primary-100 via-primary-50 to-primary-200' 
                : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                isLeft ? '' : 'lg:grid-flow-col-dense'
              }`}>
                
                {/* Image Column */}
                <div className={`relative ${isLeft ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className={`transform transition-all duration-1000 delay-200 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    <div 
                      className="relative aspect-[4/3] overflow-hidden rounded-2xl"
                      style={{
                        pointerEvents: 'none',
                        userSelect: 'none',
                        touchAction: 'none',
                        position: 'relative'
                      }}
                      onClick={(e) => e.preventDefault()}
                      onMouseDown={(e) => e.preventDefault()}
                      onMouseUp={(e) => e.preventDefault()}
                      onMouseEnter={(e) => e.preventDefault()}
                      onMouseMove={(e) => e.preventDefault()}
                      onWheel={(e) => e.preventDefault()}
                      onTouchStart={(e) => e.preventDefault()}
                      onTouchMove={(e) => e.preventDefault()}
                      onTouchEnd={(e) => e.preventDefault()}
                    >
                      <Image
                        src={section.image}
                        alt={section.title}
                        fill
                        className="object-cover select-none"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{
                          pointerEvents: 'none',
                          userSelect: 'none',
                          touchAction: 'none',
                          objectFit: 'cover',
                          transform: 'none'
                        }}
                        draggable={false}
                        unselectable="on"
                        priority={false}
                      />
                      <div 
                        className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent select-none"
                        style={{
                          pointerEvents: 'none',
                          userSelect: 'none',
                          touchAction: 'none'
                        }}
                      />
                    </div>
                    
                    {/* Subtle Decorative Elements */}
                    <div className={`absolute -top-2 ${isLeft ? '-right-2' : '-left-2'} w-16 h-16 bg-gradient-to-br from-primary-100/40 to-accent-100/40 rounded-full blur-2xl`} />
                    <div className={`absolute -bottom-4 ${isLeft ? '-left-4' : '-right-4'} w-20 h-20 bg-gradient-to-br from-accent-100/30 to-secondary-100/30 rounded-full blur-3xl`} />
                  </div>
                </div>

                {/* Content Column */}
                <div className={`relative ${isLeft ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className={`transform transition-all duration-1000 delay-400 ${
                    isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                  }`}>
                    

                    {/* Title */}
                    <div className="text-center mb-8">
                      <h2 className={`text-3xl lg:text-4xl font-light leading-tight ${
                        isGradient 
                          ? 'text-gray-800' 
                          : 'text-gray-800'
                      }`}>
                        <span className="font-serif italic text-gray-600">{section.title.split(' ').slice(0, -3).join(' ')}</span>{' '}
                        <span className="font-normal">{section.title.split(' ').slice(-3).join(' ')}</span>
                      </h2>
                      
                      <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mt-4"></div>
                    </div>

                    {/* Content */}
                    <div className={`prose prose-lg max-w-none ${
                      isGradient ? 'prose-gray' : 'prose-slate'
                    }`}>
                      <div 
                        className="text-gray-700 leading-relaxed space-y-4"
                        dangerouslySetInnerHTML={{ 
                          __html: section.content.replace(/\n\n/g, '</p><p class="mb-4">').replace(/^/, '<p class="mb-4">').replace(/$/, '</p>')
                        }} 
                      />
                    </div>

                    {/* Decorative Quote Mark */}
                    <div className={`absolute ${isLeft ? '-left-8' : '-right-8'} top-1/2 transform -translate-y-1/2 opacity-10`}>
                      <svg width="120" height="120" viewBox="0 0 120 120" className="fill-current text-primary-400">
                        <path d="M21.6 61.6c0 14.4 11.7 26.1 26.1 26.1s26.1-11.7 26.1-26.1-11.7-26.1-26.1-26.1-26.1 11.7-26.1 26.1zm0-29.8c0-8.1 6.6-14.7 14.7-14.7s14.7 6.6 14.7 14.7-6.6 14.7-14.7 14.7-14.7-6.5-14.7-14.7z"/>
                        <path d="M75.6 61.6c0 14.4 11.7 26.1 26.1 26.1s26.1-11.7 26.1-26.1-11.7-26.1-26.1-26.1-26.1 11.7-26.1 26.1zm0-29.8c0-8.1 6.6-14.7 14.7-14.7s14.7 6.6 14.7 14.7-6.6 14.7-14.7 14.7-14.7-6.5-14.7-14.7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </section>
        )
      })}
    </div>
  )
}