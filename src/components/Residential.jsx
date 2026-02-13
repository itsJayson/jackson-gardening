import IMAGES from '../constants/images'

export default function Residential() {
  return (
    <section id="residential" className="split-section split-section--residential">
      <div className="container">
        <div className="split-section__grid">
          <div className="split-section__image">
            <img
              src={IMAGES.residential}
              alt="Neatly maintained House garden with trimmed lawn, colourful flower beds."
              className="split-section__img"
            />
          </div>
          <div className="split-section__content">
            <h2 className="section-title">Residential Garden Care</h2>
            <p className="split-section__lead">
              Your garden is an extension of your home. We help homeowners across Staffordshire
              and Cheshire create outdoor spaces they love spending time in.
            </p>
            <ul className="split-section__list">
              <li>Regular lawn mowing and treatment programmes</li>
              <li>Hedge trimming and cutting</li>
              <li>Garden clearance and waste removal</li>
              <li>Patio and driveway jet washing</li>
              <li>One-off garden tidyups</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
