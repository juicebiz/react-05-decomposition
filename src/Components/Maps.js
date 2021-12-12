import React from 'react'
import HeaderBlock from './HeaderBlock'
import List from './List'

function Maps(props) {
    return (
        <div className='Maps'>
            <HeaderBlock link='#' title='Карта Германии' />
            <List items={props.items} />
        </div>
    )
}

export default Maps
