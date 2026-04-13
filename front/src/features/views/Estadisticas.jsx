import Header from "../layout/components/Header.jsx";
import Footer from "../layout/components/Footer.jsx";
import {
  Box,
  Typography,
  Container,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@mui/material";

function Estadisticas() {
  const datos = [
    {
      estrategia: "Reducir gastos en comida rápida",
      descripcion: "Cocinar en casa reduce gastos innecesarios",
      ahorro: "20%",
    },
    {
      estrategia: "Usar transporte público",
      descripcion: "Evita gastos altos en gasolina o taxis",
      ahorro: "15%",
    },
    {
      estrategia: "Evitar compras impulsivas",
      descripcion: "Planifica antes de comprar",
      ahorro: "25%",
    },
    {
      estrategia: "Ahorrar una parte fija del ingreso",
      descripcion: "Guardar dinero cada mes",
      ahorro: "30%",
    },
  ];

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
        <Typography variant="h3" color="white" textAlign="center" gutterBottom>
          Cómo ahorrar mejor
        </Typography>

        <Typography color="#aaa" textAlign="center" mb={5}>
          Estrategias basadas en hábitos comunes de ahorro
        </Typography>

        <Box sx={{ maxWidth: 800, margin: "auto", border: "1px solid #333" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: "white" }}>Estrategia</TableCell>
                <TableCell sx={{ color: "white" }}>Descripción</TableCell>
                <TableCell sx={{ color: "white" }}>Ahorro estimado</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {datos.map((item, index) => (
                <TableRow key={index}>
                  <TableCell sx={{ color: "#ccc" }}>
                    {item.estrategia}
                  </TableCell>
                  <TableCell sx={{ color: "#aaa" }}>
                    {item.descripcion}
                  </TableCell>
                  <TableCell sx={{ color: "#fff" }}>
                    {item.ahorro}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
}

export default Estadisticas;