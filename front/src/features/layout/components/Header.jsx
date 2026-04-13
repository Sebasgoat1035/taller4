import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const menuItems = [
    { text: "Inicio", path: "/" },
    { text: "Objetivos", path: "/metas" },
    { text: "Estadísticas", path: "/estadisticas" },
    { text: "Nosotros", path: "/acerca" },
    { text: "Gastos", path: "/gastos" },
    { text: "API", path: "/ApiRyC" },
  ];

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "#000" }}>
        <Toolbar
          sx={{
            flexDirection: "column",
            alignItems: "center",
            py: 2,
          }}
        >
          <Typography
            variant="h4"
            onClick={() => navigate("/")}
            sx={{
              fontWeight: "bold",
              cursor: "pointer",
              color: "#fff",
              mb: 1,
            }}
          >
            AhorraYA
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 3,
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.text}
                onClick={() => navigate(item.path)}
                sx={{
                  color: "#fff",
                  textTransform: "none",
                }}
              >
                {item.text}
              </Button>
            ))}

            <Button
              variant="contained"
              onClick={() => navigate("/login")}
              sx={{
                backgroundColor: "#fff",
                color: "#000",
                textTransform: "none",
              }}
            >
              Iniciar sesión
            </Button>
          </Box>

          <IconButton
            onClick={() => setOpen(true)}
            sx={{
              position: "absolute",
              right: 20,
              top: 20,
              color: "white",
              display: { xs: "block", md: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem disablePadding key={item.text}>
                <ListItemButton
                  onClick={() => {
                    navigate(item.path);
                    setOpen(false);
                  }}
                >
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}

            <ListItem disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate("/login");
                  setOpen(false);
                }}
              >
                <ListItemText primary="Iniciar sesión" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default Header;