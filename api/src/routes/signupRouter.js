const express = require("express")
const signupRouter = express.Router()
const err = require("../lib/error")
const db = require("../lib/prisma")
const {body , validationResult} = require("express-validator")
const bcrypt = require("bcrypt")
signupRouter.post("/",body("username")
  .trim()
  .notEmpty()
  .withMessage("Username is required.")
  .bail()
  .isLength({ min: 3, max: 255 })
  .withMessage("Username must be between 3 and 255 characters.")
  .bail()
  .matches(/^[a-zA-Z0-9]+([_-]?[a-zA-Z0-9])*$/)
  .withMessage("Username contains invalid characters."),body("password")
  .notEmpty()
  .withMessage("Password is required.")
  .isLength({ min: 8 })
  .withMessage("Password must be at least 8 characters long.")
  ,async (req,res,next) => {
    try {
        const result = validationResult(req)
        if(!result.isEmpty())
            next(new err(result.array()[0].msg,400))
        else
        {
            const salt = await bcrypt.genSalt();
            const password = await bcrypt.hash(req.body.password,salt)
            await db.prisma.user.create({
                data:{username:req.body.username,
                password:password}
            })
            res.status(200).send("Sign-up-successful");
        }
        
    } catch(e)
    {
    if (
        e.code === "P2002"
    ) {
        next(new err("Username already exists.",409));
    }
        next(new err(e,400))
    }
})

module.exports = signupRouter