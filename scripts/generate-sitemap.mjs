import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

// Liste des URLs de votre site
const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/solutions', changefreq: 'monthly', priority: 0.8 },
  { url: '/expertise', changefreq: 'monthly', priority: 0.8 },
  { url: '/projets', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.5 },
];

const hostname = 'https://www.horizon-spatial.com';

async function generateSitemap() {
  const stream = new SitemapStream({ hostname });

  const xmlStream = Readable.from(links).pipe(stream);

  const sitemap = await streamToPromise(xmlStream).then((data) => data.toString());

  const writeStream = createWriteStream('./client/public/sitemap.xml');
  writeStream.write(sitemap);
  writeStream.end();

  console.log('Sitemap generated successfully!');
}

generateSitemap();