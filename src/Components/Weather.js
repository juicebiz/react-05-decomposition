import React from 'react'
import HeaderBlock from './HeaderBlock'

function Weather(props) {
    return (
        <div className='Weater'>
            <HeaderBlock link="#weather" title="Погода" />
            <div className='Weater-values'>
                <div className='Weater-current'>
                    <div className={`Weather-current-icon-${props.icon}`} ></div>
                    <div className='Weather-current-value'>{props.current_value}</div>
                </div>
                <div className='Weather-prediction'>
                    {props.top_value}<br />
                    {props.bottom_value}
                </div>
            </div>
        </div>
    )
}

export default Weather
