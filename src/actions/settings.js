export function settingsSetCurrency(symbol) {
    return {
        type: 'SETTINGS_SET_CURRENCY',
        convertCurrency: symbol
    };
}
