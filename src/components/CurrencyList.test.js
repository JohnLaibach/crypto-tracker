import React from 'react';
import { Link } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import CurrencyList from './CurrencyList';


configure({ adapter: new Adapter()});

const mockData = [{
    "id": "bitcoin", 
    "name": "Bitcoin", 
    "symbol": "BTC", 
    "rank": "1", 
    "price_usd": "6999.16", 
    "price_btc": "1.0", 
    "24h_volume_usd": "5561780000.0", 
    "market_cap_usd": "118797267617", 
    "available_supply": "16973075.0", 
    "total_supply": "16973075.0", 
    "max_supply": "21000000.0", 
    "percent_change_1h": "2.05", 
    "percent_change_24h": "2.08", 
    "percent_change_7d": "2.7", 
    "last_updated": "1523531375"
}, 
{
    "id": "ethereum", 
    "name": "Ethereum", 
    "symbol": "ETH", 
    "rank": "2", 
    "price_usd": "434.43", 
    "price_btc": "0.0624603", 
    "24h_volume_usd": "1699710000.0", 
    "market_cap_usd": "42909289209.0", 
    "available_supply": "98771469.0", 
    "total_supply": "98771469.0", 
    "max_supply": null, 
    "percent_change_1h": "2.41", 
    "percent_change_24h": "4.58", 
    "percent_change_7d": "13.93", 
    "last_updated": "1523531359"
}, 
{
    "id": "ripple", 
    "name": "Ripple", 
    "symbol": "XRP", 
    "rank": "3", 
    "price_usd": "0.528543", 
    "price_btc": "0.00007599", 
    "24h_volume_usd": "636798000.0", 
    "market_cap_usd": "20663135214.0", 
    "available_supply": "39094520623.0", 
    "total_supply": "99992405149.0", 
    "max_supply": "100000000000", 
    "percent_change_1h": "3.69", 
    "percent_change_24h": "7.49", 
    "percent_change_7d": "6.67", 
    "last_updated": "1523531341"
}];

const mockConvertCurrency = 'usd';

describe('<CurrencyList />', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<CurrencyList />);
    });

    it('should render a <table> element', () => {
        expect(wrapper.find('table').exists()).toBeTruthy();
    });

    it('should render <tbody> element with 3 <tr> child elements', () => {
        wrapper.setProps({ currencies: mockData, convertCurrency: mockConvertCurrency });
        expect(wrapper.find('tbody > tr')).toHaveLength(3);
    });

    it('should render <tbody> element with 1st <tr> child with 4 <td> elements', () => {
        wrapper.setProps({ currencies: mockData, convertCurrency: mockConvertCurrency });
        expect(wrapper.find('tbody').childAt(0).find('td')).toHaveLength(4);
    });

    it('should render <tr> element with 1st <td> element with the text "1"', () => {
        wrapper.setProps({ currencies: mockData, convertCurrency: mockConvertCurrency });
        expect(wrapper.find('tbody > tr').first().childAt(0).text()).toBe('1');
    });

    it('should render <tr> element with 4th <td> element with the text "2.08%"', () => {
        wrapper.setProps({ currencies: mockData, convertCurrency: mockConvertCurrency });
        expect(wrapper.find('tbody > tr').first().childAt(3).text()).toBe('2.08%');
    });
});