import React from "react"
import {
    FaHome,
    FaBlog
} from "react-icons/fa"
import { Link } from 'gatsby'


const SocialLinks = ({ contacts }) => {
    return (
        <div className="social-links float-right mr-4">
            <a className="ml-4"
                href={contacts.portfolio}>
                <Link title="Home" to="/">
                    <FaHome size={40} />
                </Link>
            </a>
            <a className="ml-4"
                href={contacts.twitter}>
                <Link to="/archive" title="Blog Archive">
                    <FaBlog size={40}/>
                </Link>
            </a>
        </div>
    )
}

export default SocialLinks