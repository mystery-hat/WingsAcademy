const route=require("express").Router()
route.use("/contact",require("./contact"))
exports=module.exports={
    route
}