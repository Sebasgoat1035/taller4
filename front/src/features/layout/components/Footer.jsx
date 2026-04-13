import { Box, Typography, Link, Stack } from "@mui/material";
import { Facebook, Twitter, Instagram, Email, Phone } from '@mui/icons-material';

function Footer() {
  return (
    <Box
      sx={{
        py: 6,
        px: 4,
        background: "#000",
        borderTop: "1px solid #333",
        color: "white",
      }}
    >
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
          }}
        >
          AhorraYA
        </Typography>
        <Typography variant="body2" color="#aaa">
          Controla tus gastos y alcanza tus metas
        </Typography>
      </Box>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-around"
        alignItems="center"
        spacing={3}
        mb={4}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Contacto
          </Typography>
          <Typography variant="body2" color="#aaa">
            <Email fontSize="small" sx={{ mr: 0.5 }} />
            ahorroya@finanzas.com
          </Typography>
          <Typography variant="body2" color="#aaa">
            <Phone fontSize="small" sx={{ mr: 0.5 }} />
            +57 300 123 4567
          </Typography>
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Síguenos
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" mt={1}>
            <Link href="#" color="inherit"><Facebook /></Link>
            <Link href="#" color="inherit"><Twitter /></Link>
            <Link href="#" color="inherit"><Instagram /></Link>
          </Stack>
        </Box>

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="subtitle1" fontWeight="bold">
            Dirección
          </Typography>
          <Typography variant="body2" color="#aaa">
            Medellín, Colombia
          </Typography>
        </Box>
      </Stack>

      <Typography variant="caption" color="#777" display="block" textAlign="center">
        © {new Date().getFullYear()} AhorraYA. Todos los derechos reservados.
      </Typography>
    </Box>
  );
}

export default Footer;