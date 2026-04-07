export interface Hero {
    _id: string
    _type: 'hero'
    _createdAt: string
    _updatedAt: string
    headline: string
    subheadline?: string
    ctaText?: string
    ctaLink?: string
    backgroundImage?: {
      _type: 'image'
      asset: {
        _ref: string
        _type: 'reference'
      }
      alt?: string
    }
  }

  export interface Brew {
    _id: string
    _type: 'brew'
    _createdAt: string
    _updatedAt: string
    name: string
    tagline?: string
    description?: string
    image: {
      _type: 'image'
      asset: {
        _ref: string
        _type: 'reference'
      }
      alt: string
    }
    backgroundColor?: string
    order: number
    featured: boolean
  }