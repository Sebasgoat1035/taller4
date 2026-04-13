import express from "express";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

// registroo
router.post("/register", async (req, res) => {
    try {
        const { nombre, email, password } = req.body;

        if (!nombre || !email || !password) {
            return res.status(400).json({ msg: "Todos los campos son obligatorios" });
        }

        const existe = await User.findOne({ email });
        if (existe) {
            return res.status(400).json({ msg: "El usuario ya existe" });
        }

        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);

        const nuevoUsuario = new User({
            nombre,
            email,
            password: passwordHash,
        });

        await nuevoUsuario.save();

        res.json({ msg: "Usuario registrado" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error en el servidor" });
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ msg: "Campos obligatorios" });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ msg: "Usuario no existe" });
        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {
            return res.status(400).json({ msg: "Contraseña incorrecta" });
        }

        const token = jwt.sign({ id: user._id }, "secreto", {
            expiresIn: "1h",
        });

        res.json({
            token,
            user: {
                id: user._id,
                nombre: user.nombre,
                email: user.email
            }
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Error en login" });
    }
});

export default router;