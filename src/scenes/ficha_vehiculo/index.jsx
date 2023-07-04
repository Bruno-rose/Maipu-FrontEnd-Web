import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  useTheme,
  Typography,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { tokens } from "../../theme";

import Header from "../../components/Header";
import TableVehiculo from "./table_vehiculo";

import Autocomplete from "@mui/material/Autocomplete";
import { Formik } from "formik";
import * as yup from "yup";

import { useAuth } from "../../lib/headlessAuth";

import {
  getVehiculo,
  getPathRevision,
  baseURL,
  postVehiculoConductor,
} from "../../services/api_calls";

const checkoutSchema = yup.object().shape({
  conductor: yup.string().required("Conductor es requerido"),
});

const initialValues = {
  conductor: "",
};

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

const FichaVehiculo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { id } = useParams();
  const { state } = useAuth();

  const [carData, setCarData] = useState(null);
  const [carRevision, setcarRevision] = useState(null);

  useEffect(() => {
    if (state === "authenticated") {
      getVehiculo(id)
        .then((response) => {
          setCarData(response.data);
        })
        .catch((error) => {
          console.log(error);
          setCarData("Error");
        });

      getPathRevision(id)
        .then((response) => {
          setcarRevision(response.data.data[0]);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [state]);

  const handleSubmit = async (values) => {
    console.log(values);
    try {
      const response = postVehiculoConductor(values);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // const handleDriverChange = (event, newValue) => {
  //   initialValues.conductor = newValue;
  // };

  return (
    <Box m="20px">
      <Header
        title="FICHA VEHÍCULO"
        subtitle="Toda la información del vehículo en un solo lugar"
      />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            {!carData && <LinearProgress />}
            {carData && <TableVehiculo data={carData} />}

            {/* Agregar conductor al vehiculo */}
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
                        margin="normal"
                        label="Conductor"
                        type="text"
                        name="conductor"
                        onBlur={handleBlur}
                        error={
                          !!touched.tipo_contrato_id &&
                          !!errors.tipo_contrato_id
                        }
                        helperText={
                          touched.tipo_contrato_id && errors.tipo_contrato_id
                        }
                        {...params}
                      />
                    )}
                  />
                </form>
              )}
            </Formik>
          </Grid>

          <Grid item xs={5}>
            <Typography
              mt={2}
              mb={1}
              variant="h3"
              color={colors.greenAccent[300]}
            >
              Revisión técnica
            </Typography>
            {!carRevision && <LinearProgress />}
            {carRevision && (
              <Paper elevation={3}>
                <img
                  src={baseURL + carRevision.ruta_archivo}
                  alt="revision_tecnica"
                  style={{ width: "100%" }}
                />
              </Paper>
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default FichaVehiculo;
