import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { registerReducer } from './reducer/registerReducer'
import { loginReducer } from './reducer/loginReducer'
import { sideBarReducer } from './reducer/sidebarReducer'
import { workshopIdReducer } from './reducer/managerReducer'

const reducer = combineReducers({
    Register: registerReducer,
    Login: loginReducer,
    SideBar: sideBarReducer,
    WorkshopId: workshopIdReducer
})

const middleware = [thunk]

const initialState = {
    SideBar: {
        status: false
    }
}

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;