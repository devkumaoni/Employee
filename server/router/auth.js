const express = require('express');
const router = express.Router();
const User = require("../model/userSchema");

router.get('/', (req,res) => {
    res.json("Server Running");
    });

router.post('/register', async (req,res) => {

    try{
        
        const user = new User({...req.body});
        const userRegister = await user.save();

        if(userRegister)
        return res.status(201).json({message: "registered successfully" , userRegister});
    }catch(err){
        console.log(err);
return res.status(500).json({error: "Error", err})
    }

});

// router.get('/Dashboard', (req,res)=>{
//     console.log("Dashboard ROute");
//     return res.sendFile(static_path+ '/dashboard.html')
// })

router.get('/fetch', async (req,res) => {
    try{
        
       const user = await User.find();

        return res.json(user)

    }catch(err){
        console.log(err);
return res.status(500).json({error: "Error", err})
    }

});


module.exports = router;
