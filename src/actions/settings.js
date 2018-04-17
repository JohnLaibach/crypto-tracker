import { SETTINGS_SET_CURRENCY } from './actionTypes';


export const settingsSetCurrency = symbol => ({
    type: SETTINGS_SET_CURRENCY,
    convertCurrency: symbol
});
