import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const AgregarConductor = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header
        title="AGREGAR CONDUCTOR"
        subtitle="Crea la ficha de un conductor"
      />
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
                  label="Nombre"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.nombre}
                  name="nombre"
                  error={!!touched.nombre && !!errors.nombre}
                  helperText={touched.nombre && errors.nombre}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Apellido"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.apellido}
                  name="apellido"
                  error={!!touched.apellido && !!errors.apellido}
                  helperText={touched.apellido && errors.apellido}
                  sx={{ gridColumn: "span 2" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  name="email"
                  error={!!touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Número de contacto"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.numero}
                  name="numero"
                  error={!!touched.numero && !!errors.numero}
                  helperText={touched.numero && errors.numero}
                  sx={{ gridColumn: "span 4" }}
                />
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="RUT"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.rut}
                  name="rut"
                  error={!!touched.rut && !!errors.rut}
                  helperText={touched.rut && errors.rut}
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
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                  }}
                >
                  <Button
                    sx={{ marginRight: "4px" }}
                    variant="contained"
                    component="label"
                  >
                    Subir Foto
                    <input type="file" hidden />
                  </Button>
                  <Button variant="contained" component="label">
                    Subir Licencia
                    <input type="file" hidden />
                  </Button>
                </Box>
                <Button type="submit" color="secondary" variant="contained">
                  Crear nuevo conductor
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
  nombre: yup.string().required("required"),
  apellido: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  numero: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  rut: yup.string().required("required"),
});
const initialValues = {
  nombre: "",
  apellido: "",
  email: "",
  numero: "",
  rut: "",
};

export default AgregarConductor;
