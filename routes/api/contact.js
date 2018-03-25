const Message=require("../../db").Message
const route=require("express").Router()
route.get("/",(req,res)=>{
    Message.findAll()
    .then((messages)=>{
        res.status(200).send(messages)
    })
    .catch((err)=>{
        res.send(500).send({error:"Could not retrieve messages"})
    })
})
route.post("/",(req,res)=>{
    Message.create({
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        area_code:req.body.area_code,
        telephone:parseInt(req.body.telephone),
        email:req.body.email,
        allow_contact:req.body.allow_contact,
        preffered_mode:req.body.preffered_mode,
        feedback:req.body.feedback
    })
    .then((message)=>{
        res.status(201).send(message)
    })
    .catch((err)=>{
        console.log(err)
        res.status(501).send({error:"Could not send the message"})
    })
})
exports=module.exports=route