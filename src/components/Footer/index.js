import React from "react"


const Footer = ({ author, tagline }) => {

return (

  <footer className="col-12 text-center ml-0 mr-o p-0">
    <div className="navbar-text">
    <p className="d-inline">
      © {new Date().getFullYear()}{" "}
      <a className="text-info" href="https://thomasleonhighbaugh.me">
        [ tlh ]{" "}
      </a>
      , All Rights Reserved.
    </p>
    </div>
    <p className="mt-5 text-muted d-inline">
      <i className="d-block">
        {" "}
        This site was built with
        <a className="text-info ml-2" href="https://www.gatsbyjs.org">
          GatsbyJS
        </a>
      </i>
    </p>
  </footer>
)
}

export default Footer