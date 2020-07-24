/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Daryl Serrano Hipólito`,
    description: `Portfolio webpage of Daryl Serrano Hipólito`,
    author: `Daryl Serrano Hipólito`,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Daryl Serrano Hipólito`,
        short_name: `DSH`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.jpeg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
  // plugins: [
  //   {
  //     resolve: `gatsby-plugin-typescript`,
  //     options: {
  //       isTSX: true, // defaults to false
  //       jsxPragma: `jsx`, // defaults to "React"
  //       allExtensions: true, // defaults to false
  //     },
  //   },
  // ],
}
