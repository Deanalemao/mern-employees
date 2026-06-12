import { json } from "express";
import Employee from "../models/Employee.js";


export const getAllEmployees = async (req,res) => {

    try {
        const filter = {};
        if(req.query.department){
            filter.department = req.query.department;
        }
        const employees = await Employee.find(filter);
        res.status(200).json(employees);
    } catch (error) {
        console.error("Error in getAllEmployees controller");
        res.status(500).json({message:"Internal server error"});
    }
}

export const getEmployeeById = async (req,res) => {

    try {
        const employee = await Employee.findById(req.params.id);
        if(!employee) return res.status(404).json({message:"Employee not found"});
        res.status(200).json(employee);
    } catch (error) {
        console.error("Error in getEmployeeById controller");
        res.status(500).json({message:"Internal server error"});
    }
}

export const insertEmployee = async (req,res) => {

    try {
        const {emp_name,email,age,contact,department,doj,salary} = req.body;
        const employee = new Employee({emp_name,email,age,contact,department,doj,salary});
        const savedEmp = await employee.save();
        res.status(201).json(savedEmp);
    } catch (error) {
        console.error("Error in insertEmployee controller");
        res.status(500).json({message:"Internal server error"});
        
    }
}

export const updateEmployee = async (req,res) => {

    try {
        const {emp_name,email,age,contact,department,doj,salary} = req.body;
        const updateEmployee = await Employee.findByIdAndUpdate(req.params.id,{emp_name,email,age,contact,department,doj,salary},{new:true});
        if(!updateEmployee) return res.status(404).json({message:"Employee not found"});
        res.status(200).json(updateEmployee);
    } catch (error) {
        console.error("Error in updateEmployee controller");
        res.status(500).json({message:"Internal server error"});
       
    }
}

export const deleteEmployee = async (req,res) => {

    try {
        const deleteEmployee = await Employee.findByIdAndDelete(req.params.id);
        if(!deleteEmployee) return res.status(404).json({message:"Employee not found"});
        res.status(200).json({message:"Employee deleted successfully"});
    } catch (error) {
        console.error("Error in deleteEmployee controller");
        res.status(500).json({message:"Internal server error"});
    }
}