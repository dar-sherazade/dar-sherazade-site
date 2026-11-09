/**
 * English interface text and homepage copy.
 *
 * Keeping text here (rather than inside components) means a French
 * version can later be added as src/i18n/fr.ts with the same keys.
 */
export const t = {
  skipToContent: 'Skip to content',
  menu: 'Menu',
  close: 'Close',
  mainNavigation: 'Main navigation',
  footerNavigation: 'Footer navigation',
  instagram: 'Instagram',
  email: 'Email',
  backToTop: 'Back to top',

  home: {
    heroKicker: 'Algerian dress · Archives · Contemporary creation',
    heroLine: 'Every Kaftan carries the name of an Algerian flower.',
    scroll: 'Scroll',
    introStatement:
      'The kaftan has been worn across North Africa and beyond for centuries, and Algeria has its own ways of cutting, embroidering and wearing it.',
    introBody: [
      'Dar Sherazade was born from my wish to keep those traditions close: to learn how Algerian kaftans are made and worn, and to create new ones in that spirit. Each piece is made in Algeria and named after a flower that grows there.',
    ],
    archiveEyebrow: 'The Kaftans',
    archiveTitle: 'The collection, piece by piece',
    archiveLink: 'View the kaftans',
    quote: 'A garment can be read as an archive.',
    quoteCaption: 'The courtyard series',
    aboutEyebrow: 'Dar Sherazade',
    aboutText:
      'Independent research, image-making and contemporary creation around Algerian dress heritage.',
    aboutLink: 'About the project',
  },

  archive: {
    title: 'The Kaftans',
    intro:
      'A working catalogue of kaftans and related garments. Each entry gathers photographs, construction details and notes, and is completed as research progresses.',
    filtersLabel: 'Filter the archive',
    filterAll: 'All',
    filters: {
      region: 'Region',
      period: 'Period',
      material: 'Material',
      technique: 'Technique',
      availability: 'Availability',
    },
    availableOption: 'Available by enquiry',
    archiveOption: 'Sold out',
    reset: 'Clear filters',
    countOne: 'piece',
    countMany: 'pieces',
    empty: 'No pieces match these filters.',
    no: 'No.',
    availableTag: 'Available by enquiry',
    soldTag: 'Sold out',
    sampleNotice:
      'Sample entry — the photographs and details shown are placeholders, to be replaced with documented information.',
  },

  piece: {
    details: 'Catalogue details',
    archiveNumber: 'Archive number',
    materials: 'Materials',
    size: 'Size',
    price: 'Price',
    status: 'Status',
    statusAvailable: 'Available - Send a DM to order',
    statusArchive: 'Sold out',
    note: 'Cultural & historical note',
    terms: 'Terms',
    gallery: 'Details',
    fig: 'Fig.',
    previous: 'Previous piece',
    next: 'Next piece',
    back: 'Back to the archive',
  },

  enquiry: {
    eyebrow: 'Private enquiry',
    text: 'This piece is currently available for private acquisition.',
    detail:
      'To ask about this piece, write to us directly. We are happy to share further photographs, measurements and condition notes.',
    instagram: 'Enquire on Instagram',
    email: 'Enquire by email',
    subjectPrefix: 'Dar Sherazade enquiry —',
  },

  available: {
    title: 'Available Pieces',
    intro:
      'The pieces of the Dar Sherazade collection are offered individually, through private enquiry.',
    note:
      'There is no online shop. Each piece is offered individually; please get in touch to ask about it.',
    empty: 'No pieces are available at the moment. New pieces are announced on Instagram.',
    view: 'View the piece',
  },

  journal: {
    title: 'Journal',
    eyebrow: 'Stories & Research',
    intro:
      'Essays, notes and studies on Algerian dress — its making, its vocabulary and its place in memory and contemporary life.',
    read: 'Read',
    placeholderNotice:
      'Editorial placeholder — this article is a structural draft. Its text will be replaced with researched writing.',
    references: 'References',
    referencesEmpty: 'References will be listed here once research for this article is complete.',
    previous: 'Previous article',
    next: 'Next article',
    back: 'All articles',
    by: 'By',
  },

  contact: {
    title: 'Contact',
    intro:
      'For archive questions, collaborations, sourcing, press or private enquiries, get in touch.',
    emailPlaceholder: 'Email address coming soon',
  },

  notFound: {
    title: 'Page not found',
    text: 'This page does not exist, or has moved.',
    link: 'Return to the homepage',
  },
} as const;
