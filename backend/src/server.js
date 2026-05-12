import express from "express";
import {connectDB} from "./config/db.js";
import dotenv from "dotenv";
import employeeRoutes from "./routes/employeeRoutes.js";
import cors from "cors";

dotenv.config();
console.log(process.env.MONGO_URL);

const app = express();
const PORT = process.env.PORT || 5001;

//Middleware
app.use(cors({
    origin: "http://localhost:5173"
}));
app.use(express.json());

//Routes
app.use("/api/employees",employeeRoutes);

connectDB().then(()=>{
    app.listen(PORT, () => {
    console.log("Server started on port",PORT);
});
});
