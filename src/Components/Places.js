import React from 'react'
import HeaderBlock from './HeaderBlock'
import List from './List'

function Places(props) {
    return (
        <div className='Places'>
            <HeaderBlock link='#' title='Посещаемое' />
            <List items={props.items} />
        </div>
    )
}

export default Places
