const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

let users = [];

// REGISTER
app.post("/register",(req,res)=>{
    const {email,password} = req.body;

    const userExists = users.find(u => u.email === email);

    if(userExists){
        return res.json({success:false,message:"User already exists"});
    }

    users.push({email,password});

    res.json({success:true,message:"Registered successfully"});
});

// LOGIN
app.post("/login",(req,res)=>{
    const {email,password} = req.body;

    const user = users.find(u => u.email === email && u.password === password);

    if(user){
        res.json({success:true});
    }else{
        res.json({success:false,message:"Invalid credentials"});
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
});