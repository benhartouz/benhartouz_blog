module.exports = {
    siteMetadata: {
        title: "Portfolio v3",
        description: "Javascript FullStack Developer",
        author: "@amanhimself",
        siteUrl: `http://www.benhartouz.com`
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "Ben hartouz Portfolio",
                short_name: "Mohamed Ben hartouz",
                start_url: "/",
                background_color: "#69359c",
                theme_color: "#69359c",
                display: "minimal-ui",
                icons: [
                    {
                        src: `/src/assets/favicon.ico`,
                        sizes: `32x32`,
                        type: `image/ico`
                    }
                ]
            }
        },
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-127170539-1",
                // Setting this parameter is optional (requried for some countries such as Germany)
                anonymize: true
            }
        },
        {
            resolve: `gatsby-plugin-sitemap`
        }
    ]
};
