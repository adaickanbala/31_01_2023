const mongoose = require("mongoose")
const data_schema = require("./schema")
 
let post_data = async(req,res)=>{
    const data = data_schema({
        name:req.body.name,
        username:req.body.username,
        password:req.body.password
    })
    const savedata = await data.save()
    res.json(savedata)
}

module.export = {post_data}