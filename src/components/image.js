import { graphql, StaticQuery } from "gatsby"
import GatsbyImage from "gatsby-image";
import React from "react"
function Image({ name }) {
  return (
    <StaticQuery
      query={graphql`
      query GET_IMAGE {
        icon: file(relativePath: { eq: "icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        }
    `}
      render={data => {
        console.log(data);
        return <GatsbyImage fluid={data[name].childImageSharp.fluid}/>;
      }}
    />
  )
}

export default Image
