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

if(process.env.NODE_ENV === "development"){

    app.use(cors({
        origin: process.env.CLIENT_URL
    }));
}else{
    app.use(cors({
        origin: process.env.CLIENT_URL
    }));
}

app.use(express.json());

//Test Route
app.get("/", (req,res) =>{
    res.send("Backend running");
});

//Routes
app.use("/api/employees",employeeRoutes);

connectDB().then(()=>{
    app.listen(PORT, () => {
    console.log("Server started on port",PORT);
});
});
