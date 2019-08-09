import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"


import MobileSocialLinks from "../MobileSocialLinks/MobileSocialLinks"
import MobilePageLinks from "./MobilePageLinks"
import SocialLinks from "./SocialLinks"
import MobileBio from "./MobileBio"

const Header = ({ siteTitle, tagline, author, contacts }) => {

  return (
    <header
      className="head-main"
    >
      <div className="head-elements"
       >
        <h1 className="head-logo ml-5 mt-2">
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <SocialLinks contacts={contacts} />
      </div>
      <MobileSocialLinks contacts={contacts} />
      <MobilePageLinks />
      <MobileBio author={author} />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
