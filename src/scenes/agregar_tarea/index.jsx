import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const AgregarTarea = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
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
                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                sx={{
                  minWidth: "500px",
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Patente"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.patennte}
                  name="patente"
                  error={!!touched.patennte && !!errors.patennte}
                  helperText={touched.patennte && errors.patennte}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Conductor"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.conductor}
                  name="conductor"
                  error={!!touched.conductor && !!errors.conductor}
                  helperText={touched.conductor && errors.conductor}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Hora de inicio"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.hora_inicio}
                  name="hora_inicio"
                  error={!!touched.hora_inicio && !!errors.hora_inicio}
                  helperText={touched.hora_inicio && errors.hora_inicio}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Fecha"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.fecha}
                  name="fecha"
                  error={!!touched.fecha && !!errors.fecha}
                  helperText={touched.fecha && errors.fecha}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Origen"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.origen}
                  name="origen"
                  error={!!touched.origen && !!errors.origen}
                  helperText={touched.origen && errors.origen}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Destino"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.destino}
                  name="destino"
                  error={!!touched.destino && !!errors.destino}
                  helperText={touched.destino && errors.destino}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Descripción"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.descripcion}
                  name="descripcion"
                  error={!!touched.descripcion && !!errors.descripcion}
                  helperText={touched.descripcion && errors.descripcion}
                  sx={{ gridColumn: "span 4" }}
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
  patente: yup.string().required("required"),
  conductor: yup.string().required("required"),
  fecha: yup.string().required("required"),
  numero: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  rut: yup.string().required("required"),
});
const initialValues = {
  patente: "",
  conductor: "",
  fecha: "",
  numero: "",
  rut: "",
};

export default AgregarTarea;
