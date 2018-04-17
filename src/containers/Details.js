import React, { Component } from 'react';
import { connect } from 'react-redux';

import { detailsFetchData } from '../actions/details';
import CurrencyDetails from '../components/CurrencyDetails';
import { APIUrl } from '../configs/API';


class Details extends Component {

    componentDidMount() {
        const url = `${APIUrl}/${this.props.match.params.symbol}/?convert=${this.props.convertCurrency}`;
        this.props.onRefresh(url);
    }

    render () {
        if (this.props.hasErrored) {
            return <p>Something went wrong</p>
        }

        if (this.props.isLoading) {
            return <p>Loading...</p>
        }

        const url = `${APIUrl}/${this.props.match.params.symbol}/?convert=${this.props.convertCurrency}`;

        return (
            <React.Fragment>
                <h1>Currency details: {this.props.details.name}</h1>
                <button onClick={() => this.props.onRefresh(url)}>Refresh</button>
                <CurrencyDetails details={this.props.details} convertCurrency={this.props.convertCurrency} />
            </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        details: state.detailsReducer.details,
        hasErrored: state.detailsReducer.detailsHasErrored,
        isLoading: state.detailsReducer.detailsIsLoading,
        convertCurrency: state.settingsReducer.convertCurrency
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRefresh: (url) => dispatch(detailsFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
