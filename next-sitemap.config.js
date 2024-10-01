/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://url.com',
  generateIndexSitemap: false,
  generateRobotsTxt: true,
}
