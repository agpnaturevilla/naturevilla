'use client'

export default function SEOHead({ structuredData }) {
  if (!structuredData) return null

  // Handle both single schema object and array of schemas
  const schemas = Array.isArray(structuredData) ? structuredData : [structuredData]

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema)
          }}
        />
      ))}
    </>
  )
}