import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/SEO"

import Sidebar from "../components/Sidebar"
import TechTag from "../components/Tags/TechTag"
import ShareBlock from "../components/ShareBlock"
import Layout from "../components/Layout"

const BlogPost = props => {
  const post = props.data.markdownRemark
  const labels = props.data.site.siteMetadata.labels
  const siteName = props.data.site.siteMetadata.title
  const siteUrl = props.data.site.siteMetadata.url
  const url = `${siteUrl}${props.pageContext.slug}`
  const tags = post.frontmatter.tags

  const getTechTags = tags => {
    const techTags = []
    tags.forEach((tag, i) => {
      labels.forEach(label => {
        if (tag === label.tag) {
          techTags.push(
            <TechTag
              key={i}
              tag={label.tag}
              tech={label.tech}
              name={label.name}
              size={label.size}
              color={label.color}
            />
          )
        }
      })
    })
    return techTags
  }

  return (
    <Layout>
      <SEO title={post.frontmatter.title} />
      <div className="post-page-main">
          <Sidebar/>
          <div className="post-main">
            <small>
              <h1>{post.frontmatter.title}</h1>
            <SEO title={post.frontmatter.title} />
          <div className="d-block">{getTechTags(tags)}</div>
          <i>Published on </i> {post.frontmatter.date}
          </small>
          <br/>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <ShareBlock
              title={post.frontmatter.title}
              siteName={siteName}
              url={url}
            />
          </div>
        </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        url
        title
        labels {
          tag
          tech
          name
          size
          color
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
    
      }
    }
  }
`

export default BlogPost
