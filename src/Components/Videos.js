import React from 'react'
import HeaderBlock from './HeaderBlock'
import List from './List'

function Videos(props) {
    return (
        <div className='Videos'>
            <HeaderBlock link='#' title='Эфир' />
            <List items={props.items} />
        </div>
    )
}

export default Videos
