import authReducer from './auth'
import filterReducer from './filter'
import productsReducer from './products'
import compareReducer from './compare'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    auth : authReducer,
    filter : filterReducer,
    products : productsReducer,
    compare : compareReducer,
})

export default rootReducer