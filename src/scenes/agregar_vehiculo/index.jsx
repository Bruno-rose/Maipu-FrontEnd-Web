import { Box, Button, TextField } from "@mui/material";
import { Formik, form } from "formik";
import * as yup from "yup";
import { postVehiculos } from "../../services/api_calls";
import { Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import MenuItem from "@mui/material/MenuItem";


import { tokens } from "../../theme";
import {
  vehicle_type,
  contract_type,
  operational_options,
} from "../../data/valueMapping";

const checkoutSchema = yup.object().shape({
  patente: yup.string().required("Campo requerido"),
  kms: yup
    .number()
    .required("Campo requerido")
    .positive("Kilometraje tiene que ser positivo"),
  tipo_id: yup.string().required("Campo requerido"),
  operacional: yup.string().required("Campo requerido"),
  tipo_contrato_id: yup.string().required("Campo requerido"),
});

const initialValues = {
  patente: "",
  kms: "",
  tipo_id: "",
  operacional: "",
  tipo_contrato_id: "",
};

const AgregarVehiculo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleSubmit = async (values) => {
    console.log(values);
    postVehiculos(values)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
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
                gridTemplateColumns="repeat(12, minmax(0, 1fr))"
                sx={{
                  minWidth: "500px",
                }}
              >
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
                <TextField
                  fullWidth
                  select
                  variant="filled"
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
                  fullWidth
                  variant="filled"
                  select
                  type="text"
                  label="Contrato"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.tipo_contrato_id}
                  name="tipo_contrato_id"
                  error={
                    !!touched.tipo_contrato_id && !!errors.tipo_contrato_id
                  }
                  helperText={
                    touched.tipo_contrato_id && errors.tipo_contrato_id
                  }
                  sx={{ gridColumn: "span 4" }}
                >
                  {contract_type.map((option) => (
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
                  Información Vehículo
                </Typography>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Marca"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.marca}
                  name="marca"
                  error={!!touched.marca && !!errors.marca}
                  helperText={touched.marca && errors.marca}
                  sx={{ gridColumn: "span 3" }}
                />

                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Modelo"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.modelo}
                  name="modelo"
                  error={!!touched.modelo && !!errors.modelo}
                  helperText={touched.modelo && errors.modelo}
                  sx={{ gridColumn: "span 3" }}
                />

                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Año"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.anno}
                  name="anno"
                  error={!!touched.anno && !!errors.anno}
                  helperText={touched.anno && errors.anno}
                  sx={{ gridColumn: "span 3" }}
                />

                <TextField
                  fullWidth
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
                  sx={{ gridColumn: "span 3" }}
                >
                  {vehicle_type.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>

                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Número de Chasis"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.num_chasis}
                  name="num_chasis"
                  error={!!touched.num_chasis && !!errors.num_chasis}
                  helperText={touched.num_chasis && errors.num_chasis}
                  sx={{ gridColumn: "span 6" }}
                />

                <TextField
                  fullWidth
                  variant="filled"
                  type="number"
                  label="Número de Motor"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.num_motor}
                  name="num_motor"
                  error={!!touched.num_motor && !!errors.num_motor}
                  helperText={touched.num_motor && errors.num_motor}
                  sx={{ gridColumn: "span 6" }}
                />
              </Box>

              <Box
                mt="40px"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Button type="submit" color="secondary" variant="contained" href={`../vehiculos`}>
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
