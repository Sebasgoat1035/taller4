import { useState } from "react";
import {
  Box, Typography, TextField, Button, Container, Paper, Link
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Header from "../../layout/components/Header.jsx";
import Footer from "../../layout/components/Footer.jsx";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const API = "http://127.0.0.1:3000/api/auth";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Completa todos los campos");
      return;
    }

    try {
      const res = await axios.post(`${API}/login`, {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Bienvenido ");

      navigate("/gastos");

    } catch (error) {
      console.log(error);
      alert(error.response?.data?.msg || "Error login");
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

          <Typography variant="h4" color="white" textAlign="center">
            Iniciar sesión
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 3 }}>

            <TextField
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
              sx={{ input: { color: "white" }, label: { color: "#aaa" } }}
            />

            <TextField
              label="Contraseña"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
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
              Entrar
            </Button>

            <Link
              onClick={() => navigate("/register")}
              sx={{ textAlign: "center", cursor: "pointer", color: "#aaa" }}
            >
              Crear cuenta
            </Link>

          </Box>
        </Paper>
      </Container>

      <Footer />
    </Box>
  );
}

export default Login;