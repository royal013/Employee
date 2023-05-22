const mongoose=require("mongoose");


const employeeSchema=new mongoose.Schema({
    full_name:{
        type:String,
        require:true
    },
    job_title:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    addres:{
        type:String,
        require:true
    },
    city:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    primary_e_contact:{
        type:String,
        require:true
    },
    e1_phone:{
        type:Number,
        require:true
    },
    e1_relation:{
        type:String,
        require:true
    },
    secondary_e_contact:{
        type:String,
        require:true
    },
    e2_phone:{
        type:Number,
        require:true
    },
    e2_relation:{
        type:String,
        require:true
    }

})


const Employee=new mongoose.model("Employee",employeeSchema);

module.exports=Employee;