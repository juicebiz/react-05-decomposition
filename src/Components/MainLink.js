import React from 'react'
import HeaderBlock from './HeaderBlock'

function MainLink(props) {
    return (
        <div className='MainLink-block'>
            <img src={props.image} alt="" />
            <HeaderBlock {...props} />
            <p>{props.description}</p>
        </div>
    )
}

export default MainLink
