import { SETTINGS_SET_CURRENCY } from '../actions/actionTypes';


const initialState = {
    convertCurrency: 'usd'
}

const settingsReducer = (state = initialState, action) => {

    switch (action.type) {
        case SETTINGS_SET_CURRENCY:
            return {
                convertCurrency: action.convertCurrency
            }
        default:
            return state;
    }
};

export default settingsReducer;