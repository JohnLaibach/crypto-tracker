import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Toolbar extends Component {

    render () {
        return (
            <div>
                <p>
                    <span>Convert currency: </span>
                    <span style={{ fontWeight: 800 }}>{this.props.convertCurrency.toUpperCase()}</span>&nbsp;&nbsp;
                    <Link to="/settings"><span style={{ fontSize: '12px'}}>Change convert currency</span></Link>
                </p>
                <p>
                    <Link to="/">Top 100 list</Link>
                </p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        convertCurrency: state.settingsReducer.convertCurrency
    };
};

export default connect(mapStateToProps)(Toolbar);
