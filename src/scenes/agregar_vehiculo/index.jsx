import { Box, Button, TextField } from "@mui/material";
import { Formik, form } from "formik";
import * as yup from "yup";
import axios from "axios";

import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import MenuItem from "@mui/material/MenuItem";
import Autocomplete from "@mui/material/Autocomplete";

const vehicle_type = [
  {
    value: 1,
    label: "Tipo 1",
  },
  {
    value: 2,
    label: "Tipo 2",
  },
  {
    value: 3,
    label: "Tipo 3",
  },
  {
    value: 4,
    label: "Tipo 4",
  },
];

const vehicle_class = [
  {
    value: 1,
    label: "Clase 1",
  },
  {
    value: 2,
    label: "Clase 2",
  },
  {
    value: 3,
    label: "Clase 3",
  },
  {
    value: 4,
    label: "Clase 4",
  },
];

const contract = [
  {
    value: 1,
    label: "Leasing",
  },
  {
    value: 2,
    label: "Vecino",
  },
  {
    value: 3,
    label: "Municipal",
  },
];

const conductores = [
  { label: "Ana Perez", id: 1 },
  { label: "Juan Ramirez", id: 2 },
  { label: "Maria Rodriguez", id: 3 },
  { label: "Pedro Hernandez", id: 4 },
  { label: "Laura Gomez", id: 5 },
  { label: "Jorge Martinez", id: 6 },
  { label: "Lucia Castro", id: 7 },
  { label: "Alejandro Flores", id: 8 },
  { label: "Carolina Salas", id: 9 },
  { label: "Fernando Cruz", id: 10 },
  { label: "Natalia Vega", id: 11 },
  { label: "Roberto Torres", id: 12 },
  { label: "Lorena Chavez", id: 13 },
  { label: "Ricardo Ortiz", id: 14 },
  { label: "Gabriela Soto", id: 15 },
  { label: "Daniel Garcia", id: 16 },
  { label: "Carmen Aguilar", id: 17 },
  { label: "Omar Mendoza", id: 18 },
  { label: "Martha Castro", id: 19 },
  { label: "Emilio Gonzalez", id: 20 },
];

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

// const checkoutSchema = yup.object().shape({
//   firstName: yup.string().required("required"),
//   lastName: yup.string().required("required"),
//   email: yup.string().email("invalid email").required("required"),
//   contact: yup
//     .string()
//     .matches(phoneRegExp, "Phone number is not valid")
//     .required("required"),
//   address1: yup.string().required("required"),
//   address2: yup.string().required("required"),
// });

const checkoutSchema = yup.object().shape({
  patente: yup.string().required("Patente is required"),
  kilometraje: yup
    .number()
    .required("Kilometraje is required")
    .positive("Kilometraje must be positive"),
  tipo: yup.string().required("Tipo is required"),
  clase: yup.string().required("Clase is required"),
  conductor: yup.string().required("Conductor is required"),
  contrato: yup.string().required("Contrato is required"),
});

const initialValues = {
  patente: "",
  kilometraje: "",
  tipo: "",
  clase: "",
  conductor: "",
  contrato: "",
};

const AgregarVehiculo = () => {
  const isNonMobile = useMediaQuery("(min-width:6px)");

  const handleSubmit = async (values) => {
    console.log(values);
    console.log("HOLAAAAAA!");
    try {
      const response = await axios.post(
        "https://example.com/api/users",
        values
      ); // modificar el endpoint
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDriverChange = (event, newValue) => {
    initialValues.conductor = newValue;
  };

  return (
    <Box m="20px">
      <Header
        title="AGREGAR VEHÍCULO"
        subtitle="Ingresa la infomación del nuevo vehÍculo"
      />

      <Formik
        onSubmit={handleSubmit}
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
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                maxWidth: "600px",
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
                sx={{ gridColumn: "span 4" }}
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
                sx={{ gridColumn: "span 4" }}
                inputprops={{
                  inputMode: "numeric",
                  pattern: "[0-9]*",
                  inputprops: { min: 0 },
                }}
              />
              <TextField
                // fullWidth
                variant="filled"
                select
                type="select"
                label="Tipo"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.tipo}
                name="tipo"
                error={!!touched.tipo && !!errors.tipo}
                helperText={touched.tipo && errors.tipo}
                sx={{ gridColumn: "span 4" }}
              >
                {vehicle_type.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                // fullWidth
                variant="filled"
                type="text"
                select
                label="Clase"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.clase}
                name="clase"
                error={!!touched.clase && !!errors.clase}
                helperText={touched.clase && errors.clase}
                sx={{ gridColumn: "span 4" }}
              >
                {vehicle_class.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              

              {/* <Autocomplete
                id="autocomplete"
                options={conductores}
                // freeSolo 

                getOptionLabel={(option) => option.label}
                value={values.conductor}
                onChange={handleChange}


                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    label="Conductor"
                    variant="filled"
                    type="text"
                    // onBlur={handleBlur}
                    name="conductor"
                    value={values.conductor}
                    error={!!touched.conductor && !!errors.conductor}
                    helperText={touched.conductor && errors.conductor}
                  />
                )}
              /> */}

              <TextField
                // fullWidth
                variant="filled"
                select
                type="text"
                label="Contrato"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.contrato}
                name="contrato"
                error={!!touched.contrato && !!errors.contrato}
                helperText={touched.contrato && errors.contrato}
                sx={{ gridColumn: "span 4" }}
              >
                {contract.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <Autocomplete
                id="conductor"
                name="conductor"

                sx={{ gridColumn: "span 4" }}
                options={conductores}
                getOptionLabel={(option) => option.label || ""}
                onChange={(e, value) => {
                  console.log(value);
                  setFieldValue(
                    "conductor",
                    value !== null ? value.label : initialValues.conductor
                  );
                }}
                renderInput={(params) => (
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Conductor"
                    variant="filled"
                    type="text"
                    name="conductor"
                    {...params}
                  />
                )}
              />
            </Box>
            <Box
              mt="40px"
              sx={{ display: "flex", justifyContent: "right" }}
            >
              {/* <Button variant="contained" component="label">
                Subir Foto
                <input type="file" hidden />
              </Button> */}
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

export default AgregarVehiculo;
