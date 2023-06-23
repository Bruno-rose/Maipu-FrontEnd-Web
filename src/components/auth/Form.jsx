import { tokens } from "../../theme";
import { Avatar, Button, CssBaseline, FormControlLabel, Grid, Link, TextField, Typography, Container, ThemeProvider, useTheme, Box, Checkbox } from "@mui/material";
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
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        if (mode === "register") {
          await signUp(values);
        } else if (mode === "login") {
          await signIn(values);
        }
        navigate('/', { replace: true });
      } catch (error) {
        formik.setStatus("Error: Invalid email or password");
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
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete={mode === "register" ? "new-password" : "current-password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="secondary" />}
              label="Permanecer conectado"
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
              <Grid item>
                <Link href={mode === "register" ? "/login" : "/register"} variant="body2">
                  {mode === "register" ? "Tienes una cuenta? Inicia Seción" : "No tienes una cuenta? Registrate"}
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
