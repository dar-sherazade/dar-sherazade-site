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
    heroLine: 'Algerian dress, archives and contemporary creation.',
    scroll: 'Scroll',
    introStatement:
      'The kaftan is more than a garment. It carries histories of craft, ceremony, transmission and reinvention.',
    introBody: [
      'Shera Creates documents Algerian kaftans and related dress traditions through objects, archives, images and stories.',
      'The kaftan belongs to a long history shared across many regions and periods. This project looks closely at its Algerian forms — how they are made, worn, kept and reimagined today.',
    ],
    archiveEyebrow: 'The Archive',
    archiveTitle: 'Garments, read closely',
    archiveLink: 'View the archive',
    quote: 'A garment can be read as an archive.',
    quoteCaption: 'A way of looking',
    journalEyebrow: 'Stories & Research',
    journalTitle: 'Journal',
    journalLink: 'Read the journal',
    availableEyebrow: 'Private collection',
    availableTitle: 'Selected pieces occasionally become available through private enquiry.',
    availableLink: 'View available pieces',
    aboutEyebrow: 'Shera Creates',
    aboutText:
      'Independent research, image-making and contemporary creation around Algerian dress heritage.',
    aboutLink: 'About the project',
  },

  archive: {
    title: 'The Archive',
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
    archiveOption: 'In the archive',
    reset: 'Clear filters',
    countOne: 'piece',
    countMany: 'pieces',
    empty: 'No pieces match these filters.',
    no: 'No.',
    availableTag: 'Available by private enquiry',
    sampleNotice:
      'Sample entry — the photographs and details shown are placeholders, to be replaced with documented information.',
  },

  piece: {
    details: 'Catalogue details',
    archiveNumber: 'Archive number',
    region: 'Region',
    period: 'Date / period',
    materials: 'Materials',
    techniques: 'Techniques',
    condition: 'Condition',
    collection: 'Collection',
    status: 'Status',
    statusAvailable: 'Available by private enquiry',
    statusArchive: 'Held in the archive',
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
    subjectPrefix: 'Shera Creates enquiry —',
  },

  available: {
    title: 'Available Pieces',
    intro:
      'A small selection of pieces from the Shera Creates collection occasionally becomes available through private enquiry.',
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
