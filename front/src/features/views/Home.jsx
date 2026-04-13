import Header from "../layout/components/Header.jsx";
import Footer from "../layout/components/Footer.jsx";
import { Container, Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0f0f0f",
      }}
    >
      <Header />

      <Box sx={{ flex: 1, py: 6 }}>
        <Container>

          <Box sx={{ textAlign: "center", mb: 8 }}>
            <Typography variant="h3" fontWeight="bold" color="white" gutterBottom>
              Ten manejo total de tu dinero
            </Typography>

            <Typography color="#aaa" mb={3}>
              AhorraYA te permite organizar tus finanzas de forma clara y sencilla
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
              <img
                src="https://images.pexels.com/photos/5364945/pexels-photo-5364945.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="finanzas"
                style={{
                  width: "450px",
                  height: "auto",
                  borderRadius: "8px",
                  border: "1px solid #000000a6",
                }}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
              <Button
                variant="contained"
                onClick={() => navigate("/login")}
                sx={{
                  backgroundColor: "white",
                  color: "black",
                  textTransform: "none",
                }}
              >
                Empezar ahora
              </Button>

              <Button
                variant="outlined"
                onClick={() => window.open("https://github.com/Sebasgoat1035/taller4", "_blank")}
                sx={{
                  color: "white",
                  borderColor: "white",
                  textTransform: "none",
                }}
              >
                Ver repositorio
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 5,
              maxWidth: 800,
              margin: "auto",
            }}
          >

            <Box>

            </Box>

            <Box
              onClick={() => navigate("/metas")}
              sx={{
                p: 3,
                border: "1px solid #333",
                cursor: "pointer",
              }}
            >
              <Typography variant="h5" color="white">
                Objetivos de ahorro
              </Typography>
              <Typography color="#aaa">
                Define cuánto quieres ahorrar y sigue tu progreso.
              </Typography>
            </Box>

            <Box
              onClick={() => navigate("/estadisticas")}
              sx={{
                p: 3,
                border: "1px solid #333",
                cursor: "pointer",
              }}
            >
              <Typography variant="h5" color="white">
                Estadísticas claras
              </Typography>
              <Typography color="#aaa">
                Visualiza tu información para tomar mejores decisiones.
              </Typography>
            </Box>

          </Box>

          <Box sx={{ mt: 10, textAlign: "center" }}>
            <Typography color="#777">
              Organiza hoy tu dinero y mejora tu futuro.
            </Typography>
          </Box>

        </Container>
      </Box>

      <Footer />
    </Box>
  );
}

export default Home;