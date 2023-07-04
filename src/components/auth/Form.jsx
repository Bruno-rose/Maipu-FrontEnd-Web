import { tokens } from "../../theme";
import { Avatar, Button, CssBaseline, Grid, Link, TextField, Typography, Container, ThemeProvider, useTheme, Box } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../../lib/headlessAuth";
import { useNavigate } from 'react-router-dom';

function AuthForm({ mode }) {
  const { signIn, signUp } = useAuth();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    rut: Yup.string().required("RUT es requerido"),
    contrasenna: Yup.string().required("Contraseña es requerida"),
  });

  const formik = useFormik({
    initialValues: {
      rut: "",
      contrasenna: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      try {
        if (mode === "register") {
          await signUp(values);
        } else if (mode === "login") {
          await signIn(values);
        }
        navigate('/', { replace: true });
      } catch (error) {
        formik.setStatus("Error: rut o constraseña invalida");
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CssBaseline />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10%",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: colors.indigo[500] }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {mode === "register" ? "Crea una Cuenta" : "Inicia Sesión"}
          </Typography>
          <Box
            component="form"
            onSubmit={formik.handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="rut"
              label="RUT"
              name="rut"
              autoComplete="rut"
              autoFocus
              value={formik.values.rut}
              onChange={formik.handleChange}
              error={formik.touched.rut && Boolean(formik.errors.rut)}
              helperText={formik.touched.rut && formik.errors.rut}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="contrasenna"
              label="Contraseña"
              type="password"
              id="contrasenna"
              autoComplete={mode === "register" ? "new-password" : "current-password"}
              value={formik.values.contrasenna}
              onChange={formik.handleChange}
              error={formik.touched.contrasenna && Boolean(formik.errors.contrasenna)}
              helperText={formik.touched.contrasenna && formik.errors.contrasenna}
            />
            {formik.status && (
              <Typography variant="body2" color="error" align="center" sx={{ mb: 2 }}>
                {formik.status}
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: colors.indigo[600] }}
            >
              {mode === "register" ? "Sign Up" : "Iniciar Sesión"}
            </Button>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  Olvidaste tu contraseña?
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Typography
          variant="body2"
          color={colors.indigo[400]}
          align="center"
          sx={{ mt: 8, mb: 4 }}
        >
          {"© "}
          <Link color="inherit" href="https://www.municipalidadmaipu.cl/">
            Municipalidad de Maipú
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </ThemeProvider>
  );
}

export default AuthForm;
