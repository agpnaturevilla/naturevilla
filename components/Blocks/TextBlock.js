'use client'

export default function TextBlock({ content, settings }) {
  const {
    title,
    subtitle,
    text,
    alignment = 'left',
    maxWidth = 'max-w-4xl'
  } = content || {}

  const {
    backgroundColor = 'bg-white',
    textColor = 'text-gray-900',
    padding = 'py-16'
  } = settings || {}

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  }

  return (
    <div className={`${backgroundColor} ${padding}`}>
      <div className={`${maxWidth} mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className={alignmentClasses[alignment]}>
          {title && (
            <h2 className={`text-4xl font-bold ${textColor} mb-6`} style={{ fontSize: '2.25rem' }}>
              {title}
            </h2>
          )}
          
          {subtitle && (
            <p className={`text-xl ${textColor} mb-8 opacity-90`}>
              {subtitle}
            </p>
          )}
          
          {text && (
            <div 
              className={`prose prose-lg max-w-none ${textColor} leading-relaxed`}
              dangerouslySetInnerHTML={{ __html: text }}
            />
          )}
        </div>
      </div>
    </div>
  )
}