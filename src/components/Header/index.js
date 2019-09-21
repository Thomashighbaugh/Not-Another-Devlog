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
        <h2 className="ml-5">
          <Link to="/">{siteTitle}</Link>
        </h2>
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
