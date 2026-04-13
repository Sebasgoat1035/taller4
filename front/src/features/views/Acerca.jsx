import Header from "../layout/components/Header.jsx";
import Footer from "../layout/components/Footer.jsx";
import { Box, Typography, Container, Paper } from "@mui/material";

function Acerca() {
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

      <Container sx={{ flex: 1, py: 6 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h3" color="white" gutterBottom>
            Sobre AhorraYA
          </Typography>
          <Typography color="#aaa">
            Una forma sencilla de organizar tu dinero
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            alignItems: "center",
          }}
        >
          <Paper
            sx={{
              p: 4,
              maxWidth: 700,
              backgroundColor: "#111",
              border: "1px solid #333",
              color: "white",
            }}
          >
            <Typography variant="h5" gutterBottom>
              Qué es AhorraYA
            </Typography>
            <Typography color="#aaa">
              AhorraYA es una aplicación creada para ayudar a las personas a
              organizar sus ingresos, gastos y objetivos de manera sencilla.
            </Typography>
          </Paper>

          <Paper
            sx={{
              p: 4,
              maxWidth: 700,
              backgroundColor: "#111",
              border: "1px solid #333",
              color: "white",
            }}
          >
            <Typography variant="h5" gutterBottom>
              Para qué sirve
            </Typography>
            <Typography color="#aaa">
              Permite llevar un control básico del dinero, visualizar objetivos
              y mejorar la forma en que se administran las finanzas personales.
            </Typography>
          </Paper>

          <Paper
            sx={{
              p: 4,
              maxWidth: 700,
              backgroundColor: "#111",
              border: "1px solid #333",
              color: "white",
            }}
          >
            <Typography variant="h5" gutterBottom>
              Qué puedes hacer
            </Typography>
            <Typography color="#aaa">
              - Registrar gastos <br />
              - Crear objetivos <br />
              - Consultar estadísticas <br />
              - Organizar mejor tu dinero
            </Typography>
          </Paper>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}

export default Acerca;