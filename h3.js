const express=require('express');
const cors=require('cors')
const app=express();
app.use(cors());

const middleware=(req,res,next)=>{
    console.log("I am in middleware 1");
    console.log("I got the first request..");
    next();
};

const middleware2=(req,res,next)=>{
    console.log(req+"I am in middleware 2");
    next();
}

app.get("/",middleware,(req,res)=>{
    console.log("Received the login request.")
    res.send("middleware 1");
})

app.get("/second",middleware2,(req,res)=>{
    console.log("second middleware request received");
    res.send("Middleware 2");
})

app.get("/cors",(req,res)=>{
    res.json({
        "Student":[
            {
                "name":"Bindu"
            }
        ]
    })
})

app.listen(8080,()=>{
    console.log("Server has started on port 8080");
})
