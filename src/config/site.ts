/**
 * Site configuration
 */
export const siteConfig = {
  name: 'docbulk',
  description: 'Free online PDF tools to merge, split, compress, and convert PDF files. Files are processed in your browser with no server uploads for faster, safer PDF handling.',
  url: 'https://docbulk.com',
  ogImage: '/images/og-image.png',
  links: {
    github: 'https://docbulk.com/',
    twitter: 'https://x.com/docbulk',
  },
  creator: 'docbulk Team',
  keywords: [
    'PDF tools',
    'PDF editor',
    'merge PDF',
    'split PDF',
    'compress PDF',
    'convert PDF',
    'free PDF tools',
    'online PDF editor',
    'browser-based PDF',
    'private PDF processing',
  ],
  // SEO-related settings
  seo: {
    titleTemplate: '%s | docbulk',
    defaultTitle: 'docbulk - Professional PDF Tools',
    twitterHandle: '@docbulk',
    locale: 'en_US',
  },
};

/**
 * Navigation configuration
 */
export const navConfig = {
  mainNav: [
    { title: 'Home', href: '/' },
    { title: 'Tools', href: '/tools' },
    { title: 'About', href: '/about' },
    { title: 'FAQ', href: '/faq' },
  ],
  footerNav: [
    { title: 'Privacy', href: '/privacy' },
    { title: 'Terms', href: '/terms' },
    { title: 'Contact', href: '/contact' },
  ],
};


