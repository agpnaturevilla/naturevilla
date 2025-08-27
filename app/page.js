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
      title: 'AGP Nature Villa - Best Luxurious Villa in Udaipur',
      description: 'A beautiful villa cum Homestay nestled amidst the Aravali mountains of Udaipur is a perfect destination to spend time with your family or friends. The care and comfort given here at our property is very personalized.',
      keywords: ['villa', 'udaipur', 'homestay', 'luxury', 'pool', 'rajasthan', 'aravali', 'mountains'],
      canonicalUrl: 'https://agpnaturevilla.com',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "LodgingBusiness",
        "name": "AGP Nature Villa",
        "description": "A beautiful villa cum Homestay nestled amidst the Aravali mountains"
      }
    },
    contentBlocks: [
      {
        type: 'villa-hero',
        order: 1,
        content: {
          title: 'Best Luxurious Villa in Udaipur',
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
            established: '2020'
          }
        }
      },
      {
        type: 'pool-kitchen',
        order: 2,
        content: {
          poolTitle: 'POOL AREA',
          poolDescription: 'Enjoy a serene escape at our villa with a private pool, perfect for ultimate relaxation.',
          poolImage: '/images/Villa/pool-area-agp-nature-villa.jpg',
          kitchenTitle: 'OUTDOOR KITCHEN',
          kitchenDescription: 'Experience the joy of cooking and entertaining in our villa\'s spacious open kitchen.',
          kitchenImage: '/images/Villa/open-kitchen-and-dining-area.jpg'
        }
      },
      {
        type: 'unique-offerings',
        order: 3,
        content: {
          title: 'Unique Offerings of Our Villa',
          description: 'Step into a world of refined luxury, where every corner of our villa exudes elegance, comfort, and an ambiance crafted to offer you a truly unforgettable escape.',
          offerings: [
            'Luxurious Rooms',
            'Swimming Pool',
            'Open Kitchen',
            'Bonfire Place'
          ]
        }
      },
      {
        type: 'our-gallery',
        order: 4,
        content: {
          title: 'OUR Gallery',
          subtitle: '',
          images: [
            '/images/Villa/slider-image-1.jpg',
            '/images/Villa/pool-area-agp-nature-villa.jpg',
            '/images/Villa/open-kitchen-and-dining-area.jpg',
            '/images/Gallery/gallery-image-1.jpg',
            '/images/Gallery/gallery-image-2.jpg',
            '/images/Gallery/gallery-image-3.jpg',
            '/images/Rooms/image-1.jpg',
            '/images/Rooms/image-3.jpg',
            '/images/Rooms/image-4.jpg'
          ]
        }
      },
      {
        type: 'story-sections',
        order: 5,
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
              image: '/images/Rooms/image-1.jpg'
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
              image: '/images/Villa/open-kitchen-and-dining-area.jpg'
            }
          ]
        }
      },
      {
        type: 'cta-section',
        order: 6,
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
      url: 'https://agpnaturevilla.com',
    },
    alternates: {
      canonical: page.seo.canonicalUrl || 'https://agpnaturevilla.com',
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