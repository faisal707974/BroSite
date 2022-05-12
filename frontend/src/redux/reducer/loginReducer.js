import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_RESET } from '../constants/loginConstant'
import { USER_REGISTER_RESET } from '../constants/registerConstant'

export const loginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST :
            return {loading:true}
        case USER_LOGIN_SUCCESS :
            console.log({action})
            return {loading:false, userInfo: action.payload.userInfo}
        case USER_LOGIN_FAIL :
            return {loading:false}
        case USER_REGISTER_RESET :
            return
        default :
            return state
    }
}