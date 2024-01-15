const mongoose=require("mongoose");

const PostSchema=mongoose.Schema({
    title:String,
    body:String,
    device:{type:String,enum:["Laptop","Tablet","Mobile"],default:"Laptop"},
    no_of_comments:Number,
    name:String,
    userID:String
},{
    version_key:false
})

const PostModel=mongoose.model("post",PostSchema);

module.exports={
    PostModel
}