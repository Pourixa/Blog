const err = require("../lib/error")
const jwt = require("jsonwebtoken")
exports.authenticateToken = function(req,res,next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if(token == null)
    {
        next(new err("UNAUTHORIZED",401))
    }
    else{
        jwt.verify(token,process.env.SECRET_KEY,(er,user) => {
             if(er)
                next(new err("FORBIDDEN",403))
            else {
                req.user = user
                next()
            }
        })
    }

}