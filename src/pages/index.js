import React from "react"
import { Link, graphql } from "gatsby"

import { SEO, Jumbo } from "../components"
import styled from "styled-components"

export  const Query = graphql`
  query GET_DESCRIPTION {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
  }
`


const Button = styled.button`
  width:8rem;
  background-color:#98ca3f;
  border:none;
  border-radius:10px;
  color:${(props)=>props.color};
  &:hover{
    transform:scale(1.4)
  }
`

const IndexPage = ({data}) => {
  
 
  const {description}=data.allSite.edges[0].node.siteMetadata
  console.log(data.allSite.edges[0].node.siteMetadata.description)
  return <>
    <SEO title="Home" />
    <Jumbo description={description} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Button color="gray" >Comprar</Button>
    <Link to="/gracias/">Go to gracias</Link>
  </>
}

export default IndexPage
