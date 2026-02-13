import IMAGES from '../constants/images'

export default function BeforeAfter() {
  return (
    <section id="before-after" className="before-after">
      <div className="container">
        <h2 className="section-title section-title--center">Before & After</h2>
        <p className="section-subtitle">
          See the difference our work makes. Real results from real projects.
        </p>
        <div className="before-after__grid">
          {IMAGES.beforeAfter.map((item, i) => (
            <div key={i} className="before-after__card">
              <h3 className="before-after__label">{item.label}</h3>
              <div className="before-after__images">
                <div className="before-after__side">
                  <span className="before-after__tag before-after__tag--before">Before</span>
                  <img src={item.before} alt={`${item.label} - Before`} />
                </div>
                <div className="before-after__side">
                  <span className="before-after__tag before-after__tag--after">After</span>
                  <img src={item.after} alt={`${item.label} - After`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
