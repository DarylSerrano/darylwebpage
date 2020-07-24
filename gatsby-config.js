/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Daryl Serrano Hipólito`,
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
