import Link from 'next/link'
import SitePage, { PageHead } from '../../components/Site/SitePage'

export const metadata = {
  title: 'Frequently Asked Questions | Booking, Rooms, Food & Pets',
  description: 'Answers about booking AGP Nature Villa in Udaipur: deposits, cancellations, guest capacity, check-in times, food and cooks, pets, parking, airport pickup and house rules.',
  alternates: { canonical: 'https://agpnaturevilla.com/faqs/' },
  openGraph: { title: 'Frequently Asked Questions | Booking, Rooms, Food & Pets', description: 'Answers about booking AGP Nature Villa in Udaipur: deposits, cancellations, guest capacity, check-in times, food and cooks, pets, parking, airport pickup and house rules.', url: 'https://agpnaturevilla.com/faqs/' },
}

export default function FAQsPage() {
  const lastUpdated = "January 2025"

  const faqData = [
    {
      category: "Booking and Reservations",
      questions: [
        {
          question: "How do I book AGP Nature Villa?",
          answer: "You can book AGP Nature Villa by calling us directly at +91 9892611983, emailing us at agpnaturevilla@gmail.com, or contacting us through our website. We recommend booking in advance, especially during peak seasons (October to March) to ensure availability."
        },
        {
          question: "What is the minimum stay requirement?",
          answer: "We typically require a minimum stay of 2-3 nights for regular bookings. During peak seasons like Diwali, Christmas, and New Year, we may require a minimum stay of 5-7 nights. For longer stays, we offer attractive discounted rates."
        },
        {
          question: "How much deposit is required to secure my booking?",
          answer: "We require a 30% advance payment to confirm your booking. The remaining balance can be paid upon arrival at the villa. We accept payments via bank transfer, UPI, or cash. A refundable security deposit may also be required."
        },
        {
          question: "What is your cancellation policy?",
          answer: "Cancellations made 7 days prior to arrival are eligible for a full refund minus processing charges. Cancellations within 7 days may be subject to charges. We understand emergencies happen and will work with guests on a case-by-case basis."
        }
      ]
    },
    {
      category: "Accommodation Details",
      questions: [
        {
          question: "How many guests can AGP Nature Villa accommodate?",
          answer: "AGP Nature Villa can comfortably accommodate up to 8-10 guests. We have 3 spacious bedrooms (Love Nest, Mountain Peak, and Valley View) with attached bathrooms, plus additional space in the living areas for extra guests if needed."
        },
        {
          question: "Is the entire villa private for my group?",
          answer: "Absolutely! When you book AGP Nature Villa, you get the entire property exclusively for your group. We never share the villa with other guests, ensuring complete privacy and a personalized experience for you and your family or friends."
        },
        {
          question: "What amenities are included in the villa?",
          answer: "AGP Nature Villa features a private swimming pool, fully equipped open kitchen, spacious garden, bonfire area, air-conditioned bedrooms, attached bathrooms, Wi-Fi, parking space, and stunning views of the Aravali mountains. All basic amenities for a comfortable stay are provided."
        },
        {
          question: "Do you provide bedding and linens?",
          answer: "Yes, we provide fresh bed linens, towels, pillows, and blankets for all guests. All bedrooms are equipped with comfortable mattresses and quality bedding to ensure a good night's sleep."
        }
      ]
    },
    {
      category: "Location and Transportation",
      questions: [
        {
          question: "Where is AGP Nature Villa located?",
          answer: "AGP Nature Villa is located at 5, Dangiyo Ki Hundar, near Animal Aid, Udaipur, Rajasthan 313011. We're nestled in the beautiful Aravali mountains, offering a serene retreat while being accessible to Udaipur's main attractions."
        },
        {
          question: "How far is the villa from Udaipur city center?",
          answer: "The villa is approximately 15-20 minutes drive from Udaipur city center and major attractions like City Palace, Lake Pichola, and Jagdish Temple. Despite being close to the city, you'll feel like you're in a peaceful mountain retreat."
        },
        {
          question: "Do you provide airport/railway station pickup?",
          answer: "Yes, we can arrange airport and railway station transfers for our guests. Please inform us in advance so we can coordinate the pickup. Transfer charges may apply depending on the distance and vehicle type required."
        },
        {
          question: "Is parking available at the villa?",
          answer: "Yes, we have secure parking space available for your vehicles within the villa premises. The villa can accommodate 2-3 cars comfortably."
        }
      ]
    },
    {
      category: "Dining and Catering",
      questions: [
        {
          question: "Is food included in the stay?",
          answer: "Food is not included in the standard villa rental rate. However, our fully equipped open kitchen allows you to cook your own meals. We can also arrange for a local cook or catering services upon request at additional charges."
        },
        {
          question: "Can I cook my own meals at the villa?",
          answer: "Absolutely! Our villa features a modern open kitchen with all necessary cooking equipment, utensils, gas stove, refrigerator, and dining area. You're welcome to prepare your own meals and enjoy dining in the beautiful outdoor setting."
        },
        {
          question: "Are there restaurants nearby?",
          answer: "Yes, there are several local restaurants and dhabas within 5-10 minutes drive from the villa. We can also recommend some of the best restaurants in Udaipur city for special dining experiences."
        },
        {
          question: "Can you arrange for a chef or catering service?",
          answer: "Yes, we can arrange for local cooks or catering services for your stay. Please let us know your requirements in advance, including cuisine preferences and number of meals. Additional charges will apply for these services."
        }
      ]
    },
    {
      category: "Activities and Services",
      questions: [
        {
          question: "What activities are available at the villa?",
          answer: "At AGP Nature Villa, you can enjoy swimming in the private pool, bonfire evenings, barbecue sessions, outdoor games, mountain hiking, nature walks, stargazing, and relaxing in the beautiful garden. The villa is perfect for family gatherings and group celebrations."
        },
        {
          question: "Can I organize events or celebrations at the villa?",
          answer: "Yes, AGP Nature Villa is perfect for intimate celebrations like birthdays, anniversaries, family reunions, or small gatherings. Our spacious garden and bonfire area provide excellent venues for events. Please discuss your requirements with us during booking."
        },
        {
          question: "Are pets allowed at the villa?",
          answer: "We are pet-friendly! Your furry friends are welcome at AGP Nature Villa. Please inform us during booking if you're bringing pets so we can make necessary arrangements. Additional cleaning charges may apply."
        },
        {
          question: "Is housekeeping service included?",
          answer: "Basic housekeeping and maintenance services are included. For longer stays or additional cleaning requirements, we can arrange extra housekeeping services at nominal charges."
        }
      ]
    },
    {
      category: "Check-in and Policies",
      questions: [
        {
          question: "What are the check-in and check-out times?",
          answer: "Standard check-in time is 2:00 PM and check-out is 11:00 AM. However, we can be flexible with timing based on availability and prior arrangement. Early check-in or late check-out may be accommodated upon request."
        },
        {
          question: "What documents do I need for check-in?",
          answer: "Please bring valid government-issued photo ID proof for all guests (Aadhaar Card, Passport, Driving License, etc.). This is mandatory as per Indian hospitality regulations."
        },
        {
          question: "Do you allow smoking and alcohol at the villa?",
          answer: "Smoking is allowed in outdoor areas only. Alcohol consumption is permitted at the villa premises for guests above 21 years of age. We request responsible consumption and behavior."
        },
        {
          question: "What is your policy for damages?",
          answer: "We trust our guests to treat the villa with care. Any damages beyond normal wear and tear will be charged separately. Our security deposit covers minor damages, and we'll provide transparent billing for any additional charges."
        }
      ]
    }
  ]

  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.flatMap(category =>
      category.questions.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    )
  }

  const id = (c) => c.toLowerCase().replace(/[^a-z]+/g, '-')

  return (
    <SitePage plain>
      {/* FAQ Schema for SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHead title="Frequently Asked Questions" note={`Last Updated: ${lastUpdated}`} />

      <div className="faqp wrap">
        <p className="lede faqp-intro">
          Welcome to AGP Nature Villa&apos;s FAQ section. Here you&apos;ll find answers to the most commonly asked questions about our luxury villa accommodation in Udaipur. If you can&apos;t find what you&apos;re looking for, please don&apos;t hesitate to <Link href="/contact/">contact us directly</Link>.
        </p>

        <div className="faqp-grid">
          <nav className="faqp-rail" aria-label="Question topics">
            {faqData.map((c) => <a key={c.category} href={`#${id(c.category)}`}>{c.category}</a>)}
          </nav>

          <div className="faq faq-flat">
            {faqData.map((c) => (
              <section key={c.category} id={id(c.category)}>
                <h2 className="display h3">{c.category}</h2>
                {c.questions.map((f) => (
                  <details key={f.question} name="faqs">
                    <summary>{f.question}</summary>
                    <p>{f.answer}</p>
                  </details>
                ))}
              </section>
            ))}

            <section className="help">
              <h2 className="display">Still Have Questions?</h2>
              <p>Can&apos;t find the answer you&apos;re looking for? Our friendly team is here to help!</p>
              <dl aria-label="Contact AGP Nature Villa">
                <div><dt>Phone</dt><dd><a href="tel:+919892611983">+91 9892611983</a></dd></div>
                <div><dt>Email</dt><dd><a href="mailto:agpnaturevilla@gmail.com">agpnaturevilla@gmail.com</a></dd></div>
                <div><dt>Location</dt><dd>Udaipur, Rajasthan</dd></div>
              </dl>
              <Link href="/contact/" className="btn btn-gold">Contact Us Now</Link>
            </section>

            <p className="thanks">Thank you for choosing AGP Nature Villa. We look forward to hosting you for an unforgettable stay in the beautiful Aravali mountains of Udaipur!</p>
          </div>
        </div>
      </div>
    </SitePage>
  )
}
