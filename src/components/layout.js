import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./global/footer"
import Copyright from "./global/copyright"
import {FirebaseContext, useAuth} from './Firebase'
import { createGlobalStyle } from 'styled-components'
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

  const {user, firebase, loading} = useAuth();

  return (

    <FirebaseContext.Provider value={{user, firebase, loading}}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0`,
          // maxWidth: 960,
          padding: `0`,
          paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <Footer />
        <Copyright />
      </div>
    </FirebaseContext.Provider>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  body {
    font-family: 'Montserrat';
    background: #EFCBC2;
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout