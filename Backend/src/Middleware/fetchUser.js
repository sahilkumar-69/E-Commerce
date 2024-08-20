import  jwt  from "jsonwebtoken";
import User from "../Model/user.model.js"

const fetchUser = async (req, res, next) => {

    const token = req.header('auth_token');

    if(!token){
        return res.status(401).send({errors: "please provide a valid authentication token"})
    }

    try {
        const decoded = jwt.verify(token, "secret_jwt_token");

        // console.log(decoded)
        if(!decoded){
            return res.status(400).send({errors: "invalid token"})
        }

        req.user = decoded.id
        next()
    } catch (error) {
        console.log(error)
    }


    
}

export {fetchUser}