import jwt from 'jsonwebtoken'

export const Authentication = (req, res, next) => {
    let token = req.headers.cookie 
    token=token.split("=")[1]
    if (token) {
        const decodeData = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decodeData
        next()
    } else {
        res.status(401)
        res.json({ message: 'user is not logged in' })
    }
}