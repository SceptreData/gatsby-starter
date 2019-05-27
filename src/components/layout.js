import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import Header from "./header"
import "./styles/main.scss"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    //   background: file(relativePath: { eq: "background.png" }) {
    //   childImageSharp {
    //     fluid(quality: 100, maxWidth: 3300) {
    //       ...GatsbyImageSharpFluid_withWebp
    //     }
    //   }
    // }
    render={data => {
      // const backgroundImg = data.background.childImageSharp.fluid
      return (
        <>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <footer />
        </>
      )
    }}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
