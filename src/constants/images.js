// Centralized Unsplash image URLs for the entire site
const IMAGES = {
  // Hero
  hero: '/hero.jpg',

  // About
  about: '/main.jpg',

  // Services cards
  services: {
    lawn: '/lawnmowing.jpg',
    hedge: '/ghedge.jpg',
    clearance: '/cleanup.jpg',
    pressure: '/pressuree.jpg',
  },

  // Residential & Commercial
  residential: '/residentialnew.jpg',
  commercial: '/commss.png',

  // Gallery
  gallery: [
    { src: '/transform.jpg', label: 'Lawn Transformation', alt: 'Freshly mown green lawn with neat edges and trimmed borders in a residential garden' },
    { src: '/hedgeshaping.jpg', label: 'Hedge Shaping', alt: 'Neatly shaped garden hedge with clean straight lines along a garden boundary' },
    { src: '/gardenclearance.jpg', label: 'Garden Clearance', alt: 'Cleared garden space with removed overgrowth and tidy borders ready for planting' },
    { src: '/patiojet.jpg', label: 'Patio Jet Wash', alt: 'Clean patio slabs restored to original colour after professional jet washing' },
    { src: '/fullgarden.jpg', label: 'Residential Garden', alt: 'Well-maintained residential garden with a gardener getting the work done.' },
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
