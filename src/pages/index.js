import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  //  const { markdownRemark } = data

  return (
    <Layout>
      <SEO
        title="Gatsby Starter"
        keywords={[`Gatsby Starter`, `David Bergeron`]}
      />
      <h1>Hello, David.</h1>

      {/* <div
        className="main-content"
        dangerouslySetInnerHTML={{ __html: html }}
      /> */}
    </Layout>
  )
}

export default IndexPage
// export const pageQuery = graphql`
//   query IndexPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
//       html
//       frontmatter {
//         title
//         heading
//         subheading
//         featuredImage
//       }
//     }
//   }
// `
