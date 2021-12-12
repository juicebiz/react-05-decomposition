import React from 'react'

function List(props) {
    
    console.log(props.items)
    const items = props.items
    return (
        <ul className='List-items'>
            {items.map(item => 
                <li>
                    <a href={item.link}>
                        {item.image ? <img src={item.image} alt='' /> : ''}
                        {item.category ? <strong>{item.category} - </strong> : '' }
                        {item.time ? <strong>{item.time} </strong> : '' }
                        {item.title}
                        {item.subtitle ? <span className='List-item-subtitle'> {item.subtitle}</span> : '' }
                    </a>
                </li>
            )}
        </ul>
    )
}

export default List
