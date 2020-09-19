import { combineReducers } from 'redux';

import { carReducer } from './carReducer';
import { featureReducer } from './featureReducer';

export const rootReducer = combineReducers({
    carReducer,
    featureReducer
})