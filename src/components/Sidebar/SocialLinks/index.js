import React from "react"
import { FaIgloo, FaPenAlt, FaSave } from "react-icons/fa"
import Button from "react-bootstrap/Button"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"

const SocialLinks = ({ siteTitle }) => {
  return (
    <div className="float-left">
      <h1 className="navbar-brand">Not <br/>Another <br/>Devlog</h1>
      <hr />
      <Button>
        <Link to="/">
          <span title="Home">
            <FaIgloo size={60} />
            <br />
            Home
          </span>
        </Link>
      </Button>
      <Button>
        <Link to="/about">
          <span title="About">
            <FaPenAlt size={60} />
            <br />
            About
          </span>
        </Link>
      </Button>
      <Button>
        <Link to="/archive">
          <span title="Archive">
            <FaSave size={60} />
            <br />
            Archive
          </span>
        </Link>
      </Button>
      <hr />
      <br/>
      <Container className="text-center text-muted">
      <p className="d-inline">
        © {new Date().getFullYear()}{" "}
        <a href="https://thomasleonhighbaugh.me">
          [ tlh ]
        </a>
        , All Rights Reserved.
      </p>
    <p className="d-inline">
    <i className="d-block">
  This site was built with
  <a href="https://www.gatsbyjs.org">
    GatsbyJS
  </a>
  </i>
    </p>
      </Container>
    </div>
  )
}


export default SocialLinks
