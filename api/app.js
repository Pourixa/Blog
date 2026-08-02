const express = require("express")
const signupRouter = require("./src/routes/signupRouter")
const loginRouter = require("./src/routes/loginRouter")
const postRouter = require("./src/routes/postRouter")
const cors = require("cors")
const app = express()

app.use(cors({
    origin:process.env.ORIGIN.split(",")
}))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use("/signup",signupRouter)
app.use("/login",loginRouter )
app.use("/post",postRouter)


app.use((err, req, res, next) => {
  console.log(err.message)
  res.status(err.statusCode);
  res.json({code:err.statusCode,message:err.message});
})
app.listen(8585 , err => {
    if(!err) 
        console.log("Running on 8585")
    else
        throw Error(err)
})