import React from "react"
import { FaIgloo, FaPenAlt, FaSave } from "react-icons/fa"
import Button from "react-bootstrap/Button"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const SocialLinks = ({ siteTitle }) => {
  return (
    <div className="float-left">
      <Link to="/">{siteTitle}</Link>
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
    </div>
  )
}
SocialLinks.propTypes = {
  siteTitle: PropTypes.string,
}

export default SocialLinks
