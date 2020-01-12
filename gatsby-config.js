module.exports = {
  siteMetadata: {
    title: `Smooth`,
    description: `Join the Smoothie Community.`,
    author: `Lucie B`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/smoothie-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-firesource',
      options: {
        credential: require("./firebase.json"),
        types: [
          {
            type: 'Smoothie',
            collection: 'smoothie',
            map: doc => ({
              title: doc.title,
              description: doc.description,
              instructions: doc.instructions,
              imageUrl: doc.imageUrl,
              creator___NODE: doc.creator.id
            }),
          },
          {
            type: 'Creator',
            collection: 'creators',
            map: doc => ({
              name: doc.name,
            }),
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Henny Penny`,
          },
          {
            family: `Montserrat`,
            variants: [`400`, `500`, `600`, `700`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'Smoothie',
        imagePath: 'imageUrl',
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
