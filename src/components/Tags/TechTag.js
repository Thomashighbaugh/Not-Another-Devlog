import React from "react"
import * as FontAwesome from "react-icons/fa"
import * as Devicons from "react-icons/di"

const TechTag = (props) => {
    const { tech, name, size, color } = props
    const str = name;
    const icon = /^Fa/.test(str) ? React.createElement(FontAwesome[name]) : React.createElement(Devicons[name]);

    return (
        <div className="d-inline-block p-1">
                <div
                    className="tech-tag text-white">
                    <p className="d-inline">{tech} </p>
                    <div className="d-inline" style={{ fontSize: size, color: color }}>{icon}</div>
                </div>

        </div>

    )
}

export default TechTag