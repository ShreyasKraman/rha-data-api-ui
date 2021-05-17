/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
      `gatsby-plugin-typescript`,
      `gatsby-plugin-sass`,
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `Vollkorn`,
          ],
          display: 'swap'
        }
      }
  ],
}
