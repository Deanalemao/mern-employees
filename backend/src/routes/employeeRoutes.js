import express from "express";
import { getAllEmployees,getEmployeeById,insertEmployee,updateEmployee,deleteEmployee } from "../controller/employeeController.js";

const router = express.Router();

router.get("/",getAllEmployees);
router.get("/:id",getEmployeeById);
router.post("/",insertEmployee);
router.put("/:id",updateEmployee);
router.delete("/:id",deleteEmployee);

export default router;