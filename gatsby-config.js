module.exports = {
  siteMetadata: {
    title: `Liam Smith`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-background-image",
    "gatsby-transformer-sharp",
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "images",
    //     path: path.join(__dirname, `src`, `images`)
    //   }
    // }
  ],
}
