import React, { Component } from 'react';
import { connect } from 'react-redux';

import { listFetchData } from '../actions/list';
import CurrencyList from '../components/CurrencyList';


const APIUrl = 'https://api.coinmarketcap.com/v1/ticker/?limit=100&convert=';

class List extends Component {

    componentDidMount() {
        const url = `${APIUrl}${this.props.convertCurrency}`;
        this.props.onRefresh(url);
    }

    render () {
        if (this.props.hasErrored) {
            return <p>Something went wrong</p>
        }

        if (this.props.isLoading) {
            return <p>Loading...</p>
        }

        const url = `${APIUrl}${this.props.convertCurrency}`;

        return (
            <React.Fragment>
                <h1>Top 100 Cryptocurrencies</h1>
                <button onClick={() => this.props.onRefresh(url)}>Refresh</button>
                <CurrencyList currencies={this.props.currencies} convertCurrency={this.props.convertCurrency} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        currencies: state.listReducer.currencies,
        hasErrored: state.listReducer.listHasErrored,
        isLoading: state.listReducer.listIsLoading,
        convertCurrency: state.settingsReducer.convertCurrency
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRefresh: (url) => dispatch(listFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);