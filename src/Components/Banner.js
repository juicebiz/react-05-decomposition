import React from 'react'

function Banner(props) {
    return (
        <div className='Banner'>
            <img className='Banner-image' src={props.image} alt='' />
        </div>
    )
}

export default Banner
