import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import axios from "axios";
import { getLongitudeLatitude } from "../../service/user_calls";

const AgregarTarea = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleFormSubmit = async (values) => {
    try {
      [values.partida_latitud, values.partida_longitud] =
        await getLongitudeLatitude(
          values.calle_origen,
          values.numero_origen,
          values.comuna_origen
        );

      [values.destino_latitud, values.destino_longitud] =
        await getLongitudeLatitude(
          values.calle_destino,
          values.numero_destino,
          values.comuna_destino
        );
    } catch (error) {
      console.log(error);
    }

    try {
      console.log(values);
      const response = await axios.post(
        "https://7995-200-89-69-135.ngrok-free.app/vehiculo",
        values
      ); // modificar el endpoint
      console.log(response);
    } catch (error) {
      console.log(error);
    }
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
                  // "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Título"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.titulo}
                  name="titulo"
                  error={!!touched.titulo && !!errors.titulo}
                  helperText={touched.titulo && errors.titulo}
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
                  value={values.nombre_solicitante}
                  name="nombre_solicitante"
                  error={
                    !!touched.nombre_solicitante && !!errors.nombre_solicitante
                  }
                  helperText={
                    touched.nombre_solicitante && errors.nombre_solicitante
                  }
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Apellido"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.apellido_solicitante}
                  name="apellido_solicitante"
                  error={
                    !!touched.apellido_solicitante &&
                    !!errors.apellido_solicitante
                  }
                  helperText={
                    touched.apellido_solicitante && errors.apellido_solicitante
                  }
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
                  value={values.calle_origen}
                  name="calle_origen"
                  error={!!touched.calle_origen && !!errors.calle_origen}
                  helperText={touched.calle_origen && errors.calle_origen}
                  sx={{ gridColumn: "span 5" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Número"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.numero_origen}
                  name="numero_origen"
                  error={!!touched.numero_origen && !!errors.numero_origen}
                  helperText={touched.numero_origen && errors.numero_origen}
                  sx={{ gridColumn: "span 3" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Comuna"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.comuna_origen}
                  name="comuna_origen"
                  error={!!touched.comuna_origen && !!errors.comuna_origen}
                  helperText={touched.comuna_origen && errors.comuna_origen}
                  sx={{ gridColumn: "span 4" }}
                />
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
                  value={values.calle_destino}
                  name="calle_destino"
                  error={!!touched.calle_destino && !!errors.calle_destino}
                  helperText={touched.calle_destino && errors.calle_destino}
                  sx={{ gridColumn: "span 5" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Número"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.numero_destino}
                  name="numero_destino"
                  error={!!touched.numero_destino && !!errors.numero_destino}
                  helperText={touched.numero_destino && errors.numero_destino}
                  sx={{ gridColumn: "span 3" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Comuna"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.comuna_destino}
                  name="comuna_destino"
                  error={!!touched.comuna_destino && !!errors.comuna_destino}
                  helperText={touched.comuna_destino && errors.comuna_destino}
                  sx={{ gridColumn: "span 4" }}
                />
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
  titulo: yup.string().required("Campo requerido"),
  patente: yup.string().required("Campo requerido"),
  nombre_solicitante: yup.string().required("Campo requerido"),
  apellido_solicitante: yup.string().required("Campo requerido"),
  numero_contacto: yup
    .string()
    .matches(phoneRegExp, "Número de teléfono no válido"),
  inicio: yup.date().required("Campo requerido"),
  calle_origen: yup.string().required("Campo requerido"),
  numero_origen: yup.string().required("Campo requerido"),
  comuna_origen: yup.string().required("Campo requerido"),
  calle_destino: yup.string().required("Campo requerido"),
  numero_destino: yup.string().required("Campo requerido"),
  comuna_destino: yup.string().required("Campo requerido"),
  descripcion: yup.string().required("Campo requerido"),
});
const initialValues = {
  titulo: "",
  patente: "",
  nombre_solicitante: "",
  apellido_solicitante: "",
  numero_contacto: "",
  inicio: "",
  calle_origen: "",
  numero_origen: "",
  comuna_origen: "",
  calle_destino: "",
  numero_destino: "",
  comuna_destino: "",
  descripcion: "",
};

export default AgregarTarea;
