import mongoose  from "mongoose";

const employeeSchema = new mongoose.Schema({

    emp_name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    age:{
        type:Number,
        required:true,
    },
    contact:{
        type:Number,
        required:true,
        unique:true,
    },
    department:{
        type:String,
        required:true,
    },
    doj:{
        type:Date,
        required:true,
    },
    salary:{
        type:Number,
        required:true
    },
},
{timestamps:true});

const Employee = mongoose.model("Employee",employeeSchema);

export default Employee;