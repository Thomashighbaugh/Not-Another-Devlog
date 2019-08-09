import React from "react"

import me from "../../../images/me.png"

const Bio = ({ author, tagline }) => {

    return (
        <div className="bio-main w-75">
            <img src={me} style={{ maxWidth: `100px` }} className="profile-img" alt="" />
            <h3 className="mt-2 author-bio">{author}</h3>
            <small className="text-muted">{tagline}</small>
        </div>
    )
}

export default Bio