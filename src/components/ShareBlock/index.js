import PropTypes from "prop-types"
import React from "react"
import './styles.scss'
import { FaTwitter, FaLinkedin, FaFacebook, FaEnvelope } from "react-icons/fa"
import { ShareBlockStandard, ShareButtonIconOnly } from "react-custom-share"

const ShareBlock = props => {
  const { url, title, siteName } = props

  const shareBlockProps = {
    url: url,
    button: ShareButtonIconOnly,
    buttons: [
      { network: "Twitter", icon: FaTwitter },
      { network: "Facebook", icon: FaFacebook },
      { network: "Linkedin", icon: FaLinkedin },
      { network: "Email", icon: FaEnvelope },
    ],
    text: title,
    longtext: siteName,
  }
  return (
    <div className="mt-4 share-block">
      <ShareBlockStandard {...shareBlockProps} />
      <p className="text-center">
        <i> [ shares appreciated ]  </i>
      </p>
    </div>
  )
}

ShareBlock.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  siteName: PropTypes.string,
}

ShareBlock.defaultProps = {
  url: "https://mywebsite.com/page-to-share/",
  title: "Default value of title",
  siteName: "Default value of excerpt",
}

export default ShareBlock
