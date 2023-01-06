const jwt = require('jsonwebtoken');
const User = require('../models/userModel')

const auth = {
    ensureAuth : async(req,res,next)=>{
        try{
            if(req.isAuthenticate()){
                const authHeader = req.headers["authorization"];
                const token = authHeader && authHeader.split(" ")[1];
                if(!token) return res.status(400).json({msg: 'Invalid Authentication'});
                const decoded =jwt.verify(token, "mynameisaashishshrestha");
                if(!decoded) return res.status(400).json({msg: 'Invalid Decoded Authentication'});
                const user = await User.findOne({_id: decoded.id})
                req.user = user;
                next()
            }else{
                res.redirect('/');
            }
        }
        catch(err){
            res.status(500).json({msg: err.message})
        }
    },
    ensureGuest: async (req,res,next) => {
        if (!req.isAuthenticated()) {
            return next();
          } else {
            res.redirect('/dashboard');
          }
    }
}

module.exports = auth