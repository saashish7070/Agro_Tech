const User = require('../models/userModel')

const userCtrl = {
    readAllUser:async(req,res)=>{
        try{
            const allUser = await User.find({});
            res.json({
                msg: "Retrieve Users",
                allUser
            })
        }catch(err){
            res.status(500).json({msg: err.message});
        }
    },
    createUser: async(req,res)=>{
        try{
           const {name,username,address,post_number,phone_number,email_address} = req.body;
           const newUser = new User({
            name,username,address,email_address,post_number,phone_number
           })
           await newUser.save();
           res.json({
            msg: 'User Created',
            newUser
           })
        }
        catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    readUser: async(req,res)=>{
        try{
           const userId = req.params.id;
           const user = await User.findById(userId)
           if(user){
               res.json({
                msg: 'User Search',
                user
               })
           }else{
            res.json({
                msg: 'No such User in our database'
            })
           }
        }
        catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    updateUser: async(req,res)=>{
        try{
           const {name,username,address,post_number,phone_number,email_address} = req.body;
           const updatedUser = new User({
            name,username,address,email_address,post_number,phone_number
           })
           await User.findByIdAndUpdate(req.params.id,updatedUser);
           res.json({
            msg: 'User Created',
            updatedUser
           })
        }
        catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    deleteUser: async(req,res)=>{
        try{
           await User.findByIdAndDelete(req.params._id,{});
           res.json({
            msg: 'User Deleted'
           })
        }
        catch(err){
            return res.status(500).json({msg: err.message})
        }
    }

}

module.exports = userCtrl

