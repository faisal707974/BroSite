import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { registerReducer } from './reducer/registerReducer'
import { loginReducer } from './reducer/loginReducer'

const reducer = combineReducers({
    Register : registerReducer,
    Login : loginReducer
})

const middleware = [thunk]

const store = createStore(reducer,composeWithDevTools(applyMiddleware(...middleware)))

export default store;