import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "@fontsource/rubik";
import Form from "../../components/auth/Form";
import useMediaQuery from "@mui/material/useMediaQuery";

const theme = createTheme();

export default function LogIn() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        component="main"
        sx={{ height: "100vh", backgroundColor: "#10174b" }}
      >
        <CssBaseline />

        {isNonMobile&&(<Grid item xs={0} sm={4} md={7}>
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
            <Typography component="h1" fontFamily="rubik" variant="h5">
              Dirección de Administración y Finanzas
            </Typography>
            <Typography component="h1" fontFamily="rubik" variant="h4" mt={4}>
              Departamento de Movilización
            </Typography>
            <Typography component="h3" fontFamily="rubik" variant="h2" mt={2} mb={2}>
              Sistema de Gestión Vehicular
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              backgroundColor: "#10174b",
            }}
          >
            <img
              src="https://media.municipalidadmaipu.cl/media/imagenes/2021/11/logo-maipu-rrss.png"
              alt="logo"
            />
          </Box>
        </Grid>)}

        <Grid item xs={12} sm={8} md={5} component={Paper} square>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Form mode="login" />
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
