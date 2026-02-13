import IMAGES from '../constants/images'

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <div className="container">
        <h2 className="section-title section-title--center">Our Work</h2>
        <p className="section-subtitle">
          Take a look at some of our recent projects across Staffordshire and Cheshire.
        </p>
        <div className="gallery__grid">
          {IMAGES.gallery.map((item, i) => (
            <div key={`${item.label}-${i}`} className="gallery__item">
              <img src={item.src} alt={item.alt} />
              <div className="gallery__overlay">
                <span className="gallery__label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
