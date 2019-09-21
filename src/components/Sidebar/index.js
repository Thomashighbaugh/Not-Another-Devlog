import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Bio from "./Bio/Bio"
import SocialLinks from "./SocialLinks"
import Container from "react-bootstrap/Container"

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
          <Bio
            author={data.site.siteMetadata.author}
            tagline={data.site.siteMetadata.tagline}
          />
          <SocialLinks contacts={data.site.siteMetadata.contacts} />
          <Container className="links">
            <Link to="/">
              <span className="text-dark d-block py-1">Home</span>
            </Link>
            <Link to="/about">
              <span className="text-dark d-block py-1">About</span>
            </Link>
            <Link to="/archive">
              <span className="text-dark d-block py-1">Archive</span>
            </Link>
          </Container>
        </div>
      )}
    />
  )
}

export default Sidebar
