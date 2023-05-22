const express=require("express");
const app=express();
const hbs=require("hbs");
const Employee=require("./models/schema")
require("./db/connection");


app.use(express());
app.use(express.urlencoded({ extended: false }));
app.set("view engine","hbs");
const port=process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.render("index.hbs");
})

app.post("/index",async(req,res)=>{
    try{
        const registerEmployee=new Employee({
            full_name:req.body.full_name,
            job_title:req.body.job_title,
            phone:req.body.phone,
            email:req.body.email,
            addres:req.body.addres,
            city:req.body.city,
            state:req.body.state,
            primary_e_contact:req.body.primary_e_contact,
            e1_phone:req.body.e1_phone,
            e1_relation:req.body.e1_relation,
            secondary_e_contact:req.body.secondary_e_contact,
            e2_phone:req.body.e2_phone,
            e2_relation:req.body.e2_relation
        })
       

        const data=await registerEmployee.save();
        res.status(201).render("index.hbs");

    }
    catch(err){
        res.status(404).send(err);
    }

})

app.listen(port,()=>{
    console.log(`Port No: ${port}`);
})