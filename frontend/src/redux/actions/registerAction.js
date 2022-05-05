import axios from 'axios'
import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/registerConstant"

export const registeration = (datom, toggleModal)=> async(dispatch)=>{
    try{
        dispatch({type: USER_REGISTER_REQUEST})
        const config = {headers: {'Content-Type': 'applicatoin/json'}}
        const {data} = await axios.post('http://localhost:3001/registration', datom)
        
        dispatch({type:USER_REGISTER_SUCCESS,payload:data})
        toggleModal()
        localStorage.setItem('userInfo',JSON.stringify(data))
    }catch(error){
        dispatch({type:USER_REGISTER_FAIL,payload:
        error.response?error.response:error.message
        })
    }
}