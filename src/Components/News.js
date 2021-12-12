import React from 'react'
import List from './List'

function News(props) {

    return (
        <div className="News-block">
            <nav className="News-nav">
                <ul className="News-nav-menu">
                    <li><a href="#" className="active">Сейчас в СМИ</a></li>
                    <li><a href="#">В Германии</a></li>
                    <li><a href="#">Рекомендуем</a></li>
                </ul>
            </nav>
            <List items={props.news} />            
        </div>
    )
}

export default News
