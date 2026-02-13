import IMAGES from '../constants/images'

export default function Commercial() {
  return (
    <section id="commercial" className="split-section split-section--commercial">
      <div className="container">
        <div className="split-section__grid split-section__grid--reverse">
          <div className="split-section__image">
            <img
              src={IMAGES.commercial}
              alt="Well-kept commercial grounds with clean lawns and tidy hedgerows outside an gym building"
              className="split-section__img"
            />
          </div>
          <div className="split-section__content">
            <h2 className="section-title">Commercial Grounds Maintenance</h2>
            <p className="split-section__lead">
              First impressions matter. We keep business premises, offices, and commercial
              properties looking sharp and professional all year round.
            </p>
            <ul className="split-section__list">
              <li>Regular scheduled grounds maintenance</li>
              <li>Flexible contracts to suit your business</li>
              <li>Car park and path jet washing</li>
              <li>Communal area and entrance upkeep</li>
              <li>Hedge cutting and garden clearance</li>
              <li>Fully insured and reliable service</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
