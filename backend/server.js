const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config();

const cors=require("cors");

app.use(cors());

const userRoute=require("./routes/userRoute");

app.use(express.json());


mongoose.connect(process.env.URL)
.then(()=>{
    console.log("Connect Successfully");
    app.listen(process.env.PORT || 5000,(err)=>{
        if(err)
            console.log(err);
        console.log("Running at",process.env.PORT);
    });
})
.catch((error)=>{
    console.log("error",error);
});

app.use(userRoute);