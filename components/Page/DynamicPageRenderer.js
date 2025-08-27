'use client'

import { Suspense } from 'react'
import Hero from '../Blocks/Hero'
import VillaHero from '../Blocks/VillaHero'
import VillaStorytellingSection from '../Blocks/VillaStorytellingSection'
import InteractiveAmenities from '../Blocks/InteractiveAmenities'
import LuxuryRoomsShowcase from '../Blocks/LuxuryRoomsShowcase'
import RoomHero from '../Blocks/RoomHero'
import DetailedRoomShowcase from '../Blocks/DetailedRoomShowcase'
import RoomComparison from '../Blocks/RoomComparison'
import RoomGallery from '../Blocks/RoomGallery'
import TextBlock from '../Blocks/TextBlock'
import ImageBlock from '../Blocks/ImageBlock'
import Gallery from '../Blocks/Gallery'
import Features from '../Blocks/Features'
import VillaInfo from '../Blocks/VillaInfo'
import PoolKitchen from '../Blocks/PoolKitchen'
import UniqueOfferings from '../Blocks/UniqueOfferings'
import VillaStory from '../Blocks/VillaStory'
import OurGallery from '../Blocks/OurGallery'
import StorySections from '../Blocks/StorySections'
import BookingSection from '../Blocks/BookingSection'
import Rooms from '../Blocks/Rooms'
import Contact from '../Blocks/Contact'
import CustomBlock from '../Blocks/CustomBlock'
import CTASection from '../Blocks/CTASection'
import TestimonialsSection from '../Blocks/TestimonialsSection'
import Layout from '../Layout/Layout'
import Loading from '../UI/Loading'

const blockComponents = {
  hero: Hero,
  'villa-hero': VillaHero,
  'villa-storytelling': VillaStorytellingSection,
  'interactive-amenities': InteractiveAmenities,
  'luxury-rooms': LuxuryRoomsShowcase,
  'room-hero': RoomHero,
  'detailed-room-showcase': DetailedRoomShowcase,
  'room-comparison': RoomComparison,
  'room-gallery': RoomGallery,
  text: TextBlock,
  image: ImageBlock,
  gallery: Gallery,
  features: Features,
  'villa-info': VillaInfo,
  'pool-kitchen': PoolKitchen,
  'unique-offerings': UniqueOfferings,
  'villa-story': VillaStory,
  'our-gallery': OurGallery,
  'story-sections': StorySections,
  'booking-section': BookingSection,
  rooms: Rooms,
  contact: Contact,
  custom: CustomBlock,
  'cta-section': CTASection,
  'testimonials-section': TestimonialsSection
}

function BlockRenderer({ block, index }) {
  const Component = blockComponents[block.type]
  
  if (!Component) {
    console.warn(`Unknown block type: ${block.type}`)
    return null
  }

  return (
    <div key={`${block.type}-${index}`} className="block-wrapper">
      <Suspense fallback={<div className="h-32 bg-gray-100 animate-pulse rounded" />}>
        <Component content={block.content} settings={block.settings} />
      </Suspense>
    </div>
  )
}

export default function DynamicPageRenderer({ page }) {
  if (!page) {
    return <Loading />
  }

  // Sort content blocks by order
  const sortedBlocks = [...(page.contentBlocks || [])].sort((a, b) => a.order - b.order)

  return (
    <Layout>
      <div className="dynamic-page">
        {sortedBlocks.length > 0 ? (
          sortedBlocks.map((block, index) => (
            <BlockRenderer key={`${block.type}-${block.order}-${index}`} block={block} index={index} />
          ))
        ) : (
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{page.title}</h1>
              <p className="text-gray-600">This page is under construction.</p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}