import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SocialLinks from "./SocialLinks"
import Container from "react-bootstrap/Container"
import PropTypes from "prop-types"

import "./styles.scss"
const Sidebar = () => {
  return (
    <StaticQuery
      query={graphql`
        query SiteBioQuery {
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
              labels {
                tag
                tech
                name
                size
                color
              }
            }
          }
          allMarkdownRemark(
            limit: 5
            sort: { fields: [frontmatter___date], order: DESC }
          ) {
            edges {
              node {
                frontmatter {
                  tags
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div className="sidebar">
          <Container fluid>
            <SocialLinks
              siteTitle={data.siteMetadata.title}
              contacts={data.siteMetadata.contacts}
            />
          </Container>
        </div>
      )}
    />
  )
}
Sidebar.propTypes = {
  siteTitle: PropTypes.string,
}
export default Sidebar
