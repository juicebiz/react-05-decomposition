import React from 'react'

const currencies = [{
    name: "USD MOEX",
    value: "63,52",
    delta: "+0,09"
},
{
    name: "EUR MOEX",
    value: "70,86",
    delta: "+0,14"
},
{
    name: "НЕФТЬ",
    value: "64,90",
    delta: "+1,63%"
}]

function Currencies() {
    return (
        <ul className='Currency-list'>
            {currencies.map(currency => <li><strong>{currency.name}</strong> {currency.value} <span className='Currency-list-delta'>{currency.delta}</span></li>)}
        </ul>
    )
}

export default Currencies
