import { Suspense } from 'react'
import { notFound } from 'next/navigation'
import SEOHead from '../../components/SEO/SEOHead'
import Loading from '../../components/UI/Loading'
import DynamicPageRenderer from '../../components/Page/DynamicPageRenderer'

async function getPageData(slug) {
  const cleanSlug = Array.isArray(slug) ? slug.join('/') : slug
  // Skip API calls for static deployment - use default data directly
  return getDefaultPageData(cleanSlug)
}

function getDefaultPageData(slug) {
  // Valid page slugs
  const validSlugs = ['villa-in-udaipur', 'rooms', 'contact', 'guide-pdf', '3bhk-private-villa-udaipur']

  // If slug is not in valid pages, return null to trigger 404
  if (!validSlugs.includes(slug)) {
    return null
  }

  const defaultPages = {
    'villa-in-udaipur': {
      slug: 'villa-in-udaipur',
      title: 'The Villa - AGP Nature Villa',
      template: 'villa',
      seo: {
        title: 'Luxury Villa in Udaipur - AGP Nature Villa',
        description: 'Discover our beautiful villa with private pool, mountain views, and luxury amenities in Udaipur, Rajasthan.',
        canonicalUrl: 'https://agpnaturevilla.com/villa-in-udaipur/'
      },
      contentBlocks: [
        {
          type: 'villa-hero',
          order: 1,
          content: {
            title: 'VILLA in Udaipur',
            subtitle: 'About AGP Nature Villa',
            description: 'Every moment spent here is infused with personalized care and thoughtful hospitality designed to make you feel completely at home.',
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
          type: 'villa-storytelling',
          order: 2,
          content: {
            title: 'The Ultimate Villa in Udaipur',
            sections: [
              {
                title: 'Udaipur\'s Hidden Gem',
                text: 'Udaipur\'s charm is no secret—lakes ripple under golden light, palaces loom with history, and the Aravali mountains cast a timeless shadow. In 2023, nearly 2 million travelers flooded in, hooked on its royal allure. Hotels clog the streets, but for a true escape, nothing beats a villa in Udaipur.',
                image: '/images/Villa/agp-nature-villa-outer-area.jpg',
                accent: 'from-blue-500 to-purple-600'
              },
              {
                title: 'The Arrival Experience',  
                text: 'Drive up to AGP Nature Villa, and the vibe hits hard—gravel pops under tires, and the big garden unfurls like a playground begging for chaos. Inside, three luxury rooms stand apart: Love Nest, a snug hideout; Mountain Peak, framed by jagged hills; Valley View, green and sprawling below.',
                image: '/images/Villa/slider-image-1.jpg',
                accent: 'from-green-500 to-teal-600'
              },
              {
                title: 'Private Paradise',
                text: 'A swimming pool glimmers like a private jewel, a bonfire place crackles with promise, and kitchens—modern indoors, rugged outdoors—wait for your takeover. This isn\'t just a luxury villa in Udaipur—it\'s AGP Nature Villa, the king of private getaways.',
                image: '/images/Villa/pool-area-agp-nature-villa.jpg',
                accent: 'from-orange-500 to-red-600'
              }
            ]
          }
        },
        {
          type: 'interactive-amenities',
          order: 3,
          content: {
            title: 'What\'s Present at AGP Nature Villa',
            subtitle: 'Every detail crafted for your perfect mountain escape. Equipped with all modern amenities and adhering to the highest safety standards, ensuring comfort and security.'
          }
        },
        {
          type: 'luxury-rooms',
          order: 4,
          content: {
            title: 'Luxury Rooms That Redefine Comfort',
            subtitle: 'Rooms set the tone, and AGP Nature Villa nails it. These aren\'t just beds to crash in—they\'re sanctuaries, plush and roomy, built for kicking back.',
            rooms: [
              {
                id: 1,
                name: 'Love Nest',
                tagline: 'Where Hearts Find Home',
                description: 'Love Nest wraps you in warm tones and quiet nooks—perfect for couples craving a romantic stay or parents dodging the kids\' racket. Pillows fluffed to sink into, lights dialed soft, and corners that feel lived-in.',
                features: ['King Size Bed', 'Mountain Views', 'Romantic Ambiance'],
                image: '/images/Rooms/image-6.jpg',
                gradient: 'from-rose-500 via-pink-500 to-red-500',
                mood: 'Intimate & Romantic'
              },
              {
                id: 2, 
                name: 'Mountain Peak',
                tagline: 'Touch the Aravalis',
                description: 'Mountain Peak throws the Aravalis in your face, glass walls letting the peaks leer back over morning tea. Wake up to jagged hills painting the horizon, where every sunrise feels like a personal performance.',
                features: ['Floor-to-Ceiling Windows', 'Mountain Views', 'Morning Tea Setup', 'Panoramic Vistas'],
                image: '/images/Rooms/image-7.jpg',
                gradient: 'from-blue-500 via-indigo-500 to-purple-500',
                mood: 'Majestic & Inspiring'
              },
              {
                id: 3,
                name: 'Valley View', 
                tagline: 'Green Dreams Unfold',
                description: 'Valley View pulls the valley close, a green sweep that feels like your own secret. Watch the landscape breathe with morning mist, where rolling greens stretch endlessly and peace settles into your soul.',
                features: ['Valley Panorama', 'Private Terrace', 'Nature Immersion', 'Serene Atmosphere'],
                image: '/images/Rooms/image-4.jpg',
                gradient: 'from-green-500 via-emerald-500 to-teal-500',
                mood: 'Tranquil & Refreshing'
              }
            ]
          }
        },
        {
          type: 'our-gallery',
          order: 5,
          content: {
            title: 'Villa Gallery',
            subtitle: 'Experience the beauty and luxury through our curated collection of memories waiting to be made',
            images: [
              '/images/Villa/slider-image-1.jpg',
              '/images/Villa/slider-image-2.jpg',
              '/images/Villa/slider-image-3.jpg',
              '/images/Villa/slider-image-4.jpg',
              '/images/Villa/slider-image-5.jpg',
              '/images/Villa/slider-image-6.jpg',
              '/images/Villa/slider-image-7.jpg',
              '/images/Villa/slider-image-8.jpg',
              '/images/Villa/slider-image-9.jpg',
              '/images/Villa/slider-image-10.jpg',
              '/images/Villa/pool-area-agp-nature-villa.jpg',
              '/images/Villa/swimming-pool.jpg',
              '/images/Villa/open-kitchen.jpg',
              '/images/Villa/open-kitchen-and-dining-area.jpg',
              '/images/Villa/modern-indoor-kitchen.jpg',
              '/images/Villa/agp-nature-villa-outer-area.jpg',
              '/images/Villa/bonfire-place.jpg',
              '/images/Villa/image-1.jpg'
            ]
          }
        },
        {
          type: 'story-sections',
          order: 6,
          content: {
            title: 'Discover AGP Nature Villa',
            sections: [
              {
                title: 'The Ultimate Villa in Udaipur - AGP Nature Villa',
                content: 'Udaipur\'s charm is no secret—lakes ripple under golden light, palaces loom with history, and the Aravali mountains cast a timeless shadow. In 2023, nearly 2 million travelers flooded in, hooked on its royal allure.\n\nDrive up to AGP Nature Villa, and the vibe hits hard—gravel pops under tires, and the big garden unfurls like a playground begging for chaos. Inside, three luxury rooms stand apart: Love Nest, a snug hideout; Mountain Peak, framed by jagged hills; Valley View, green and sprawling below.\n\nA swimming pool glimmers like a private jewel, a bonfire place crackles with promise, and kitchens—modern indoors, rugged outdoors—wait for your takeover.\n\nThis isn\'t just a luxury villa in Udaipur—it\'s AGP Nature Villa, the king of private getaways, and here\'s why it leaves every other option scrambling.',
                image: '/images/Villa/villa-gallery/night-time-outdoor.jpg',
                layout: 'left',
                backgroundColor: 'gradient'
              },
              {
                title: 'Luxury Rooms That Redefine Comfort',
                content: 'Rooms set the tone, and AGP Nature Villa nails it. Love Nest wraps you in warm tones and quiet nooks—perfect for couples craving a romantic stay or parents dodging the kids\' racket.\n\nMountain Peak throws the Aravalis in your face, glass walls letting the peaks leer back over morning tea. Valley View pulls the valley close, a green sweep that feels like your own secret. These aren\'t just beds to crash in—they\'re sanctuaries, plush and roomy, built for kicking back.\n\nOther Udaipur homestays might slap "luxury" on a cramped box. Not AGP Nature Villa. Decades of hospitality craft go into these spaces—pillows fluffed to sink into, lights dialed soft, and corners that feel lived-in.\n\nFamilies split the crew across them; groups bicker over who gets Valley View\'s panorama. This family villa Udaipur lovers rave about isn\'t playing—it\'s rewriting what a villa in Udaipur can be.',
                image: '/images/Rooms/image-4.jpg',
                layout: 'right',
                backgroundColor: 'white'
              },
              {
                title: 'A Private Pool and Garden That Owns the Scene',
                content: 'Walk out at AGP Nature Villa, and the swimming pool grabs you—cool, clear, and yours alone. No elbowing strangers like at some hotel\'s soggy free-for-all.\n\nKids leap in, water exploding as yells bounce off the hills; adults float, drink in hand, the Aravalis brooding above. It\'s not just a dip—it\'s the heart of this private getaway, turning a lazy day into gold.\n\nThe big garden seals it. Grass wears thin from tag games, a blanket lies crumpled where lunch dragged on, and a lone chair sits crooked from someone chasing the sunset. Other Udaipur retreats might skimp with a patio or nothing at all.\n\nAGP Nature Villa delivers a sprawl space for family chaos, group sprawls, or just soaking in the quiet. No luxury villa in Udaipur matches this duo; it\'s why this Aravali retreat reigns supreme.',
                image: '/images/Villa/swimming-pool-1.jpg',
                layout: 'left',
                backgroundColor: 'gradient'
              },
              {
                title: 'Bonfire Nights and Kitchens That Spark Connection',
                content: 'Nights at AGP Nature Villa don\'t dim—they blaze. The bonfire place sits rough-hewn, logs piled like a challenge. Strike a match, and flames lick the dark, embers swirling as the Aravalis swallow the haze.\n\nFamilies cluster tight, kids jabbing sticks into the glow; friends trade tales that grow wilder with each round. It\'s primal, messy, and pure—no hotel\'s stiff bar can touch it.\n\nFood\'s where it gets real. The modern kitchen shines—steel counters, stocked shelves, ready for a midnight snack or a full-blown feast. Staff can whip up something hot and local if you\'d rather lounge.\n\nOut back, the outdoor kitchen\'s grittier—coals flare, meat sizzles, smoke stings your eyes just right. Other villas in Udaipur might toss you a hot plate and call it done. AGP Nature Villa builds bonding into its core, making it the best family villa Udaipur has to offer.',
                image: '/images/Villa/bonfire-place.jpg',
                layout: 'right',
                backgroundColor: 'white'
              },
              {
                title: 'Tailored for Family Time and Private Retreats',
                content: 'Udaipur\'s got its tourist pull—Lake Pichola, City Palace, the works—but AGP Nature Villa isn\'t about that hustle. This is where families dig in deep. The garden turns into a battleground, cousins darting through as shouts fill the air.\n\nThe pool\'s a splash fest till the sun quits, parents lounging by the bonfire, finally free. Love Nest, Mountain Peak, and Valley View split the gang just right—everyone\'s got their spot.\n\nGroups eat it up, too. Buddies haul in coolers, fire up the outdoor kitchen for a barbecue that stinks of charred glory, and then sprawl across the villa till dawn. Couples sneak to Love Nest, windows ajar, mountain air sifting in slow.\n\nWeekend getaways here don\'t need a checklist—the villa\'s the whole deal. Hotels lean on city noise; even big names can\'t match this seclusion. AGP Nature Villa owns the private getaway game.',
                image: '/images/Villa/slider-image-10.jpg',
                layout: 'left',
                backgroundColor: 'gradient'
              },
              {
                title: 'Service That\'s a Cut Above',
                content: 'The crew at AGP Nature Villa isn\'t just staff—they\'re the backbone. Years of hosting sharpen their edge: blankets drop before you\'re cold, the bonfire\'s roaring before you blink, a kid\'s fussy plate gets swapped without a shrug.\n\nNo fake grins or stiff nods—just folks who\'ve mastered making you feel at home. A guest once muttered, "They read our minds." That\'s AGP Nature Villa—not luck, but skill.\n\nStack that against hotel churn or shaky villa rentals. This luxury homestay delivers care that\'s personal—your stay, your rhythm, their polish. It\'s why this villa in Udaipur doesn\'t just stand out—it towers.',
                image: '/images/Villa/villa-gallery/night-time-outdoor-1.jpg',
                layout: 'right',
                backgroundColor: 'white'
              },
              {
                title: 'Near Udaipur\'s Gems, But the Real Gem\'s Here',
                content: 'Udaipur\'s got its draws—Lake Pichola\'s glassy boats, Sajjangarh Fort\'s hilltop glare, the City Palace\'s sprawl. They\'re a jaunt from AGP Nature Villa, there if you itch for them. But why bother?\n\nThis Aravali retreat packs the punch—pool, garden, bonfire, kitchens—keeping you planted. Other spots bank on location; AGP Nature Villa makes its own pull.\n\nGuests back it up. "Skipped the city—pool and bonfire were plenty," one family said. Another raved, "Rooms stunned us, garden was massive—best weekend yet." That\'s the clincher: AGP Nature Villa isn\'t just a villa in Udaipur—it\'s *the* villa in Udaipur.',
                image: '/images/Villa/villa-gallery/slider-image-7.jpg',
                layout: 'left',
                backgroundColor: 'gradient'
              }
            ]
          }
        },
        {
          type: 'testimonials-section',
          order: 7,
          content: {
            title: 'What Our Guests Say',
            subtitle: 'Real experiences from families and couples who made AGP Nature Villa their mountain retreat',
            testimonials: [
              {
                id: 1,
                name: 'Geetu Lamba',
                location: 'Udaipur',
                rating: 5,
                text: 'Had a great experience. Amazing place to stay, well maintained. The host, Mr. Gaurav, is very cooperative & friendly. Highly recommended 👍😍😍',
                experience: 'Family Stay'
              },
              {
                id: 2,
                name: 'Kunal Meena',
                location: 'Udaipur',
                rating: 5,
                text: 'The place is located in a quiet and tranquil place in the outskirts of Udaipur. The villa has great pool and so many cute spaces to enjoy your time over on a weekend with your family. The rooms were clean and spacious surrounded by lush greens. Loved the stay over here.',
                experience: 'Family Weekend'
              },
              {
                id: 3,
                name: 'Ajay Singh Panwar',
                location: 'Udaipur',
                rating: 5,
                text: 'Visited Last Friday on this Location. It\'s Amazing, Nature and mountain view is awesome. Nice property and facility. Good Location for Peacefully time spending with Friends and family.',
                experience: 'Friends & Family'
              },
              {
                id: 4,
                name: 'Aarzu Katara',
                location: 'Udaipur',
                rating: 5,
                text: 'Unforgettable experience at AGP nature villa! From the moment we arrived, the warm and welcoming staff made us feel right at home. The accommodations were immaculate, with spacious rooms offering stunning views of the surrounding landscape also the nature in way truly relaxes the soul.',
                experience: 'Nature Retreat'
              },
              {
                id: 5,
                name: 'Sakshi Bhatt',
                location: 'Udaipur',
                rating: 5,
                text: 'Agp nature Villa is a ultimate heaven for those who want to spend quality time with friends and family. Beautiful lush green surroundings, perfect pool space and peace you will find there. Overall we had an amazing experience at this property.',
                experience: 'Friends & Family'
              }
            ]
          }
        },
        {
          type: 'cta-section',
          order: 8,
          content: {
            title: 'Ready for Your Aravali Escape?',
            description: 'This isn\'t just a luxury villa in Udaipur—it\'s AGP Nature Villa, the king of private getaways. Your perfect mountain retreat awaits with personalized care, unforgettable experiences, and memories that will last a lifetime. Call +91 9892611983 or lock it in on the site.',
            phone: '+91 9892611983',
            directionLink: 'http://maps.google.com/maps/dir/?api=1&destination=AGP%20Nature%20Villa%20-%20Villa%20in%20Udaipur,%205,%20Dangiyo%20Ki%20Hundar,%20near%20Animal%20Aid,%20Udaipur,%20Rajasthan%20313011'
          }
        }
      ]
    },
    'rooms': {
      slug: 'rooms',
      title: 'Luxury Rooms - AGP Nature Villa',
      template: 'rooms',
      seo: {
        title: 'Luxury Rooms - Love Nest, Mountain Peak & Valley View | AGP Nature Villa',
        description: 'Experience luxury in our three unique rooms: Love Nest for romance, Mountain Peak for breathtaking views, and Valley View for tranquil serenity. Book your perfect mountain retreat.',
        keywords: ['luxury rooms', 'udaipur rooms', 'villa rooms', 'mountain view rooms', 'romantic rooms', 'nature villa accommodation'],
        canonicalUrl: 'https://agpnaturevilla.com/rooms/',
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Accommodation",
          "name": "AGP Nature Villa Rooms",
          "description": "Three luxury rooms with mountain and valley views",
          "numberOfRooms": "3",
          "amenityFeature": [
            {
              "@type": "LocationFeatureSpecification",
              "name": "Air Conditioning"
            },
            {
              "@type": "LocationFeatureSpecification", 
              "name": "Mountain Views"
            },
            {
              "@type": "LocationFeatureSpecification",
              "name": "Mountain Views"
            }
          ]
        }
      },
      contentBlocks: [
        {
          type: 'room-hero',
          order: 1,
          content: {
            title: 'Luxury Rooms',
            subtitle: 'Your Perfect Mountain Retreat',
            description: 'Three beautifully designed rooms, each offering a unique perspective of the majestic Aravali mountains. From intimate romance to panoramic vistas, find your perfect sanctuary.',
            images: [
              '/images/Rooms/image-7.jpg',
              '/images/Rooms/image-8.jpg',
              '/images/Rooms/image-9.jpg',
              '/images/Rooms/image-10.jpg'
            ],
            stats: {
              rooms: 3,
              capacity: '4 guests per room',
              amenities: '15+ luxury amenities',
              rating: 4.9
            }
          }
        },
        {
          type: 'detailed-room-showcase',
          order: 2,
          content: {
            title: "Choose Your Perfect Room",
            subtitle: "Each room tells its own story, offers its own magic",
            rooms: [
              {
                id: 1,
                name: "Love Nest",
                tagline: "Where Hearts Find Home",
                description: "Love Nest wraps you in warm tones and quiet nooks—perfect for couples craving a romantic stay or parents dodging the kids' racket. Pillows fluffed to sink into, lights dialed soft, and corners that feel lived-in. Every detail whispers intimacy, from the private balcony overlooking mountain silhouettes to the cozy reading corner bathed in golden light.",
                shortDescription: "Intimate sanctuary for couples seeking romance and tranquility",
                features: ["King Size Bed", "Mountain Views", "Romantic Ambiance", "Reading Corner", "Mood Lighting"],
                amenities: ["AC", "WiFi", "TV", "Room Service"],
                images: ["/images/Rooms/image-10.jpg"],
                gradient: "from-rose-500 via-pink-500 to-red-500",
                mood: "Intimate & Romantic",
                capacity: "4 guests",
                beds: "1 Bed + 2 Extra Beds",
                area: "320 sq ft",
                view: "Mountain & Garden"
              },
              {
                id: 2,
                name: "Mountain Peak", 
                tagline: "Touch the Aravalis",
                description: "Mountain Peak throws the Aravalis in your face, glass walls letting the peaks leer back over morning tea. Wake up to jagged hills painting the horizon, where every sunrise feels like a personal performance. Floor-to-ceiling windows frame nature's theater, while the spacious layout gives you room to breathe and appreciate the raw beauty of Rajasthan's ancient mountains.",
                shortDescription: "Breathtaking mountain vistas through panoramic windows",
                features: ["Floor-to-Ceiling Windows", "Mountain Views", "Morning Tea Setup", "Panoramic Vistas", "Spacious Layout", "Sunrise Views"],
                amenities: ["AC", "WiFi", "TV", "Work Desk"],
                images: ["/images/Rooms/image-6.jpg"],
                gradient: "from-blue-500 via-indigo-500 to-purple-500",
                mood: "Majestic & Inspiring",
                capacity: "4 guests",
                beds: "1 Bed + 2 Extra Beds",
                area: "380 sq ft",
                view: "Aravali Mountains"
              },
              {
                id: 3,
                name: "Valley View",
                tagline: "Green Dreams Unfold", 
                description: "Valley View pulls the valley close, a green sweep that feels like your own secret. Watch the landscape breathe with morning mist, where rolling greens stretch endlessly and peace settles into your soul. The private terrace becomes your meditation deck, while large windows blur the line between indoor comfort and outdoor serenity.",
                shortDescription: "Serene valley panoramas with private terrace retreat",
                features: ["Valley Panorama", "Private Terrace", "Nature Immersion", "Serene Atmosphere", "Garden Access", "Bird Watching"],
                amenities: ["AC", "WiFi", "TV"],
                images: ["/images/Rooms/image-7.jpg"],
                gradient: "from-green-500 via-emerald-500 to-teal-500", 
                mood: "Tranquil & Refreshing",
                capacity: "4 guests",
                beds: "1 Bed + 2 Extra Beds",
                area: "350 sq ft",
                view: "Valley & Gardens"
              }
            ]
          }
        },
        {
          type: 'room-gallery',
          order: 3,
          content: {
            title: "Room Gallery",
            subtitle: "Explore every corner of luxury and comfort",
            categories: [
              { id: 'all', name: 'All Rooms', count: 6 },
              { id: 'love-nest', name: 'Love Nest', count: 1 },
              { id: 'mountain-peak', name: 'Mountain Peak', count: 2 },
              { id: 'valley-view', name: 'Valley View', count: 3 }
            ],
            images: [
              {
                id: 2,
                src: '/images/Rooms/image-10.jpg',
                category: 'love-nest',
                title: 'Love Nest - Reading Corner',
                description: 'Perfect nook for quiet moments together'
              },
              {
                id: 4,
                src: '/images/Rooms/image-6.jpg',
                category: 'mountain-peak',
                title: 'Mountain Peak - Morning Light',
                description: 'Wake up to breathtaking sunrise views'
              },
              {
                id: 5,
                src: '/images/Rooms/image-4.jpg',
                category: 'valley-view',
                title: 'Valley View - Green Serenity',
                description: 'Rolling green valleys as far as the eye can see'
              },
              {
                id: 6,
                src: '/images/Rooms/image-7.jpg',
                category: 'valley-view',
                title: 'Valley View - Private Terrace',
                description: 'Your personal outdoor sanctuary'
              },
              {
                id: 7,
                src: '/images/Rooms/image-8.jpg',
                category: 'mountain-peak',
                title: 'Mountain Peak - Spacious Interior',
                description: 'Generous space with mountain-inspired design'
              },
              {
                id: 8,
                src: '/images/Rooms/image-9.jpg',
                category: 'valley-view',
                title: 'Valley View - Natural Light',
                description: 'Sun-drenched spaces overlooking the valley'
              }
            ]
          }
        },
        {
          type: 'cta-section',
          order: 4,
          content: {
            title: 'Ready to Book Your Perfect Room?',
            description: 'Each room at AGP Nature Villa offers a unique mountain experience. Whether you seek romance, adventure, or tranquility, your perfect retreat awaits in the heart of the Aravali mountains. Call +91 9892611983 or book directly through our website.',
            phone: '+91 9892611983',
            directionLink: 'http://maps.google.com/maps/dir/?api=1&destination=AGP%20Nature%20Villa%20-%20Villa%20in%20Udaipur,%205,%20Dangiyo%20Ki%20Hundar,%20near%20Animal%20Aid,%20Udaipur,%20Rajasthan%20313011'
          }
        }
      ]
    },
    'contact': {
      slug: 'contact',
      title: 'Contact - AGP Nature Villa',
      template: 'contact',
      seo: {
        title: 'Contact AGP Nature Villa - Book Your Stay',
        description: 'Get in touch to book your perfect stay. Located in Udaipur, Rajasthan.',
        canonicalUrl: 'https://agpnaturevilla.com/contact/'
      },
      contentBlocks: [
        {
          type: 'contact',
          order: 1,
          content: {
            title: 'Contact Us',
            subtitle: 'Get in touch to book your perfect stay'
          }
        }
      ]
    },
    '3bhk-private-villa-udaipur': {
      slug: '3bhk-private-villa-udaipur',
      title: '3BHK Private Villa in Udaipur - AGP Nature Villa',
      template: 'villa',
      seo: {
        title: '3BHK Private Pool Villa in Udaipur | Luxury 3 Bedroom Estate',
        description: 'Book your private 3BHK villa in Udaipur. Exclusive access to the Blue Wave pool, Little Paris outdoor kitchen & Infinity Garden. Sleeps 6-15. Pet-friendly.',
        keywords: ['3bhk villa udaipur', 'private villa udaipur', 'blue wave pool', 'luxury villa', 'udaipur villa', 'badi lake', 'aravali mountains'],
        canonicalUrl: 'https://agpnaturevilla.com/3bhk-private-villa-udaipur/',
        structuredData: [
          {
            '@context': 'https://schema.org',
            '@type': 'VacationRental',
            '@id': 'https://agpnaturevilla.com/3bhk-private-villa-udaipur/',
            name: 'AGP Nature Villa - Luxury 3BHK Private Villa in Udaipur',
            description: 'Exclusive 3-bedroom private villa in Udaipur with Blue Wave pool, dual kitchens, luxury bedrooms, and Infinity Garden surrounded by the Aravali mountains. Perfect for families and groups seeking privacy and luxury.',
            url: 'https://agpnaturevilla.com/3bhk-private-villa-udaipur/',
            additionalType: 'Villa',
            image: [
              'https://agpnaturevilla.com/images/Villa/slider-image-1.jpg',
              'https://agpnaturevilla.com/images/Villa/pool-area-agp-nature-villa.jpg',
              'https://agpnaturevilla.com/images/Villa/swimming-pool.jpg',
              'https://agpnaturevilla.com/images/Villa/open-kitchen-and-dining-area.jpg'
            ],
            address: {
              '@type': 'PostalAddress',
              streetAddress: '5, Dangiyo Ki Hundar, near Animal Aid',
              addressLocality: 'Udaipur',
              addressRegion: 'Rajasthan',
              postalCode: '313011',
              addressCountry: 'IN'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 24.6293633,
              longitude: 73.7308233
            },
            containsPlace: {
              '@type': 'Accommodation',
              name: 'Luxury 3BHK Villa with Pool',
              accommodationCategory: 'Villa',
              numberOfRooms: 3,
              numberOfBedrooms: 3,
              numberOfBathroomsTotal: 3,
              occupancy: {
                '@type': 'QuantitativeValue',
                minValue: 6,
                maxValue: 15
              },
              amenityFeature: [
                {
                  '@type': 'LocationFeatureSpecification',
                  name: 'Private Swimming Pool',
                  value: 'Blue Wave Pool with 242 sq ft area, LED lighting, and filtration system'
                },
                {
                  '@type': 'LocationFeatureSpecification',
                  name: 'Dual Kitchens',
                  value: 'Modern indoor kitchen (Laziz) and outdoor BBQ kitchen (Little Paris)'
                },
                {
                  '@type': 'LocationFeatureSpecification',
                  name: 'Infinity Garden',
                  value: 'Private garden with mountain views'
                },
                {
                  '@type': 'LocationFeatureSpecification',
                  name: 'Pet Friendly',
                  value: true
                },
                {
                  '@type': 'LocationFeatureSpecification',
                  name: 'WiFi',
                  value: 'High-speed fiber optic internet'
                },
                {
                  '@type': 'LocationFeatureSpecification',
                  name: 'Air Conditioning',
                  value: true
                },
                {
                  '@type': 'LocationFeatureSpecification',
                  name: 'Parking',
                  value: 'Free on-site parking'
                },
                {
                  '@type': 'LocationFeatureSpecification',
                  name: 'Security',
                  value: '24/7 caretaker in separate staff quarters'
                }
              ],
              floorSize: {
                '@type': 'QuantitativeValue',
                value: 2500,
                unitCode: 'FTK'
              }
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: 4.9,
              reviewCount: 182,
              bestRating: 5,
              worstRating: 1
            },
            offers: {
              '@type': 'Offer',
              businessFunction: 'http://purl.org/goodrelations/v1#LeaseOut',
              availability: 'https://schema.org/InStock',
              priceCurrency: 'INR',
              url: 'https://agpnaturevilla.com/contact/'
            },
            telephone: '+91-9892611983',
            checkinTime: '14:00',
            checkoutTime: '11:00',
            petsAllowed: true,
            smokingAllowed: false
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Is AGP Nature Villa safe for solo female travelers or all-girl groups?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes, AGP Nature Villa is extremely safe. The property is fully walled and gated. We have a dedicated caretaker who resides in separate staff quarters on the premises to ensure security 24/7 without intruding on your privacy. The neighborhood of Dangiyo Ki Hundar is peaceful and residential.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can we host a pool party with loud music?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We are a nature villa, so while we encourage enjoyment, we respect the tranquility of the Aravalis. You can play music at a moderate volume on the outdoor speakers provided. For late-night parties, we ask guests to move the loud music indoors after 10:00 PM to comply with local noise regulations.'
                }
              },
              {
                '@type': 'Question',
                name: 'Is the pool heated for winter stays?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The Blue Wave pool is an outdoor fresh-water pool. It is not electrically heated. However, because the deck receives direct sunlight from morning until late afternoon, the water remains pleasant during the day, even in winter months like November and February.'
                }
              },
              {
                '@type': 'Question',
                name: 'Do you provide a cook or is it self-catering only?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We offer a hybrid model. The villa is designed for self-catering with fully equipped kitchens. However, for a relaxing holiday, we can arrange a local cook (Maharaj) for an additional daily charge who can prepare home-style Rajasthani meals using ingredients you provide or we procure for you.'
                }
              },
              {
                '@type': 'Question',
                name: 'How is the internet connectivity for workcations?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We understand the need to stay connected. AGP Nature Villa is equipped with high-speed Wi-Fi (Fiber optic) that covers the entire property, including the garden and pool deck. It is perfectly suitable for Zoom calls and remote work.'
                }
              }
            ]
          },
          {
            '@context': 'https://schema.org',
            '@type': 'VideoObject',
            name: 'AGP Nature Villa - Complete Property Walkthrough',
            description: 'Virtual tour of our 3BHK private villa, featuring the Blue Wave pool, dual kitchens, luxury bedrooms, and the lush Infinity Garden surrounded by the Aravali mountains.',
            thumbnailUrl: 'https://agpnaturevilla.com/images/Villa/slider-image-1.jpg',
            uploadDate: '2024-01-15',
            contentUrl: 'https://agpnaturevilla.com/agp-nature-villa.MP4',
            embedUrl: 'https://agpnaturevilla.com/3bhk-private-villa-udaipur/',
            duration: 'PT2M30S'
          },
          {
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            '@id': 'https://agpnaturevilla.com/#business',
            name: 'AGP Nature Villa',
            image: 'https://agpnaturevilla.com/images/Villa/slider-image-1.jpg',
            description: 'Luxury 3BHK private villa in Udaipur offering exclusive vacation rentals with premium amenities, private pool, and stunning Aravali mountain views.',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '5, Dangiyo Ki Hundar, near Animal Aid',
              addressLocality: 'Udaipur',
              addressRegion: 'Rajasthan',
              postalCode: '313011',
              addressCountry: 'IN'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 24.6293633,
              longitude: 73.7308233
            },
            url: 'https://agpnaturevilla.com',
            telephone: '+91-9892611983',
            priceRange: '₹₹₹',
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              opens: '00:00',
              closes: '23:59'
            },
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: 4.9,
              reviewCount: 182
            },
            sameAs: [
              'https://www.facebook.com/agpnaturevilla',
              'https://www.instagram.com/agpnaturevilla'
            ]
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://agpnaturevilla.com/'
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: '3BHK Private Villa Udaipur',
                item: 'https://agpnaturevilla.com/3bhk-private-villa-udaipur/'
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
            title: 'The 3-Bedroom Private Estate: Detailed Amenities & Layout',
            subtitle: '',
            description: 'A technical deep-dive into Udaipur\'s most exclusive 3BHK nature retreat.\n\nWhile our homepage gives you the overview, this page details exactly what you get when you book the "Private Kingdom." From the filtration technology of the Blue Wave pool to the equipment list in the Little Paris kitchen, here is everything you need to know.',
            images: [
              '/images/Villa/slider-image-1.jpg',
              '/images/Villa/pool-area-agp-nature-villa.jpg',
              '/images/Villa/swimming-pool.jpg',
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
          type: 'story-sections',
          order: 2,
          content: {
            title: 'Villa Amenities & Specifications',
            sections: [
              {
                title: 'The "Blue Wave" Pool: Technical Specifications',
                content: '<p>Unlike shared resort pools, the <strong>Blue Wave</strong> is engineered for privacy and hygiene. It is not just a water body; it is a curated zone for your group.</p><ul><li><strong>Dimensions:</strong> 242 Sq. Ft. of swimming area.</li><li><strong>Depth Profile:</strong> Designed for families, with safe zones for children and ample depth for adults to swim laps.</li><li><strong>Hygiene Protocol:</strong> We use a high-grade filtration system that runs daily. The water is crystal clear, pH-balanced, and chemically treated to international safety standards—ensuring no skin irritation for kids.</li><li><strong>Night Mode:</strong> The pool features underwater LED ambient lighting, turning the deck into a glowing lounge space for your evening cocktails.</li></ul>',
                image: '/images/Villa/swimming-pool.jpg',
                layout: 'left',
                backgroundColor: 'gradient'
              },
              {
                title: 'Dual-Kitchen Architecture: "Laziz" & "Little Paris"',
                content: '<p>We are one of the few villas in Udaipur offering two distinct culinary zones, perfect for long-stay groups who crave home-cooked meals.</p><h3>Zone A: Laziz (The Indoor Command Center)</h3><p>Located centrally to serve all three bedrooms, this modern kitchen is fully stocked for functional cooking.</p><ul><li><strong>Appliances:</strong> Double-door refrigerator, microwave oven, gas hob, and mixer-grinder.</li><li><strong>Cookware:</strong> Full sets of pans, pressure cookers, and serving bowls sufficient for 15 guests.</li><li><strong>Essentials Provided:</strong> RO water purifier, tea/coffee making supplies, and basic spices.</li></ul><h3>Zone B: The Little Paris (Outdoor BBQ Deck)</h3><p>Designed for the "Experience," this open-air kitchenette is where memories are made.</p><ul><li><strong>The Vibe:</strong> Chic, rustic brickwork open to the sky and mountain views.</li><li><strong>Equipment:</strong> Professional-grade coal barbecue grill (Coal provided on request).</li><li><strong>Usage:</strong> Perfect for winter bonfires, grilling paneer tikkas, or enjoying a sundowner while the kids play in the garden.</li></ul>',
                image: '/images/Villa/modern-indoor-kitchen.jpg',
                layout: 'right',
                backgroundColor: 'white'
              },
              {
                title: 'The Sleeping Quarters: 3 Distinct "Micro-Environments"',
                content: '<p>AGP Nature Villa is a <strong>3BHK configuration</strong> designed to offer privacy even within your group. Each room has a distinct personality.</p><ul><li><strong>Bedroom 1: The Love Nest.</strong> A cozy, warm-toned sanctuary designed for couples. Features soft lighting, blackout curtains for sleeping in, and an en-suite bathroom with premium fittings.</li><li><strong>Bedroom 2: Mountain Peak.</strong> The room with a view. Large glass windows frame the jagged Aravali peaks, allowing you to wake up to the sunrise without leaving your bed.</li><li><strong>Bedroom 3: Valley View.</strong> The most spacious room, overlooking the Infinity Garden and the valley below. Ideal for families with young children who need extra floor space.</li></ul><p><em><strong>Capacity Note:</strong> While we have 3 bedrooms, we comfortably host groups of up to 15 using high-quality extra bedding and convertible spaces.</em></p>',
                image: '/images/Rooms/image-6.jpg',
                layout: 'left',
                backgroundColor: 'gradient'
              },
              {
                title: 'What Does a Day at AGP Nature Villa Look Like?',
                content: '<p>To help you visualize your stay, here is a typical itinerary our guests enjoy:</p><ul><li><strong>07:00 AM:</strong> Yoga on the <strong>Infinity Garden</strong> lawn while the peacocks call from the hills.</li><li><strong>09:00 AM:</strong> Breakfast by the pool. Our helper sets up the table while you enjoy a morning dip in the <strong>Blue Wave</strong>.</li><li><strong>11:00 AM:</strong> A short 10-minute drive to <strong>Badi Lake</strong> for a peaceful walk, or a trek up to <strong>Bahubali Hills</strong> for the best selfie in Udaipur.</li><li><strong>01:00 PM:</strong> Lunch delivered by local partners (authentic Dal Baati Churma) or cooked fresh in <strong>Laziz</strong>.</li><li><strong>04:00 PM:</strong> Tea time at <strong>Heat Heaven</strong>. As the sun dips behind the Aravalis, the bonfire is prepped.</li><li><strong>08:00 PM:</strong> BBQ night at <strong>Little Paris</strong>. Music playing, coals glowing, and the entire property lit up just for you.</li></ul>',
                image: '/images/Villa/bonfire-place.jpg',
                layout: 'right',
                backgroundColor: 'white'
              }
            ]
          }
        },
        {
          type: 'faq-section',
          order: 3,
          content: {
            title: 'Frequently Asked Questions',
            videoUrl: '/agp-nature-villa.MP4',
            videoTitle: 'AGP Nature Villa - Complete Property Walkthrough',
            videoDescription: 'Photos can only show so much. Take a virtual tour of our 3BHK private villa, featuring the Blue Wave pool, dual kitchens, luxury bedrooms, and the lush Infinity Garden surrounded by the Aravali mountains.',
            faqs: [
              {
                question: 'Is AGP Nature Villa safe for solo female travelers or all-girl groups?',
                answer: 'Yes, AGP Nature Villa is extremely safe. The property is fully walled and gated. We have a dedicated caretaker who resides in separate staff quarters on the premises to ensure security 24/7 without intruding on your privacy. The neighborhood of Dangiyo Ki Hundar is peaceful and residential.'
              },
              {
                question: 'Can we host a pool party with loud music?',
                answer: 'We are a nature villa, so while we encourage enjoyment, we respect the tranquility of the Aravalis. You can play music at a moderate volume on the outdoor speakers provided. For late-night parties, we ask guests to move the loud music indoors after 10:00 PM to comply with local noise regulations.'
              },
              {
                question: 'Is the pool heated for winter stays?',
                answer: 'The Blue Wave pool is an outdoor fresh-water pool. It is not electrically heated. However, because the deck receives direct sunlight from morning until late afternoon, the water remains pleasant during the day, even in winter months like November and February.'
              },
              {
                question: 'Do you provide a cook or is it self-catering only?',
                answer: 'We offer a hybrid model. The villa is designed for self-catering with fully equipped kitchens. However, for a relaxing holiday, we can arrange a local cook (Maharaj) for an additional daily charge who can prepare home-style Rajasthani meals using ingredients you provide or we procure for you.'
              },
              {
                question: 'How is the internet connectivity for workcations?',
                answer: 'We understand the need to stay connected. AGP Nature Villa is equipped with high-speed Wi-Fi (Fiber optic) that covers the entire property, including the garden and pool deck. It is perfectly suitable for Zoom calls and remote work.'
              }
            ]
          }
        },
        {
          type: 'cta-section',
          order: 4,
          content: {
            title: 'Ready to secure your dates?',
            description: 'Check Availability Now',
            phone: '+91 9892611983',
            directionLink: 'http://maps.google.com/maps/dir/?api=1&destination=AGP%20Nature%20Villa%20-%20Villa%20in%20Udaipur,%205,%20Dangiyo%20Ki%20Hundar,%20near%20Animal%20Aid,%20Udaipur,%20Rajasthan%20313011'
          }
        }
      ]
    }
  }

  return defaultPages[slug] || null
}

