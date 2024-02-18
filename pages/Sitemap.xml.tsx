
type SitemapLocation = {
  url: string
  changefreq?:
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'
  | 'never'
  priority: number
  lastmod?: Date
}

// Use this to manually add routes to the sitemap
const defaultUrls: SitemapLocation[] = [
  {
    url: '/',
    changefreq: 'daily',
    priority: 1,
    lastmod: new Date(), // or custom date: '2023-06-12T00:00:00.000Z',
  },
  //   { url: '/about', priority: 0.5 },
  //   { url: '/blog', changefreq: 'weekly', priority: 0.7 },
]

const createSitemap = (locations: SitemapLocation[]) => {
  const baseUrl = process.env.NEXT_PUBLIC_URL // Make sure to configure this
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${locations
      .map((location) => {
        return `<url>
                    <loc>${baseUrl}${location.url}</loc>
                    <priority>${location.priority}</priority>
                    ${location.lastmod
            ? `<lastmod>${location.lastmod.toISOString()}</lastmod>`
            : ''
          }
                  </url>`
      })
      .join('')}
  </urlset>
  `
}

export default function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {

  // Return the default urls, combined with dynamic urls above
  const defaultUrls: SitemapLocation[] = [
    {
      url: '/',
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(), // or custom date: '2023-06-12T00:00:00.000Z',
    },
    {
      url: '/blog',
      priority: 0.7,
      changefreq: 'weekly',
    },
    {
      url: '/how-it-works',
      priority: 0.6,
    },
    {
      url: '/post-booking',
      priority: 0.6,
    },
    {
      url: '/setup-profile',
      priority: 0.6,
    },
    {
      url: '/browse-bookings',
      priority: 0.6,
    },
    {
      url: '/faq',
      priority: 0.6,
    },
    {
      url: '/categories',
      priority: 0.6,
    },
    {
      url: '/chats',
      priority: 0.6,
    },
    {
      url: '/messages',
      priority: 0.6,
    },
    {
      url: '/my-bookings',
      priority: 0.6,
    },
    {
      url: '/notifications',
      priority: 0.6,
    },
    {
      url: '/booking-history',
      priority: 0.6,
    },
    {
      url: '/payment-methods',
      priority: 0.6,
    },
    {
      url: '/profile',
      priority: 0.6,
    },
    {
      url: '/public-profile',
      priority: 0.6,
    },
    {
      url: '/settings',
      priority: 0.6,
    },
    {
      url: '/contact-us',
      priority: 0.6,
    },
    {
      url: '/bookings',
      priority: 0.6,
    },
    {
      url: '/become-a-tutor',
      priority: 0.5,
    },
    {
      url: '/signup',
      priority: 0.5,
    },
    {
      url: '/forgot-password',
      priority: 0.5,
    },
    // Add more static URLs for your pages here
  ];

  // Add more static URLs for other pages  
  const locations = [...defaultUrls]




  // Set response to XML
  res.setHeader('Content-Type', 'text/xml')
  res.write(createSitemap(locations))
  res.end()

  return {
    props: {},
  }
}