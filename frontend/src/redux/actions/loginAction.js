import { USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_LOGIN_RESET } from '../constants/loginConstant'
import axiosInstance from '../../axios'

export const loginAction = (data, setErr, navigate) => async (dispatch, getstate) => {
    dispatch({ type: USER_LOGIN_REQUEST })

    const config = {
        withCredentials: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
        }
    }
    try {

        const response = await axiosInstance.post('http://localhost:3001/login', data)

        if (response.data.userInfo) {
            localStorage.setItem( 'userInfo', response.data.userInfo._id )
        }

        switch (response.data.userInfo.Role) {
            case 'NEWREGISTRATION':
                navigate('/brocamp')
                break;

            case 'FUMIGATION':
                navigate('/fumigation')
                break;

            case 'BROCAMP':
                navigate('/brocamp')
                break;

            case 'ADVISOR':
                navigate('/advisor')
                break;

            case 'MANAGER':
                navigate('/manager')
                break;
        }

        dispatch({ type: USER_LOGIN_SUCCESS, payload: response.data })

    } catch (error) {
        // console.log(error)
        switch (error.response?.status) {
            case 401:
                setErr(error.response.data.message)
                break;

            case 403:
                setErr(error.response.data.message)
                break;
        }
    }
}