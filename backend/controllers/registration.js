export const register = (req,res)=>{
            console.log('registration controller')
            console.log(req.body)
            res.json({
                message: 'this is from backend'
            })
}