import React from 'react'
import HeaderBlock from './HeaderBlock'
import List from './List'

function TvProgram(props) {
    return (
        <div className='Maps'>
            <HeaderBlock link='#' title='Телепрограмма' />
            <List items={props.items} />
        </div>
    )
}

export default TvProgram
