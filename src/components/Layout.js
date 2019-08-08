/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "bootstrap/dist/css/bootstrap.css"
import Header from "./Header"
import "../styles/main.scss"

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
        <div>
          <Header
            siteTitle={data.site.siteMetadata.title}
            tagline={data.site.siteMetadata.tagline}
            author={data.site.siteMetadata.author}
            contacts={data.site.siteMetadata.contacts}
          />
          <div
            style={{
              margin: `0 auto`,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <main className="p-4">{children}</main>
            <footer className="text-center w-100 ">
              <hr />
              <p className="d-inline">
                © {new Date().getFullYear()}{" "}
                <a className="text-info" href="https://thomasleonhighbaugh.me">
                  [ tlh ]{" "}
                </a>
                , All Rights Reserved.
              </p>
              <p className="mt-5 text-muted d-inline">
                <i className="d-block">
                  {" "}
                  This site was built with
                  <a className="text-info ml-2" href="https://www.gatsbyjs.org">
                    GatsbyJS
                  </a>
                </i>
              </p>
            </footer>
          </div>
        </div>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
