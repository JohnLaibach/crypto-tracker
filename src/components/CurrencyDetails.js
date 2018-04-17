import React from "react";


const CurrencyDetails = ({ details, convertCurrency }) =>
 
    <table style={{ width: '100%' }}>
        <thead>
            <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Price {convertCurrency.toUpperCase()}</th>
                <th>Price BTC</th>
                <th>24h volume</th>
                <th>Marketcap</th>
                <th>1h change</th>
                <th>24h change</th>
                <th>7d change</th>
                <th>Total supply</th>
                <th>Available supply</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{details.rank}</td>
                <td>{details.name}</td>
                <td>{details.symbol}</td>
                <td>{parseFloat(details['price_' + convertCurrency]).toFixed(2)}</td>
                <td>{parseFloat(details.price_btc).toFixed(4)}</td>
                <td>{details['24h_volume_' + convertCurrency]} {convertCurrency.toUpperCase()}</td>
                <td>{details['market_cap_' + convertCurrency]} {convertCurrency.toUpperCase()}</td>
                <td>{details.percent_change_1h}%</td>
                <td>{details.percent_change_24h}%</td>
                <td>{details.percent_change_7d}%</td>
                <td>{parseFloat(details.total_supply).toFixed(0)}</td>
                <td>{parseFloat(details.available_supply).toFixed(0)}</td>
            </tr>
        </tbody>
    </table>

export default CurrencyDetails;
