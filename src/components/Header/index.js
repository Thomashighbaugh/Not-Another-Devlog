import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import MobilePageLinks from "./MobilePageLinks"
import SocialLinks from "./SocialLinks"
import MobileBio from "./MobileBio"

const Header = ({ siteTitle, author, contacts }) => {
  return (
    <header>
      <div className="head-elements">
        <h3 className="ml-5 header-title">
          <Link to="/">{siteTitle}</Link>
        </h3>
      </div>
      <SocialLinks contacts={contacts} />
      <MobilePageLinks />
      <MobileBio author={author} />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}
export default Header