export async function generateStaticParams() {
  // Return static params directly - no API calls needed
  // IMPORTANT: Do not add invalid slugs here, they should 404
  return [
    { slug: ['villa-in-udaipur'] },
    { slug: ['rooms'] },
    { slug: ['contact'] },
    { slug: ['guide-pdf'] },
    { slug: ['3bhk-private-villa-udaipur'] }
  ]
}

export async function generateMetadata({ params }) {
  const page = await getPageData(params.slug)
  
  if (!page) {
    return {
      title: 'Page Not Found - AGP Nature Villa',
      description: 'The requested page could not be found.'
    }
  }

  const baseUrl = 'https://agpnaturevilla.com/'
  const currentUrl = `${baseUrl}/${Array.isArray(params.slug) ? params.slug.join('/') : params.slug}`

  return {
    title: page.seo.title,
    description: page.seo.description,
    keywords: page.seo.keywords?.join(', '),
    openGraph: {
      title: page.seo.ogTitle || page.seo.title,
      description: page.seo.ogDescription || page.seo.description,
      images: page.seo.ogImage ? [page.seo.ogImage] : [],
      url: currentUrl,
    },
    alternates: {
      canonical: page.seo.canonicalUrl || currentUrl,
    },
    robots: {
      index: !page.seo.noindex,
      follow: !page.seo.nofollow,
    },
  }
}

export default async function DynamicPage({ params }) {
  const page = await getPageData(params.slug)
  
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