const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const bcrypt = require('bcrypt')
const cookie = require('cookie-parser')
const authCtrl = {
    signUp: async(req,res) => {
            try{
               const {name,username,phone_number,email_address,address,password} = req.body;
               if(!(name && username && phone_number && email_address && password)) return res.status(406).json({msg:'Fill out the missing input field'});
               const newUser = new User({
                   name,username,address,email_address,phone_number,password
                })
                await newUser.save();
                bcrypt.hash(password,10,(err,hashPassword)=>{
                   newUser.password = hashPassword 
                   newUser.save();
                });

            const access_token = createAccessToken({id: newUser._id.toString()})
            const refresh_token = createRefreshToken({id: newUser._id.toString()})

            res.cookie('refreshtoken',refresh_token,{
                httpOnly: true,
                path:'/admin/refresh_token',
                maxAge: 30*24*60*60*1000
            })
            await newUser.save()
            res.json({
                msg: 'Register Success!',
                access_token,
                user: {
                    ...newUser._doc,
                    password: ''
                }
            })
            }
            catch(err){
                return res.status(500).json({msg: err.message})
            }
        },
    logIn: async(req,res)=>{
        try{
            const {username,password} = req.body;
            if(!(username && password)) return res.status(406).json({msg: 'Fill out the missing inputs'});
            const user = await User.findOne({username});
            if(!bcrypt.compare(password,user.password)) return res.json({msg: 'Incorrect Password'});
            const accessToken = createAccessToken({id : user._id});
            const refreshToken = createRefreshToken({id : user._id});
            res.cookie('refreshtoken',refreshToken,{
                httpOnly: true,
                path:'/admin/refresh_token',
                maxAge: 30*24*60*60*1000
            })
            res.json({
                msg: 'Login Successfully',
                accessToken,
                user:{
                    ...user._doc,
                    password:''
                }
            })
        }
        catch(err){
            return res.status(500).json({msg: err.message})
        }
    },
    logOut: async(req,res)=>{
        try{
            res.clearCookie('refreshtoken',{path:'/admin/refresh_token'})
            return res.json({msg:"Logged Out!"})
        }catch(err){
            return res.status(500).json({msg:err.message})
        }
    },
    generateToken: async(req,res)=>{
        res.json({msg: 'Refresh Token Created'});
    }
}

const createAccessToken = (user) =>{
    return jwt.sign(user,'mynameisaashishshrestha',{expiresIn: "40s"});
}

const createRefreshToken = (user) =>{
    return jwt.sign(user,'mynameisaashishshrestha',{expiresIn: "40s"});
}

module.exports = authCtrl