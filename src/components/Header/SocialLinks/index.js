import React from "react"
import {
    FaHome,
    FaBlog
} from "react-icons/fa"
import { Link } from 'gatsby'


const SocialLinks = ({ contacts }) => {
    return (
        <div className="social-links float-right mr-4">
            <a className="text-primary ml-4"
                href={contacts.portfolio}>
                <Link title="GitHub" to="/">
                    <FaHome size={40} style={{ color: "#8D4DFF" }} />
                </Link>
            </a>
            <a className="text-info ml-4"
                href={contacts.twitter}>
                <Link to="/archive" title="Twitter">
                    <FaBlog size={40} style={{ color: "#8D4DFF" }} />
                </Link>
            </a>
        </div>
    )
}

export default SocialLinks