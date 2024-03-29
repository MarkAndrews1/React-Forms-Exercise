import React from "react";
import './Box.css'

const Box = ({
    id,
    color,
    height,
    width,
    removeBox 
    }) => {

    const remove = () => removeBox(id)

    return(
        <div>
            <div
            className="Box"
            style={{
                height: `${height}em`,
                width: `${width}em`,
                backgroundColor: color
            }}
            >
                <span className="Box-remove-btn" onClick={remove}>X</span>
            </div>
        </div>

    )
}

export default Box