import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_RESET } from '../constants/loginConstant'
import axios from 'axios'

export const loginAction = (data, setErr, navigate) => async (dispatch, getstate) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })
        const response = await axios.post('http://localhost:3001/login', data)

        switch (response.data.code) {
            case 401:
                setErr(response.data.message)
                break;

            case 403:
                setErr(response.data.message)
                break;

            case 200:
                // localStorage.setItem()
                break;
        }

        switch (response.data.userInfo.role) {
            case 'newRegistration':
                navigate('/new_registration')
                break;

            case 'fumigation':
                navigate('/fumigation')
                break;

            case 'brocamp':
                navigate('/brocamp')
                break;

            case 'advisor':
                navigate('/advisor')
                break;

            case 'manager':
                navigate('/manager')
                break;
        }
        // if(response.data.userInfo.role === 'newRegistration'){
        //     console.log(2)
        //     navigate('/new_registration')
        // }else if(response.data.userInfo.role === 'fumigation'){
        //     console.log(3)
        //     navigate('/fumigation')
        // }
        dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data })
    } catch (error) {

    }
}