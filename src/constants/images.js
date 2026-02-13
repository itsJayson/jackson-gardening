// Centralized Unsplash image URLs for the entire site
const IMAGES = {
  // Hero
  hero: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1920&q=80',

  // About
  about: '/main.jpg',

  // Services cards
  services: {
    lawn: '/lawnmowing.jpg',
    hedge: '/ghedge.jpg',
    clearance: '/cleanup.jpg',
    pressure: '/pressure.jpg',
  },

  // Residential & Commercial
  residential: '/residential.jpg',
  commercial: '/commercial.jpg',

  // Gallery
  gallery: [
    { src: '/transform.jpg', label: 'Lawn Transformation', category: 'Lawns' },
    { src: '/hedgeshaping.jpg', label: 'Hedge Shaping', category: 'Hedges' },
    { src: '/gardenclearance.jpg', label: 'Garden Clearance', category: 'Clearance' },
    { src: '/patiojet.jpg', label: 'Patio Jet Wash', category: 'Jet Washing' },
    { src: '/fullgarden.jpg', label: 'Residential Garden', category: 'Lawns' },
  ],

  // Before & After showcase (replace with your own images)
  beforeAfter: [
    {
      before: '/gardenbefore.jpg',
      after: '/gardenafter.jpg',
      label: 'Garden Clearance',
    },
    {
      before: '/jetbefore.jpg',
      after: '/jetafter.jpg',
      label: 'Jet Washing',
    },
  ],

  // Testimonials background
  testimonials: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1920&q=80',

  // Page hero backgrounds
  pageHero: {
    services: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1920&q=80',
    gallery: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1920&q=80',
    areas: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1920&q=80',
    contact: 'https://images.unsplash.com/photo-1598902108854-d1446236c4fe?auto=format&fit=crop&w=1920&q=80',
  },
}

export default IMAGES
