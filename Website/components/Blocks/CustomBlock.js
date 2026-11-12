'use client'

export default function CustomBlock({ content, settings }) {
  const {
    html = '',
    css = '',
    javascript = ''
  } = content || {}

  const {
    backgroundColor = 'bg-white',
    padding = 'py-16'
  } = settings || {}

  if (!html) return null

  return (
    <div className={`${backgroundColor} ${padding}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {css && (
          <style dangerouslySetInnerHTML={{ __html: css }} />
        )}
        
        <div dangerouslySetInnerHTML={{ __html: html }} />
        
        {javascript && (
          <script dangerouslySetInnerHTML={{ __html: javascript }} />
        )}
      </div>
    </div>
  )
}