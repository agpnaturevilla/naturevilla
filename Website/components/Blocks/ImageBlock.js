'use client'

import Image from 'next/image'

export default function ImageBlock({ content, settings }) {
  const {
    image,
    alt,
    caption,
    title,
    description,
    layout = 'full' // full, left, right, center
  } = content || {}

  const {
    backgroundColor = 'bg-white',
    padding = 'py-16'
  } = settings || {}

  if (!image) return null

  const isFullWidth = layout === 'full'
  const isFloated = layout === 'left' || layout === 'right'

  return (
    <div className={`${backgroundColor} ${padding}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {isFullWidth ? (
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <Image
                src={image}
                alt={alt || title || ''}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
              />
            </div>
            {(title || description || caption) && (
              <div className="mt-6 text-center">
                {title && (
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {title}
                  </h3>
                )}
                {description && (
                  <p className="text-lg text-gray-600 mb-2">
                    {description}
                  </p>
                )}
                {caption && (
                  <p className="text-sm text-gray-500 italic">
                    {caption}
                  </p>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className={`flex ${layout === 'right' ? 'flex-row-reverse' : 'flex-row'} items-center gap-8`}>
            <div className="flex-1">
              <div className="relative aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
                <Image
                  src={image}
                  alt={alt || title || ''}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {caption && (
                <p className="mt-2 text-sm text-gray-500 italic text-center">
                  {caption}
                </p>
              )}
            </div>
            {(title || description) && (
              <div className="flex-1">
                {title && (
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {title}
                  </h3>
                )}
                {description && (
                  <div className="prose prose-lg text-gray-700">
                    <div dangerouslySetInnerHTML={{ __html: description }} />
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}