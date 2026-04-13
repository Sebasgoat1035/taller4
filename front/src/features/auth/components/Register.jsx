import { Box, Typography, TextField, Button, Container, Paper } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Header from "../../layout/components/Header.jsx";
import Footer from "../../layout/components/Footer.jsx";

function Register() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        nombre: "",
        email: "",
        password: "",
    });

    const API = "https://taller4-793d.onrender.com/api/auth";

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!form.nombre || !form.email || !form.password) {
            alert("Completa todos los campos");
            return;
        }

        try {
            await axios.post(`${API}/register`, form);

            alert("Registrado correctamente");

            navigate("/login");

        } catch (error) {
            console.log(error);
            alert(error.response?.data?.msg || "Error");
        }
    };

    return (
        <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#0f0f0f" }}>
            <Header />

            <Container sx={{ flex: 1, py: 8 }}>
                <Paper
                    sx={{
                        maxWidth: 400,
                        mx: "auto",
                        p: 5,
                        backgroundColor: "#111",
                        border: "1px solid #333",
                    }}
                >

                    <Typography variant="h4" textAlign="center" color="white">
                        Crear cuenta
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 3 }}>

                        <TextField
                            name="nombre"
                            label="Nombre"
                            onChange={handleChange}
                            fullWidth
                            sx={{ input: { color: "white" }, label: { color: "#aaa" } }}
                        />

                        <TextField
                            name="email"
                            label="Email"
                            onChange={handleChange}
                            fullWidth
                            sx={{ input: { color: "white" }, label: { color: "#aaa" } }}
                        />

                        <TextField
                            name="password"
                            label="Contraseña"
                            type="password"
                            onChange={handleChange}
                            fullWidth
                            sx={{ input: { color: "white" }, label: { color: "#aaa" } }}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                backgroundColor: "white",
                                color: "black",
                                textTransform: "none",
                            }}
                        >
                            Registrarse
                        </Button>

                        <Button
                            onClick={() => navigate("/login")}
                            sx={{
                                color: "#aaa",
                                textTransform: "none",
                            }}
                        >
                            Volver
                        </Button>

                    </Box>
                </Paper>
            </Container>

            <Footer />
        </Box>
    );
}

export default Register;