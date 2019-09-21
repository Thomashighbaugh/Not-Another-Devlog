import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.css"
import Header from "../Header"
import "../../styles/main.scss"
import Footer from "../Footer"

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              tagline
              author
              contacts {
                linkedin
                github
                twitter
              }
            }
          }
        }
      `}
      render={data => (
        <div className="body">
          <Header
            siteTitle={data.site.siteMetadata.title}
            author={data.site.siteMetadata.author}
            contacts={data.site.siteMetadata.contacts}
          />
            <main className="p-4">{children}</main>
            <Footer />
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
