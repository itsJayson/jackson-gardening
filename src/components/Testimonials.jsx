import IMAGES from '../constants/images'

const reviews = [
  {
    name: 'Deborah J.',
    text: "Garden Tidy: Overgrown Grass, Shrub & Branch Trim and Leaf Clearance. Efficient, Courteous and Friendly Service. Great Communication about the job spec. and with arrival times and possible changes due to inclement weather. Will be booking again for maintenance and would highly recommend them.",
  },
  {
    name: 'Helen T.',
    text: "Excellent job today. My lawn had not been cut this year at all, job was no trouble. I was quoted for job a couple of weeks ago. Communication has been great on WhatsApp. Work carried out by lovely guy today. We will give lawn a rest for a couple of weeks then arrange regular maintenance and hedges once birds have fledged. I highly recommend.",
  },
  {
    name: 'Alexis J.',
    text: "Zack has given our garden a complete makeover! Started with a clearance, and it needed it and now carries out 2 weekly maintenance cuts that has made a complete difference to being able to enjoy the garden. He's also replaced a number of fence posts and panels to make our garden secure again. Him and his team are such nice guys and take pride in their work. Thanks Zack!",
  },
  {
    name: 'Alexandra J.',
    text: "Zack and Joe were amazing! They managed to squeeze us in last minute and did an excellent job. My grass looks perfect. Highly recommend Jackson's!",
  },
]

function Stars() {
  return (
    <div className="testimonial__stars">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#ffc107" stroke="#ffc107" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      className="testimonials"
      style={{ backgroundImage: `url(${IMAGES.testimonials})` }}
    >
      <div className="testimonials__overlay" />
      <div className="container testimonials__inner">
        <h2 className="section-title section-title--center">What Our Customers Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it - here's what our clients have to say.
        </p>
        <div className="testimonials__grid">
          {reviews.map((review) => (
            <div key={review.name} className="testimonial-card">
              <Stars />
              <p className="testimonial-card__text">"{review.text}"</p>
              <div className="testimonial-card__author">
                <div className="testimonial-card__avatar">
                  {review.name[0]}
                </div>
                <div>
                  <strong>{review.name}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
