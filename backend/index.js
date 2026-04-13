import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

app.use(express.json());

app.use("/api/auth", authRoutes);


const conectarDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(" Mongo Atlas conectado");
    } catch (error) {
        console.log(" Error Mongo:", error.message);
    }
};

conectarDB();

app.get("/", (req, res) => {
    res.send("API funcionando");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(` Servidor en http://127.0.0.1:${PORT}`);
});