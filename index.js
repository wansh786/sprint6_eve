const express=require("express")
const cores=require("cores");
const { connection } = require("./db");
const { userRouter } = require("./routers/user.router");
const { postRouter } = require("./routers/post.router");
const app=express();

app.use(express.json());

app.use("/users",userRouter)
app.use("/posts",postRouter)

app.listen(8080,async()=>{
    try {
        await connection;
        console.log("connected to server")
    } catch (error) {
        console.log(error)
    }
})