import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import axios from "axios";
import { getLongitudeLatitude } from "../../services/user_calls";
import { postTareas } from "../../services/api_calls";
import { comuna_options } from "../../data/valueMapping";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

const AgregarTarea = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const handleFormSubmit = async (values) => {
    try {
      [values.partida_latitud, values.partida_longitud] =
        await getLongitudeLatitude(
          values.nombre_direccion_partida,
          values.numero_direccion_partida,
          values.comuna_partida
        );

      [values.destino_latitud, values.destino_longitud] =
        await getLongitudeLatitude(
          values.nombre_direccion_destino,
          values.numero_direccion_destino,
          values.comuna_destino
        );
    } catch (error) {
      console.log(error);
    }

    try {
      values.partida_kilometraje = -1; // To remove eventually
      console.log(values);
      const response = postTareas(values);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    navigate("/tareas");
  };

  return (
    <Box m="20px">
      <Header title="AGREGAR TAREA" subtitle="Crea una nueva tarea" />
      <Box mt="40px" sx={{ display: "flex", justifyContent: "center" }}>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(12, minmax(0, 1fr))"
                sx={{
                  minWidth: "500px",
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Título"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.nombre}
                  name="nombre"
                  error={!!touched.nombre && !!errors.nombre}
                  helperText={touched.nombre && errors.nombre}
                  sx={{ gridColumn: "span 8" }}
                />

                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Patente"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.patente}
                  name="patente"
                  error={!!touched.patente && !!errors.patente}
                  helperText={touched.patente && errors.patente}
                  sx={{ gridColumn: "span 4" }}
                />
                <Typography
                  variant="h5"
                  color={colors.greenAccent[400]}
                  sx={{ gridColumn: "span 12" }}
                >
                  Solicitante
                </Typography>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Nombre"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.solicitante}
                  name="solicitante"
                  error={!!touched.solicitante && !!errors.solicitante}
                  helperText={touched.solicitante && errors.solicitante}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="phone"
                  label="Número de contacto"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.numero_contacto}
                  name="numero_contacto"
                  error={!!touched.numero_contacto && !!errors.numero_contacto}
                  helperText={touched.numero_contacto && errors.numero_contacto}
                  sx={{ gridColumn: "span 4" }}
                />
                <Typography
                  variant="h5"
                  color={colors.greenAccent[400]}
                  sx={{ gridColumn: "span 12" }}
                >
                  Origen
                </Typography>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Calle"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.nombre_direccion_partida}
                  name="nombre_direccion_partida"
                  error={
                    !!touched.nombre_direccion_partida &&
                    !!errors.nombre_direccion_partida
                  }
                  helperText={
                    touched.nombre_direccion_partida &&
                    errors.nombre_direccion_partida
                  }
                  sx={{ gridColumn: "span 5" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Número"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.numero_direccion_partida}
                  name="numero_direccion_partida"
                  error={
                    !!touched.numero_direccion_partida &&
                    !!errors.numero_direccion_partida
                  }
                  helperText={
                    touched.numero_direccion_partida &&
                    errors.numero_direccion_partida
                  }
                  sx={{ gridColumn: "span 3" }}
                />
                <TextField
                  fullWidth
                  select
                  variant="filled"
                  label="Comuna"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.comuna_partida}
                  name="comuna_partida"
                  error={!!touched.comuna_partida && !!errors.comuna_partida}
                  helperText={touched.comuna_partida && errors.comuna_partida}
                  sx={{ gridColumn: "span 4" }}
                >
                  {comuna_options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <Typography
                  variant="h5"
                  color={colors.greenAccent[400]}
                  sx={{ gridColumn: "span 12" }}
                >
                  Destino
                </Typography>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Calle"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.nombre_direccion_destino}
                  name="nombre_direccion_destino"
                  error={
                    !!touched.nombre_direccion_destino &&
                    !!errors.nombre_direccion_destino
                  }
                  helperText={
                    touched.nombre_direccion_destino &&
                    errors.nombre_direccion_destino
                  }
                  sx={{ gridColumn: "span 5" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Número"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.numero_direccion_destino}
                  name="numero_direccion_destino"
                  error={
                    !!touched.numero_direccion_destino &&
                    !!errors.numero_direccion_destino
                  }
                  helperText={
                    touched.numero_direccion_destino &&
                    errors.numero_direccion_destino
                  }
                  sx={{ gridColumn: "span 3" }}
                />

                <TextField
                  fullWidth
                  select
                  variant="filled"
                  label="Comuna"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.comuna_destino}
                  name="comuna_destino"
                  error={!!touched.comuna_destino && !!errors.comuna_destino}
                  helperText={touched.comuna_destino && errors.comuna_destino}
                  sx={{ gridColumn: "span 4" }}
                >
                  {comuna_options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  fullWidth
                  variant="filled"
                  type="datetime-local"
                  label="Fecha y Hora de inicio"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.inicio}
                  name="inicio"
                  error={!!touched.inicio && !!errors.inicio}
                  helperText={touched.inicio && errors.inicio}
                  sx={{ gridColumn: "span 4" }}
                  InputLabelProps={{ shrink: true }}
                />
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  variant="filled"
                  type="text"
                  label="Descripción"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.descripcion}
                  name="descripcion"
                  error={!!touched.descripcion && !!errors.descripcion}
                  helperText={touched.descripcion && errors.descripcion}
                  sx={{ gridColumn: "span 12" }}
                />
              </Box>

              <Box
                mt="20px"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Button type="submit" color="secondary" variant="contained">
                  Crear nueva tarea
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  nombre: yup.string().required("Campo requerido"),
  patente: yup.string().required("Campo requerido"),
  solicitante: yup.string().required("Campo requerido"),
  // apellido_solicitante: yup.string().required("Campo requerido"),
  numero_contacto: yup
    .string()
    .matches(phoneRegExp, "Número de teléfono inválido"),
  inicio: yup.date().required("Campo requerido"),
  nombre_direccion_partida: yup.string().required("Campo requerido"),
  numero_direccion_partida: yup.string().required("Campo requerido"),
  comuna_partida: yup.number().required("Campo requerido"),
  nombre_direccion_destino: yup.string().required("Campo requerido"),
  numero_direccion_destino: yup.string().required("Campo requerido"),
  comuna_destino: yup.number().required("Campo requerido"),
  descripcion: yup.string().required("Campo requerido"),
});
const initialValues = {
  nombre: "",
  patente: "",
  solicitante: "",
  // apellido_solicitante: "",
  numero_contacto: "",
  inicio: "",
  nombre_direccion_partida: "",
  numero_direccion_partida: "",
  comuna_partida: "",
  nombre_direccion_destino: "",
  numero_direccion_destino: "",
  comuna_destino: "",
  descripcion: "",
};

export default AgregarTarea;
