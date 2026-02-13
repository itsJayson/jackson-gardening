export default function Footer() {
  const smoothScroll = (e, href) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <h3 className="footer__logo">
              Jackson's Gardening Services
            </h3>
            <p>
              Professional gardening services across Staffordshire, Cheshire and surrounding
              areas. Call today for your free quote.
            </p>
          </div>

          <div className="footer__links">
            <h4>Quick Links</h4>
            <nav>
              <a href="#hero" onClick={(e) => smoothScroll(e, '#hero')}>Home</a>
              <a href="#services" onClick={(e) => smoothScroll(e, '#services')}>Services</a>
              <a href="#gallery" onClick={(e) => smoothScroll(e, '#gallery')}>Gallery</a>
              <a href="#areas" onClick={(e) => smoothScroll(e, '#areas')}>Areas</a>
              <a href="#contact" onClick={(e) => smoothScroll(e, '#contact')}>Contact</a>
            </nav>
          </div>

          <div className="footer__contact">
            <h4>Contact Us</h4>
            <a href="tel:+447505990485">07505 990485</a>
            <a href="mailto:zackkjackson99@gmail.com">zackkjackson99@gmail.com</a>
            <a href="https://wa.me/447505990485" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Jackson's Gardening Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
