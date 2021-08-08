module.exports = {
  siteMetadata: {
    title: "abhishek",
    menuLinks:[
      {
         name:'home',
         link:'/'
      },
      {
         name:'Contacts',
         link:'/contacts'
      }
    ]
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
  "gatsby-plugin-sass",
  `gatsby-plugin-image`,
  `gatsby-plugin-styled-components`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-offline`,
  
  {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
          // You can add multiple tracking ids and a pageview event will be fired for all of them.
          trackingIds: [
            "",
          ],

          // This object is used for configuration specific to this plugin
          pluginConfig: {
            // Puts tracking script in the head instead of the body
            head: true,

          },
        },
      },
  {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `abhi`,
        short_name: `p`,
        start_url: `/`,
        background_color: `Black`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/logo.png`,
      },
    },
  `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        checkSupportedExtensions: false,
      }
    },
    {
        resolve: 'gatsby-source-filesystem',
        options: {
            name: 'src',
            path: `${__dirname}/src/`
        }
      },
  `gatsby-plugin-emotion`,
  {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
                `limelight`,
                `Rubik`,
                `Raleway`,
                `Special Elite`,
                `source sans pro\:300,400,400i,700`
              ],
        display: 'swap'
      }
    }
  ]
};
