import React from 'react'


function Button(props) {
    return (
        <>
            <a href="" className="button">
                <span class="button-text">{props.btntext}</span>
                <span class="button-icon">
                    {props.icon}
                </span>
            </a>
        </>
    )
}

export default Button
