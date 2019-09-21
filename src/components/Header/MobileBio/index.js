import React from "react"

import me from "../../../images/me.png"

const MobileBio = props => {
  return (
    <div className="mobile-bio-main">
      <img src={me} className="ml-4 mt-2" style={{}} alt="author-pic" />
      <h4 className="mr-4 mt-4">{props.author}</h4>
    </div>
  )
}

export default MobileBio
