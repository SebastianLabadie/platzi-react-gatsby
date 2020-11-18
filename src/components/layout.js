/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import {Content,Footer} from '../styles/components'
import Header from "./header"

const Layout = ({ children }) => (

      <>
        <Header />
        <Content>
          <main>{children}</main>
          <Footer >
            <span role="img" aria-label="emoji">
              con 💕   
              </span> 
            <a href="https://sebastianlabadie.github.io/Portfolio">Platzi</a>
          </Footer>
        </Content>
      </>
)    

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
