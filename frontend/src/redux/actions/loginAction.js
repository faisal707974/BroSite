import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_RESET } from '../constants/loginConstant'
import axios from 'axios'

export const loginAction = (data, setErr, navigate) => async (dispatch, getstate) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })
        const response = await axios.post('http://localhost:3001/login', data)
        if (response.data.code == 401) {
            setErr(response.data.message)
        } else if (response.data.code == 403) {
            setErr(response.data.message)
        } else if (response.data.code == 200) {
            // localStorage.setItem()
            console.log(1)
            if(response.data.userInfo.role === 'newRegistration'){
                console.log(2)
                navigate('/new_registration')
            }else if(response.data.userInfo.role === 'fumigation'){
                console.log(3)
                navigate('/fumigation')
            }
            dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data })
        }


    } catch (error) {

    }
}