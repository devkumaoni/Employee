const express = require('express');
const router = express.Router();
const User = require("../model/userSchema");
const path = require("path");
const static_path = path.join(__dirname, "../public");

router.get('/', (req,res) => {
    res.sendFile(static_path+ '/index.html')
    });

router.post('/register', async (req,res) => {
    console.log("Request at Register", req.body);

    try{
        
        const user = new User({...req.body});

        const userRegister = await user.save();

        // res.status(201).json({message: "registered successfully" , userRegister});
        return res.sendFile(static_path+ '/dashboard.html')

    }catch(err){
        console.log(err);
return res.status(500).json({error: "Error", err})
    }

});

router.get('/Dashboard', (req,res)=>{
    console.log("Dashboard ROute");
    return res.sendFile(static_path+ '/dashboard.html')
})

router.get('/fetch', async (req,res) => {
    console.log("Request at Fetch");
    try{
        
       const user = await User.find();

        return res.json(user)

    }catch(err){
        console.log(err);
return res.status(500).json({error: "Error", err})
    }

});


module.exports = {router,static_path};
