import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

const AgregarVehiculo = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="AGREGAR VEHÍCULO" subtitle="Ingresa la infomación del nuevo vehÍculo" />

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
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                // fullWidth
                variant="filled"
                type="text"
                label="Patente"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.patente}
                name="patente"
                error={!!touched.patente && !!errors.patente}
                helperText={touched.patente && errors.patente}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                // fullWidth
                variant="filled"
                type="text"
                label="Kilometraje"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.kilometraje}
                name="kilometraje"
                error={!!touched.kilometraje && !!errors.kilometraje}
                helperText={touched.kilometraje && errors.kilometraje}
                sx={{ gridColumn: "span 2" }}
                inputProps={{
                  inputMode: 'numeric',
                  pattern: '[0-9]*',
                  inputProps: { min: 0 }
                }}
              />
              <TextField
                // fullWidth
                variant="filled"
                type="text"
                label="Tipo"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.tipo}
                name="tipo"
                error={!!touched.tipo && !!errors.tipo}
                helperText={touched.tipo && errors.tipo}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                // fullWidth
                variant="filled"
                type="text"
                label="Clase"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.clase}
                name="clase"
                error={!!touched.clase && !!errors.clase}
                helperText={touched.clase && errors.clase}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                // fullWidth
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
                // fullWidth
                variant="filled"
                type="text"
                label="Contrato"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contrato}
                name="contrato"
                error={!!touched.contrato && !!errors.contrato}
                helperText={touched.contrato && errors.contrato}
                sx={{ gridColumn: "span 2" }}
              />
            </Box>
            <Box mt="20px"
             sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                variant="contained"
                component="label"
              >
                Subir Foto
                <input
                  type="file"
                  hidden
                />
              </Button>
              <Button type="submit" color="secondary" variant="contained">
                Agregar Vehiculo
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  contact: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
  address1: yup.string().required("required"),
  address2: yup.string().required("required"),
});
const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  contact: "",
  address1: "",
  address2: "",
};

export default AgregarVehiculo;
