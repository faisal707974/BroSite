import NewReg from '../models/registration.js'

export const register = async(req, res) => {
    console.log(req.body)
    const response = await NewReg.create(req.body)
    console.log(response)
    res.json({
        Name : response.Name
    })
}