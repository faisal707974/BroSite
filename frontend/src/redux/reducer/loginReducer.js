import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGOUT } from '../constants/loginConstant'

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return { loading: true }
        case USER_LOGIN_SUCCESS:
            return { loading: false, userInfo: action.payload.userInfo, isLoggedIn: true }
        case USER_LOGIN_FAIL:
            return { loading: false }
        case USER_LOGOUT:
            return { isLoggedIn: false }
        default:
            return state
    }
}