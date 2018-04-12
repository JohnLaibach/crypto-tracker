import { combineReducers } from 'redux';
import listReducer from './list';
import detailsReducer from './details';
import settingsReducer from './settings';


export default combineReducers({
    listReducer,
    detailsReducer,
    settingsReducer
});