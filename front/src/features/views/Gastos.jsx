import Header from "../layout/components/Header.jsx";
import Footer from "../layout/components/Footer.jsx";

import {
  Box,
  Typography,
  Container,
  TextField,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  MenuItem
} from "@mui/material";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Gastos() {
  const [tipo, setTipo] = useState("ingreso");
  const [cantidad, setCantidad] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [historial, setHistorial] = useState([]);

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    }
  },);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!cantidad || !descripcion) return;

    const nuevo = {
      tipo,
      cantidad: Number(cantidad),
      descripcion,
      fecha: new Date().toLocaleDateString(),
    };

    setHistorial([nuevo, ...historial]);
    setCantidad("");
    setDescripcion("");
  };

  const eliminar = (index) => {
    const nuevo = historial.filter((_, i) => i !== index);
    setHistorial(nuevo);
  };

  const totalIngresos = historial
    .filter((i) => i.tipo === "ingreso")
    .reduce((a, b) => a + b.cantidad, 0);

  const totalGastos = historial
    .filter((i) => i.tipo === "gasto")
    .reduce((a, b) => a + b.cantidad, 0);

  const balance = totalIngresos - totalGastos;

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#0f0f0f" }}>
      <Header />

      <Container sx={{ flex: 1, py: 6 }}>

        <Typography variant="h3" color="white" textAlign="center" mb={5}>
          Control de dinero
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 3 }}>
          <Button onClick={logout} variant="contained" color="error">
            Cerrar sesión
          </Button>
        </Box>

        <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap", mb: 5 }}>
          <Paper sx={{ flex: 1, p: 3, backgroundColor: "#111", border: "1px solid #333", color: "white" }}>
            <Typography color="#aaa">Ingresos</Typography>
            <Typography variant="h5">${totalIngresos}</Typography>
          </Paper>

          <Paper sx={{ flex: 1, p: 3, backgroundColor: "#111", border: "1px solid #333", color: "white" }}>
            <Typography color="#aaa">Gastos</Typography>
            <Typography variant="h5">${totalGastos}</Typography>
          </Paper>

          <Paper sx={{ flex: 1, p: 3, backgroundColor: "#111", border: "1px solid #333", color: "white" }}>
            <Typography color="#aaa">Balance</Typography>
            <Typography variant="h5">${balance}</Typography>
          </Paper>
        </Box>

        <Box sx={{ maxWidth: 500, margin: "auto", mb: 6 }}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 3,
              p: 4,
              backgroundColor: "#111",
              border: "1px solid #333",
            }}
          >
            <TextField
              select
              label="Tipo"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
              fullWidth
              sx={{ input: { color: "white" }, label: { color: "#aaa" } }}
            >
              <MenuItem value="ingreso">Ingreso</MenuItem>
              <MenuItem value="gasto">Gasto</MenuItem>
            </TextField>

            <TextField
              label="Cantidad"
              type="number"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              fullWidth
              sx={{ input: { color: "white" }, label: { color: "#aaa" } }}
            />

            <TextField
              label="Descripción"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
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
              Agregar
            </Button>
          </Box>
        </Box>

        <TableContainer component={Paper} sx={{ backgroundColor: "#111", border: "1px solid #333" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "white" }}>Tipo</TableCell>
                <TableCell sx={{ color: "white" }}>Cantidad</TableCell>
                <TableCell sx={{ color: "white" }}>Descripción</TableCell>
                <TableCell sx={{ color: "#aaa" }}>Fecha</TableCell>
                <TableCell sx={{ color: "white" }}>Acción</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {historial.map((item, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ color: "white" }}>{item.tipo}</TableCell>
                  <TableCell sx={{ color: "white" }}>${item.cantidad}</TableCell>
                  <TableCell sx={{ color: "white" }}>{item.descripcion}</TableCell>
                  <TableCell sx={{ color: "#aaa" }}>{item.fecha}</TableCell>
                  <TableCell>
                    <Button
                      onClick={() => eliminar(index)}
                      sx={{
                        backgroundColor: "white",
                        color: "black",
                        textTransform: "none",
                      }}
                    >
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

      </Container>

      <Footer />
    </Box>
  );
}

export default Gastos;