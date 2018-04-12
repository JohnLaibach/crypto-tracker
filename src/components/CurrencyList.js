import React from "react";
import { Link } from 'react-router-dom';


const CurrencyList = ({ currencies, convertCurrency }) =>
    <table style={{ width: '100%' }}>
        <thead>
            <tr>
                <th>Rank</th>
                <th>Symbol</th>
                <th>Price</th>
                <th>24h change</th>
            </tr>
        </thead>
        <tbody>
            {currencies && currencies.map(currency => {
                return (
                    <tr key={currency.id}>
                        <td>{currency.rank}</td>
                        <td><Link to={`/details/${currency.name.toLowerCase()}`}>{currency.symbol}</Link></td>
                        <td>{parseFloat(currency['price_' + convertCurrency]).toFixed(2)} {convertCurrency.toUpperCase()}</td>
                        <td>{currency.percent_change_24h}%</td>
                    </tr>
                )
            })}
        </tbody>
    </table>

export default CurrencyList;