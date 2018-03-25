const Sequelize=require("sequelize")
const db=new Sequelize("messagesa","messageabhinav","password",{
    host:"localhost",
    dialect:"mysql",
    pool:{
        min:0,
        max:5
    }
})
const Message=db.define("message",{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    first_name:{
        type:Sequelize.STRING,
        allowNull:false
    },
    last_name:{
        type:Sequelize.STRING
    },
    area_code:{
        type:Sequelize.STRING
    },
    telephone:{
        type:Sequelize.INTEGER
    },
    email:{
        type:Sequelize.STRING
    },
    allow_contact:{
        type:Sequelize.BOOLEAN
    },
    preffered_mode:{
        type:Sequelize.STRING
    },
    feedback:{
        type:Sequelize.STRING
    }
})
db.sync()
    .then(()=>{
        console.log("Database has been synced")
    })
    .catch(()=>{
        console.log("Error creating database")
    })
exports=module.exports={
    Message
}