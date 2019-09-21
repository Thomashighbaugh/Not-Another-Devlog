import React from "react"

import me from "../../../images/me.png"

const Bio = ({ author, tagline }) => {
  return (
    <div className="bio-main w-75">
      <img
        src={me}
        style={{ maxWidth: `150px` }}
        className="profile-img"
        alt=""
      />
      <h1 className="author-bio text-left">{author}</h1>
      <h6 className="text-muted text-right">{tagline}</h6>
      <hr />
    </div>
  )
}

export default Bio
