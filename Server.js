express=require("express")

app=express()


//cors-------------
cors=require("cors")
app.use(cors())


// bodyParser------
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())


//our Schema---------------
let Userschema=require("./Model/Users")



//mongodb-----
const { mongoose } = require("mongoose")

mongoose.connect("mongodb+srv://Ayush:6rsvhmvwisTn040c@cluster.fryf78w.mongodb.net/project").then((res)=>{
    console.log("mongodb connect")
}).catch((err)=>{
    console.log(err)
})




//signup api--------
app.post("/signup",async(req,res)=>{
    // console.log(req.body)

  let userdata = await Userschema.insertOne({
        username:req.body.signupdata.username,
        email:req.body.signupdata.email,
        password:req.body.signupdata.password,
    })

    let result = await userdata.save()

    if(result){
        res.json({
            status:true,
            msg:"signup success"
        })
    }
    else{
         res.json({
            status:false,
            msg:"failed to signup"
        })
    }
})






//allusers---------

app.get("/allusers",async(req,res)=>{
     let userdata = await Userschema.find({})
    //  console.log(userdata)

     if(userdata){
        res.json({
            status:true,
            ourusers:userdata,
        })
    }
    else{
         res.json({
            status:false
        })
    }
})




app.listen(5000,()=>{
    console.log("server start")
})


app.get("/",(req,res)=>{
    res.json({
        status:true
    })
})