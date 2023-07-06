import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  useTheme,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  TableCell,
  TableRow,
  TableContainer,
  Table,
  TableBody,
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
  getVehiculoConductorByVehiculo,
  getPathRevision,
  baseURL,
  postVehiculoConductor,
  getConductores,
  putTermino,
} from "../../services/api_calls";

const checkoutSchema = yup.object().shape({
  conductor: yup.string().required("Conductor es requerido"),
});

const initialValues = {
  conductor: "",
};

function getCurrentDate() {
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Months are zero-based
  const year = currentDate.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
}

const FichaVehiculo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { id } = useParams();
  const { state } = useAuth();

  const [carData, setCarData] = useState(null);
  const [carRevision, setcarRevision] = useState(null);
  const [conductores, setConductores] = useState(null);
  const [conductor, setConductor] = useState(null);

  useEffect(() => {
    if (state === "authenticated") {
      getVehiculoConductorByVehiculo(id)
        .then((response) => {
          setCarData(response.data.data[0]);
          setConductor(
            (response.data.data[0]?.inicio && !response.data.data[0]?.termino)
            );
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
  }, [state, conductor]);

  useEffect(() => {
    if (state === "authenticated") {
      getConductores()
        .then((response) => {
          const list_conductores = response.data.data.map((item, index) => ({
            label: `${item.nombre} ${item.apellido1}`,
            id: item.rut,
          }));
          setConductores(list_conductores);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [state]);

  const Asignar = async (values) => {
    try {
      const load = {
        rut: values.conductor,
        patente: id,
        fecha: getCurrentDate(),
      };
      const response = await postVehiculoConductor(load);
      setConductor(!conductor);
    } catch (error) {
      console.log(error);
    }
  };

  const Quitar = async () => {
    try {
      const load = { patente: id, fecha: getCurrentDate() };
      const response = await putTermino(load);
      setConductor(!conductor);
    } catch (error) {
      console.log(error);
    }
  };

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
            
                <Typography
                  mt={2}
                  mb={1}
                  variant="h3"
                  color={colors.greenAccent[300]}
                >
                  Conductor{" "}
                </Typography>

                <TableContainer component={Paper} sx={{ maxWidth: "600px", mb: 1 }}>
                  <Table>
                      {conductor && (
                    <TableBody>
                      <TableRow key="nombre">
                        <TableCell>Nombre</TableCell>
                        <TableCell>
                          {carData.nombre} {carData.apellido1}{" "}
                          {carData.apellido2}
                        </TableCell>
                      </TableRow>
                      <TableRow key="rut">
                        <TableCell>RUT</TableCell>
                        <TableCell>{carData.rut}</TableCell>
                      </TableRow>
                      <TableRow key="numero">
                        <TableCell>Teléfono</TableCell>
                        <TableCell>
                          {carData.numero ? carData.numero : "No hay número"}
                        </TableCell>
                      </TableRow>
                    </TableBody>
                      )}
                      {!conductor && (
                    <TableBody>
                      <TableRow key="no_conductor">
                        <TableCell>Nombre</TableCell>
                        <TableCell>
                          No hay conductor asignado a este vehículo
                        </TableCell>
                      </TableRow>
                    </TableBody>
                      )}
                  </Table>
                </TableContainer>

                {conductor && <Button
                  id="desasignar"
                  color="secondary"
                  variant="contained"
                  onClick={Quitar}
                >
                  Quitar
                </Button>}
            {/* Agregar conductor al vehiculo si no tiene*/}
            { conductores && (
              <Formik
                initialValues={initialValues}
                validationSchema={checkoutSchema}
                onSubmit={Asignar}
                >

                {({
                  values,
                  errors,
                  touched,
                  handleBlur,
                  setFieldValue,
                  handleSubmit,
                }) => (
                  <form
                  onSubmit={handleSubmit}
                  >
                    <Autocomplete
                      id="conductor"
                      name="conductor"
                      sx={{ gridColumn: "span 4" }}
                      options={conductores}
                      getOptionLabel={(option) => option.label || ""}
                      onChange={(e, value) => {
                        setFieldValue(
                          "conductor",
                          value !== null ? value.id : initialValues.conductor
                        );
                      }}
                      renderInput={(params) => (
                        <TextField
                          margin="normal"
                          label="Conductor"
                          type="text"
                          name="conductor"
                          onBlur={handleBlur}
                          error={!!touched.conductor && !!errors.conductor}
                          helperText={touched.conductor && errors.conductor}
                          {...params}
                        />
                      )}
                    />
                    <Button
                      id="asignar"
                      type="submit"
                      color="secondary"
                      variant="contained"
                    >
                      Asignar
                    </Button>
                  </form>
                )}
              </Formik>
            )}

            
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
