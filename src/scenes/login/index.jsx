import * as React from "react";
import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { login } from "../../services/api_calls";
import { useNavigate } from "react-router-dom";
import Copyright from "../global/Copyright";

const theme = createTheme();

export default function LogIn() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onChangeUsername = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const mylogin = () => {
    navigate("/");
    navigate(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password)
      .then((response) => {
        console.log(response);
        mylogin();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{ height: "100vh", backgroundColor: "#10174b" }}
      >
        <CssBaseline />

        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://media.municipalidadmaipu.cl/media/imagenes/2021/11/logo-maipu-rrss.png)",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#10174b",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "#ffffff",
            }}
          >
            <Typography component="h1" variant="h5" >
              Dirección de Administración y Finanzas
            </Typography>
            <Typography component="h1" variant="h4" mt={4}>
              Departamento de Movilización
            </Typography>
            <Typography component="h3" variant="h2" mt={2}>
              Sistema de Gestión Vehicular
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={8} md={5} component={Paper} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Iniciar Sesión
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                onChange={onChangeUsername}
                value={username}
                margin="normal"
                required
                fullWidth
                id="rut"
                label="RUT"
                autoComplete="rut"
                autoFocus
              />
              <TextField
                onChange={onChangePassword}
                value={password}
                margin="normal"
                required
                fullWidth
                label="Contraseña"
                type="password"
                id="contrasenna"
                autoComplete="current-contrasenna"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Entrar
              </Button>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
