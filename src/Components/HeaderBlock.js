import React from 'react'

function HeaderBlock(props) {
    return (
        <h3>
            <a href={props.link}>{props.title}</a>
        </h3>
    )
}

export default HeaderBlock
