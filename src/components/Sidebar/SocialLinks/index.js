import React from "react"
import {
  FaLinkedin,
  FaGithubSquare,
  FaDribbble,
  FaTwitterSquare,
} from "react-icons/fa"

const SocialLinks = ({ contacts }) => {
  return (
    <div className="side-social-links float-left">
      <button className="text-secondary p-2" href={contacts.linkedin}>
        <span title="Linked In">
          <FaLinkedin size={26} style={{ color: "secondary" }} />
        </span>
      </button>
      <button className="text-secondary p-2" href={contacts.github}>
        <span title="GitHub">
          <FaGithubSquare size={26} style={{ color: "secondary" }} />
        </span>
      </button>
      <button className="text-secondary p-2" href={contacts.dribbble}>
        <span title="freeCodeCamp">
          <FaDribbble size={26} style={{ color: "secondary" }} />
        </span>
      </button>
      <button className="text-secondary p-2" href={contacts.twitter}>
        <span title="Twitter">
          <FaTwitterSquare size={26} style={{ color: "secondary" }} />
        </span>
      </button>
      <hr  />
    </div>
  )
}

export default SocialLinks
