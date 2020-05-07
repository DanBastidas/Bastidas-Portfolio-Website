/** @jsx jsx */
import { css, jsx } from '@emotion/core'


/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import NavbarComp from "./navbar"
import "./layout.css"



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div css={css`
      background-color: transparent;
      
    `}>
      <NavbarComp />
      <div className="content-wrap">
        <main>{children}</main>
        <footer>made with ❤️ in Boston | Daniel Bastidas © 2020 </footer>
      </div>
      
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
