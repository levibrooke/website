module.exports = {
  siteMetadata: {
    title: `Levi Porter`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          includePaths: ["src/sass"],
        }
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'sjc2rlh'
        }
      }
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/src/img`,
    //     name: 'images',
    //   },
    // },
    // 'gatsby-transformer-sharp',
    // 'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet'
  ]
};
