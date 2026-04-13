import Header from "../layout/components/Header.jsx";
import Footer from "../layout/components/Footer.jsx";
import { Box, Typography, Container, Button, TextField } from "@mui/material";
import { useState } from "react";

function Metas() {
  const [objetivo, setObjetivo] = useState("");
  const [lista, setLista] = useState([]);

  const agregarObjetivo = () => {
    if (objetivo.trim() === "") return;
    setLista([...lista, objetivo]);
    setObjetivo("");
  };

  const eliminarObjetivo = (index) => {
    const nuevaLista = lista.filter((_, i) => i !== index);
    setLista(nuevaLista);
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#0f0f0f" }}>
      <Header />

      <Container sx={{ flex: 1, py: 6, textAlign: "center" }}>
        <Typography variant="h3" color="white" gutterBottom>
          Tus Objetivos
        </Typography>

        <Typography color="#aaa" mb={4}>
          Agrega y organiza lo que quieres lograr
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 4 }}>
          <TextField
            value={objetivo}
            onChange={(e) => setObjetivo(e.target.value)}
            placeholder="Escribe un objetivo"
            variant="outlined"
            sx={{
              input: { color: "white" },
              width: 300,
              "& .MuiOutlinedInput-root": {
                "& fieldset": { borderColor: "#555" },
                "&:hover fieldset": { borderColor: "#888" },
              },
            }}
          />

          <Button
            variant="contained"
            onClick={agregarObjetivo}
            sx={{
              backgroundColor: "white",
              color: "black",
              textTransform: "none",
            }}
          >
            Agregar
          </Button>
        </Box>

        <Box sx={{ maxWidth: 500, mx: "auto", display: "flex", flexDirection: "column", gap: 2 }}>
          {lista.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                border: "1px solid #333",
                p: 2,
                color: "white",
              }}
            >
              <Typography>{item}</Typography>

              <Button
                onClick={() => eliminarObjetivo(index)}
                sx={{
                  color: "red",
                  textTransform: "none",
                }}
              >
                Eliminar
              </Button>
            </Box>
          ))}
        </Box>

      </Container>

      <Footer />
    </Box>
  );
}

export default Metas;