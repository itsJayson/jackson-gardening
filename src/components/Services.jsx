import IMAGES from '../constants/images'

const services = [
  {
    image: IMAGES.services.lawn,
    title: 'Lawn Mowing & Maintenance',
    desc: 'Regular mowing, edging, feeding, and lawn treatments to keep your grass lush and healthy all year round.',
    alt: 'Striped green lawn freshly cut with neat edges in a back garden',
  },
  {
    image: IMAGES.services.hedge,
    title: 'Hedge Trimming & Cutting',
    desc: 'Expert hedge cutting and shaping to maintain neat borders and stunning topiary features.',
    alt: 'Tall garden hedge being trimmed into a clean uniform shape',
  },
  {
    image: IMAGES.services.clearance,
    title: 'Garden Clearance & Cleanup',
    desc: 'Complete garden waste removal, overgrown area clearing, and thorough seasonal cleanups.',
    alt: 'Garden cleared of overgrown weeds and debris with visible tidy borders',
  },
  {
    image: IMAGES.services.pressure,
    title: 'Jet Washing',
    desc: 'Professional jet washing for patios, driveways, decking, and exterior surfaces to restore their original look.',
    alt: 'Patio stones being pressure washed revealing clean surface underneath',
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <h2 className="section-title section-title--center">Our Services</h2>
        <p className="section-subtitle">
          From routine lawn care to garden clearances, we offer a comprehensive
          range of professional gardening and cleaning services.
        </p>
        <div className="services__grid">
          {services.map((service) => (
            <div key={service.title} className="service-card">
              <div className="service-card__image">
                <img src={service.image} alt={service.alt} />
              </div>
              <div className="service-card__body">
                <h3 className="service-card__title">{service.title}</h3>
                <p className="service-card__desc">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="services__cta">
          <a href="tel:+447505990485" className="btn btn--primary">
            Get a Free Quote Today
          </a>
        </div>
      </div>
    </section>
  )
}
