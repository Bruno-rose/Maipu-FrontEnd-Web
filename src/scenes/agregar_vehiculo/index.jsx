import { Box, Button, TextField } from "@mui/material";
import { Formik, form } from "formik";
import * as yup from "yup";
import axios from "axios";

import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import MenuItem from "@mui/material/MenuItem";
import Autocomplete from "@mui/material/Autocomplete";
import { OpacityRounded } from "@mui/icons-material";

const vehicle_type = [
  {
    value: 1,
    label: "Auto",
  },
  {
    value: 2,
    label: "Camión",
  },
  {
    value: 3,
    label: "Bus",
  },
  {
    value: 4,
    label: "Otro",
  },
];

const operational_options = [
  {
    value: 0,
    label: "NO",
  },
  {
    value: 1,
    label: "SI",
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


const checkoutSchema = yup.object().shape({
  patente: yup.string().required("Patente es requerida"),
  kms: yup
    .number()
    .required("Kilometraje es requerido")
    .positive("Kilometraje tiene que ser positivo"),
  tipo_id: yup.string().required("Tipo es requerido"),
  operacional: yup.string().required("Operacional es requerido"),
  // conductor: yup.string().required("Conductor es requerido"),
  tipo_contrato_id: yup.string().required("Contrato es requerido"),
});

const initialValues = {
  patente: "",
  kms: "",
  tipo_id: "",
  operacional: "",
  tipo_contrato_id: "",
};

const AgregarVehiculo = () => {
  const isNonMobile = useMediaQuery("(min-width:6px)");

  const handleSubmit = async (values) => {
    console.log(values);
    console.log("HOLAAAAAA!");
    try {
      const response = await axios.post(
        "https://7995-200-89-69-135.ngrok-free.app/vehiculo",
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

      <Box mt="40px" sx={{ display: "flex", justifyContent: "center" }}>
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
                  minWidth: "500px",
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <TextField
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
                  variant="filled"
                  type="number"
                  label="Kilometraje"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.kms}
                  name="kms"
                  error={!!touched.kms && !!errors.kms}
                  helperText={touched.kms && errors.kms}
                  sx={{ gridColumn: "span 4" }}
                  inputprops={{
                    inputMode: "numeric",
                    pattern: "[0-9]*",
                    inputprops: { min: 0 },
                  }}
                />
                <TextField
                  variant="filled"
                  select
                  type="select"
                  label="Tipo"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.tipo_id}
                  name="tipo_id"
                  error={!!touched.tipo_id && !!errors.tipo_id}
                  helperText={touched.tipo_id && errors.tipo_id}
                  sx={{ gridColumn: "span 4" }}
                >
                  {vehicle_type.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  variant="filled"
                  select
                  type="select"
                  label="Operacional"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.operacional}
                  name="operacional"
                  error={!!touched.operacional && !!errors.operacional}
                  helperText={touched.operacional && errors.operacional}
                  sx={{ gridColumn: "span 4" }}
                >
                  {operational_options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  variant="filled"
                  select
                  type="text"
                  label="Contrato"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.tipo_contrato_id}
                  name="tipo_contrato_id"
                  error={!!touched.tipo_contrato_id && !!errors.tipo_contrato_id}
                  helperText={touched.tipo_contrato_id && errors.tipo_contrato_id}
                  sx={{ gridColumn: "span 4" }}
                >
                  {contract.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                {/* <Autocomplete
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
                      margin="normal"
                      label="Conductor"
                      variant="filled"
                      type="text"
                      name="conductor"
                      onBlur={handleBlur}
                      error={!!touched.tipo_contrato_id && !!errors.tipo_contrato_id}
                      helperText={touched.tipo_contrato_id && errors.tipo_contrato_id}
                      {...params}
                    />
                  )}
                /> */}

              </Box>

              <Box mt="40px" sx={{ display: "flex", justifyContent: "center" }}>
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
    </Box>
  );
};

export default AgregarVehiculo;
