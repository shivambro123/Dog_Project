import {combineReducers} from 'redux';
import dogReducer from './Reducer';

const rootReducer = combineReducers({
    dog:dogReducer, 
})

export default rootReducer;