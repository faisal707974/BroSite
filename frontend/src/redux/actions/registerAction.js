import axios from 'axios'
import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/registerConstant"

export const registeration = (data, toggleModal)=> async(dispatch,getstate)=>{
    try{

        dispatch({type: USER_REGISTER_REQUEST})
        const config = {headers: {'Content-Type': 'applicatoin/json'}}
        const {response} = await axios.post('http://localhost:3001/registration', data)
        
        dispatch({type:USER_REGISTER_SUCCESS,payload:response})
        toggleModal()
    }catch(error){
        dispatch({type:USER_REGISTER_FAIL,payload:
        error.response?error.response:error.message
        })
    }
}