import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import SEOHead from '../components/SEO/SEOHead'
import Loading from '../components/UI/Loading'
import DynamicPageRenderer from '../components/Page/DynamicPageRenderer'

async function getPageData(slug = 'home') {
  // Skip API calls and use default data directly for development
  return getDefaultPageData(slug)
}

function getDefaultPageData(slug = 'home') {
  return {
    slug: slug,
    title: 'AGP Nature Villa - Home',
    status: 'published',
    template: 'home',
    seo: {
      title: 'Luxurious Private Pool Villa in Udaipur | AGP Nature Villa | Near Badi Lake',
      description: 'Experience the Aravallis at AGP Nature Villa. A 3BHK luxury retreat featuring the \'Blue Wave\' private pool and \'Infinity Garden.\' Pet-friendly and just 15 mins from Udaipur City.',
      keywords: ['villa', 'udaipur', 'homestay', 'luxury', 'pool', 'rajasthan', 'aravali', 'mountains', 'badi lake', 'pet-friendly', '3bhk villa', 'private pool'],
      canonicalUrl: 'https://agpnaturevilla.com/',
      structuredData: [
        {
          "@context": "https://schema.org",
          "@type": "Resort",
          "@id": "https://agpnaturevilla.com/#localbusiness",
          "name": "AGP Nature Villa",
          "alternateName": "AGP Nature Villa Udaipur",
          "description": "Luxurious 2 BHK villa in Udaipur surrounded by nature. Features a private swimming pool, open kitchen, bonfire area, and mountain views. Perfect for families and groups of 4-15 guests.",
          "url": "https://agpnaturevilla.com/",
          "logo": "https://agpnaturevilla.com/images/logos/agp-nature-villa-logo-main.png",
          "image": [
            "https://agpnaturevilla.com/images/Villa/slider-image-1.jpg",
            "https://agpnaturevilla.com/images/Villa/pool-area-agp-nature-villa.jpg",
            "https://agpnaturevilla.com/images/Villa/agp-nature-villa-outer-area.jpg",
            "https://agpnaturevilla.com/images/Villa/open-kitchen-and-dining-area.jpg",
            "https://agpnaturevilla.com/images/Villa/villa-gallery/slider-image-1.jpg",
            "https://agpnaturevilla.com/images/Villa/villa-gallery/swimming-pool.jpg",
            "https://agpnaturevilla.com/images/Rooms/image-10.jpg",
            "https://agpnaturevilla.com/images/Villa/villa-gallery/night-time-outdoor.jpg"
          ],
          "telephone": "+91-9892611983",
          "email": "agpnaturevilla@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "5, Dangiyo Ki Hundar, near Animal Aid",
            "addressLocality": "Udaipur",
            "addressRegion": "Rajasthan",
            "postalCode": "313011",
            "addressCountry": "IN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "24.571270",
            "longitude": "73.691544"
          },
          "checkinTime": "14:00",
          "checkoutTime": "11:00",
          "petsAllowed": true,
          "starRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "amenityFeature": [
            {
              "@type": "LocationFeatureSpecification",
              "name": "Private Swimming Pool",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Open Kitchen",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Bonfire Area",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Mountain View",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Pet Friendly",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Garden",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Air Conditioning",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "WiFi",
              "value": true
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Parking",
              "value": true
            }
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "124",
            "bestRating": "5",
            "worstRating": "1"
          },
          "priceRange": "₹15,000",
          "currenciesAccepted": "INR",
          "paymentAccepted": "Cash, Bank Transfer, UPI",
          "numberOfRooms": "3",
          "maximumAttendeeCapacity": "15",
          "smokingAllowed": false,
          "openingHours": "Mo-Su 00:00-24:00",
          "availableLanguage": ["English", "Hindi"],
          "sameAs": [
            "https://www.facebook.com/agpnaturevilla",
            "https://www.instagram.com/agpnaturevilla"
          ],
          "offers": {
            "@type": "Offer",
            "url": "https://agpnaturevilla.com/",
            "priceCurrency": "INR",
            "price": "15000",
            "priceValidUntil": "2026-12-31",
            "availability": "https://schema.org/InStock",
            "description": "₹15,000 per night. Minimum 2 nights on weekends. Full 3 BHK villa exclusively yours for up to 15 guests."
          },
          "potentialAction": {
            "@type": "ReserveAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://agpnaturevilla.com/contact/",
              "actionPlatform": [
                "https://schema.org/DesktopWebPlatform",
                "https://schema.org/MobileWebPlatform"
              ]
            },
            "result": {
              "@type": "LodgingReservation",
              "name": "Villa Booking"
            }
          },
          "tourBookingPage": "https://agpnaturevilla.com/contact/",
          "hasMap": "https://maps.google.com/maps/dir/?api=1&destination=AGP%20Nature%20Villa%20-%20Villa%20in%20Udaipur,%205,%20Dangiyo%20Ki%20Hundar,%20near%20Animal%20Aid,%20Udaipur,%20Rajasthan%20313011"
        },
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is the entire villa private for my group?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, AGP Nature Villa is a completely private villa in Udaipur. When you book, the entire property including the private pool, 3 bedrooms, and garden is exclusively yours. We do not share the space with other guests."
              }
            },
            {
              "@type": "Question",
              "name": "Is AGP Nature Villa pet-friendly?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely! We are a pet-friendly luxury villa. We welcome pets of all sizes and offer a large, enclosed garden area where your dogs can play safely and freely."
              }
            },
            {
              "@type": "Question",
              "name": "How far is the villa from Udaipur City Palace?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "The villa is located approximately 20-25 minutes drive from Udaipur City Palace and Fateh Sagar Lake, offering a peaceful nature retreat within easy reach of the city center."
              }
            },
            {
              "@type": "Question",
              "name": "Is food available at the villa?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. You can use our fully equipped open kitchen to cook your own meals. We can also arrange a private chef for authentic local cuisine or assist with ordering food from nearby restaurants."
              }
            },
            {
              "@type": "Question",
              "name": "Does the villa have a private pool?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, AGP Nature Villa features a private swimming pool with views of the Aravali mountains, exclusively accessible to your group during your stay."
              }
            }
          ]
        }
      ]
    },
    contentBlocks: [
      {
        type: 'villa-hero',
        order: 1,
        content: {
          title: 'Private Luxury Pool Villa in Udaipur',
          subtitle: 'AGP Nature Villa',
          description: 'A beautiful villa cum Homestay nestled amidst the Aravali mountains of Udaipur is a perfect destination to spend time with your family or friends. The care and comfort given here at our property is very personalized.',
          images: [
            '/images/Villa/slider-image-1.jpg',
            '/images/Villa/pool-area-agp-nature-villa.jpg',
            '/images/Villa/agp-nature-villa-outer-area.jpg',
            '/images/Villa/open-kitchen-and-dining-area.jpg'
          ],
          stats: {
            rating: 4.9,
            reviews: 182,
            rooms: 3,
            established: '2023'
          }
        }
      },
      {
        type: 'brand-experience',
        order: 2,
        content: {
          headline: 'Not Just a Villa. Your Private Kingdom in the Aravallis.',
          bodyText: `Escape the cramped city hotels and step into Dangiyo Ki Hundar, a sanctuary where silence is the ultimate luxury. At AGP Nature Villa, we don't just offer rooms; we offer the luxury of exclusivity.

Whether you are floating in the "Blue Wave" pool under the Udaipur sun, sharing stories by the "Heat Heaven" bonfire, or watching your pets run free in the "Infinity Garden", every corner of this 3-bedroom estate is yours. No sharing with strangers. No rigid hotel rules. Just you, your loved ones, and the mountains.`
        }
      },
      {
        type: 'pool-kitchen',
        order: 3,
        content: {
          poolTitle: 'POOL AREA',
          poolDescription: 'Enjoy a serene escape at our villa with a private pool, perfect for ultimate relaxation.',
          poolImage: '/images/Villa/pool-area-agp-nature-villa.jpg',
          kitchenTitle: 'OUTDOOR KITCHEN',
          kitchenDescription: 'Experience the joy of cooking and entertaining in our villa\'s spacious open kitchen.',
          kitchenImage: '/images/Villa/open-kitchen.jpg'
        }
      },
      {
        type: 'pricing-section',
        order: 4,
        content: {
          title: 'Special Tariffs for 2026',
          subtitle: 'Minimum 2 nights on weekends',
          note: '100% Private Booking – You never share the villa with strangers.',
          price: '15,000',
          inclusions: [
            'Full 3 BHK Villa — Exclusively Yours',
            'Private Swimming Pool (24/7 Access)',
            '"Laziz" Indoor Kitchen & "The Little Paris" Open Kitchen',
            '"Infinity Garden" — 2000 sq. ft. Lawn',
            '"Heat Heaven" Bonfire Area',
            'Up to 15 Guests',
            'Pet Friendly'
          ]
        }
      },
      {
        type: 'signature-amenities',
        order: 5,
        content: {
          headline: 'Curated Spaces for Every Mood',
          amenities: [
            {
              name: 'The "Blue Wave" Private Pool',
              description: 'Dive into our 242 sq. ft. crystal-clear private pool. Unlike hotel pools with restricted timings, the Blue Wave is yours 24/7. Whether it\'s a sunrise swim or a midnight dip under the stars, the water is always inviting.',
              image: '/images/Villa/pool-area-agp-nature-villa.jpg'
            },
            {
              name: '"Laziz" & "The Little Paris" Kitchens',
              description: 'Food tastes better when it\'s fresh. Use "Laziz," our fully equipped modern indoor kitchen, to whip up comfort food for your kids. For the evenings, step out to "The Little Paris," our chic open-air kitchenette perfect for barbecues, cocktails, and dining alfresco with a mountain view.',
              image: '/images/Villa/open-kitchen.jpg'
            },
            {
              name: 'The "Infinity Garden"',
              description: 'A sprawling 2000 sq. ft. lawn that lives up to its name. It is the perfect stage for your intimate events, morning yoga sessions, or simply letting your pets stretch their legs in a secure, walled environment.',
              image: '/images/Villa/villa-gallery/villa-outdoor-area-1.jpg'
            },
            {
              name: '"Heat Heaven" Bonfire Area',
              description: 'As the desert air cools at night, gather around Heat Heaven. Perfect for winter evenings, acoustic music sessions, and roasting marshmallows with family.',
              image: '/images/Villa/villa-gallery/bonfire-place.jpg'
            }
          ]
        }
      },
      {
        type: 'our-gallery',
        order: 6,
        content: {
          title: 'OUR Gallery',
          subtitle: '',
          images: [
            '/images/Villa/villa-gallery/slider-image-1.jpg',
            '/images/Villa/villa-gallery/slider-image-3.jpg',
            '/images/Villa/villa-gallery/slider-image-5.jpg',
            '/images/Villa/villa-gallery/slider-image-6.jpg',
            '/images/Villa/villa-gallery/slider-image-7.jpg',
            '/images/Villa/villa-gallery/slider-image-8.jpg',
            '/images/Villa/villa-gallery/slider-image-10.jpg',
            '/images/Villa/villa-gallery/agp-nature-villa-outer-area.jpg',
            '/images/Villa/villa-gallery/bonfire-place.jpg',
            '/images/Villa/villa-gallery/night-time-outdoor.jpg',
            '/images/Villa/villa-gallery/night-time-outdoor-1.jpg',
            '/images/Villa/villa-gallery/night-time-outdoor-2.jpg',
            '/images/Villa/villa-gallery/open-kitchen.jpg',
            '/images/Villa/villa-gallery/swimming-pool.jpg',
            '/images/Villa/villa-gallery/villa-outdoor-area-1.jpg',
            '/images/Villa/villa-gallery/villa-outdoor-area-2.jpg',
            '/images/Villa/villa-gallery/villa-outdoor-area-3.jpg'
          ]
        }
      },
      {
        type: 'story-sections',
        order: 7,
        content: {
          sections: [
            {
              title: 'Unwind at AGP Nature Villa',
              content: `Nestled in the Aravali mountains, AGP Nature Villa, the <a href="https://agpnaturevilla.com/villa-in-udaipur/" target="_blank" rel="noopener">best villa in Udaipur</a>, beckons like a quiet promise. Dust kicks up as cars roll in, and the first thing that strikes is the space—wide, open, begging for bare feet and easy laughs.

This isn't a stopover for city explorers; it's a homestay built for families to pile in, groups to sprawl out, or couples to steal some private time. AGP Nature Villa turns a weekend into a reset with luxury that feels less like a show and more like a well-worn blanket.

Three rooms wait inside—Love Nest, Mountain Peak, Valley View—each one a little kingdom of plush beds and soft light. Kids tumble into the big garden, chasing shadows, while the grown-ups claim a corner by the bonfire place, sparks snapping in the dusk.

This is where time slows, and AGP Nature Villa becomes less of a place and more of a feeling.`,
              layout: 'left',
              backgroundColor: 'gradient',
              image: '/images/Villa/slider-image-1.jpg'
            },
            {
              title: 'Aravali Calm, Family Style',
              content: `The Aravalis hug AGP Nature Villa close, their rough slopes a wall against the world. No city clamor here—just the rustle of leaves and the odd bird call cutting through.

Udaipur's lakes and forts sit out there somewhere, but this spot isn't about chasing sights. It's for sinking into the moment, whether that's splashing in the swimming pool or stirring something hearty in the modern kitchen.

Outside, the big garden stretches wide—perfect for a messy game of tag or a lazy picnic. The outdoor kitchen fires up, smoke curling as someone flips rotis on a whim.

AGP Nature Villa thrives on that raw, unscripted vibe—nature's hush paired with a setup that lets families or friends do their thing.`,
              layout: 'right',
              backgroundColor: 'white',
              image: '/images/Villa/agp-nature-villa-outer-area.jpg'
            },
            {
              title: 'Rooms and Spaces That Fit',
              content: `Every stay at AGP Nature Villa starts with the rooms. Love Nest has a cozy nook vibe, all warm tones and quiet corners. Mountain Peak throws open views of the craggy hills, rugged and real.

Valley View pulls you in with a sweep of green dipping low—each one's got its own pull, but they all deliver that sink-in comfort. Families split up and regroup; groups shuffle who gets what.

The crew here knows how to make it work. Years of hosting mean they've got the knack—extra pillows land before the kids start whining, the bonfire's crackling by nightfall. No polished scripts, just folks who get it. AGP Nature Villa isn't about fuss—it's about handing you the keys to your own retreat.`,
              layout: 'left',
              backgroundColor: 'gradient',
              image: '/images/Rooms/image-10.jpg'
            },
            {
              title: 'Built for Getaways, Not Hustle',
              content: `Udaipur's got its share of stays, but AGP Nature Villa skips the tourist trap noise. This isn't a base for city hopping—it's the whole point. A guest once kicked back by the pool, boots off, and muttered, "Finally, no itinerary."

That's the deal: swimming laps, firing up the outdoor kitchen, or just watching the garden sway in the breeze. For more on Udaipur options, the guide to picking a spell spells it out. Still, this one's tough to beat.

AGP Nature Villa keeps it simple. No overblown extras—just a modern kitchen humming with use, a bonfire place spitting embers, and a garden that feels like yours. It's private time done right.`,
              layout: 'right',
              backgroundColor: 'white',
              image: '/images/Villa/pool-area-agp-nature-villa.jpg'
            },
            {
              title: 'Your Weekend, Your Way',
              content: `Gatherings come alive at AGP Nature Villa. Picture a family sprawled across the garden, kids shrieking as they cannonball into the pool. Or friends around the bonfire, passing stories with the night closing in.

Couples slip off to Love Nest, windows cracked to let the mountain air drift through. No need to roam—the villa's got everything for a weekend that sticks.

The swimming pool glints under the sun, cool and tempting. The outdoor kitchen's a rough gem—someone's always poking at the coals, turning out charred snacks. AGP Nature Villa hands over the reins: stay in, tune out, and make it yours.`,
              layout: 'left',
              backgroundColor: 'gradient',
              image: '/images/Villa/slider-image-3.jpg'
            }
          ]
        }
      },
      {
        type: 'faq-section',
        order: 8,
        content: {
          title: 'Frequently Asked Questions about Your Luxury Stay',
          faqs: [
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
        }
      },
      {
        type: 'cta-section',
        order: 9,
        content: {
          title: 'Book Your Break Now',
          description: 'Spots at AGP Nature Villa don\'t hang around. Fall through spring, the Aravalis turn crisp and clear—prime for a getaway. Call +91 9892611983 or lock it in on the site. Don\'t wait; this isn\'t the kind of place that sits quiet. Come see why AGP Nature Villa turns a quick trip into something you\'ll carry home.',
          phone: '+91 9892611983',
          directionLink: 'http://maps.google.com/maps/dir/?api=1&destination=AGP%20Nature%20Villa%20-%20Villa%20in%20Udaipur,%205,%20Dangiyo%20Ki%20Hundar,%20near%20Animal%20Aid,%20Udaipur,%20Rajasthan%20313011'
        }
      }
    ]
  }
}

export async function generateMetadata() {
  const page = await getPageData('home')
  
  if (!page) {
    return {
      title: 'AGP Nature Villa - Best Luxurious Villa in Udaipur',
      description: 'A beautiful villa cum Homestay nestled amidst the Aravali mountains'
    }
  }

  return {
    title: page.seo.title,
    description: page.seo.description,
    keywords: page.seo.keywords?.join(', '),
    openGraph: {
      title: page.seo.ogTitle || page.seo.title,
      description: page.seo.ogDescription || page.seo.description,
      images: page.seo.ogImage ? [page.seo.ogImage] : [],
      url: 'https://agpnaturevilla.com/',
    },
    alternates: {
      canonical: page.seo.canonicalUrl || 'https://agpnaturevilla.com/',
    }
  }
}

export default async function HomePage() {
  const page = await getPageData('home')
  
  if (!page) {
    notFound()
  }

  return (
    <>
      <SEOHead structuredData={page.seo.structuredData} />
      <Suspense fallback={<Loading />}>
        <DynamicPageRenderer page={page} />
      </Suspense>
    </>
  )
}