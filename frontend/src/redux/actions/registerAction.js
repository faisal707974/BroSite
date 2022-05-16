import axios from 'axios'
import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constants/registerConstant"

export const registeration = (data, toggleModal) => async (dispatch, getstate) => {
    dispatch({ type: USER_REGISTER_REQUEST })


    const base64 = data.photo
    fetch(base64)
        .then(res => {
            res.blob()
        })
        .then(blob => {
            const file = new File([blob], data.Name + ".jpeg", { type: 'image/jpeg' });

            const fd = new FormData();
            console.log(file)
            fd.append('file', file)
            fd.append('upload_preset', 'gchysefv')
            fd.append("cloud_name", "dj4qzfqjg");
            fd.append('resource_type', 'auto')
            const API_URL = 'https://api.cloudinary.com/v1_1/dj4qzfqjg/image/upload'
            fetch(API_URL, { method: 'POST', body: fd })
                .then(res => res.json())
                .then(res => {
                    console.log({ res })
                    data.photo = res
                }).catch((error) => {
                    console.log(error)
                })



        })



    try {
        const config = { headers: { 'Content-Type': 'applicatoin/json' } }
        const { response } = await axios.post('http://localhost:3001/registration', data)

        dispatch({ type: USER_REGISTER_SUCCESS, payload: response })
        toggleModal()
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL, payload:
                error.response ? error.response : error.message
        })
    }
}