/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://myUrl.com',
  generateIndexSitemap: false,
  generateRobotsTxt: true, // (optional)
}
