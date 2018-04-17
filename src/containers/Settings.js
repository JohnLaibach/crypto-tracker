import React, { Component } from 'react';
import { connect } from 'react-redux';

import { settingsSetCurrency } from '../actions/settings';


const convertCurrencies = [
    'usd',
    'eur',
    'cny'
];

class Settings extends Component {

    constructor(props) {
        super(props);

        this.onCurrencyChange = this.onCurrencyChange.bind(this);
    }

    onCurrencyChange(event) {
        const currency = event.target.value;
        this.props.onSetCurrency(currency);
    }

    render () {
        return (
            <React.Fragment>
                <h1>Settings</h1>
                <label htmlFor="convertCurrency">Select convert currency: </label>
                <select onChange={this.onCurrencyChange} id="convertCurrency" value={this.props.convertCurrency}>
                    {convertCurrencies.map(currency => {
                        return <option key={currency} value={currency}>{currency.toUpperCase()}</option>
                    })}
                </select>
            </React.Fragment>
        );
    }
    
}

const mapStateToProps = state => {
    return {
        convertCurrency: state.settingsReducer.convertCurrency
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSetCurrency: (currency) => dispatch(settingsSetCurrency(currency))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
