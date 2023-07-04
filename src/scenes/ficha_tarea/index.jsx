import { Box, useTheme, Typography, Grid, Paper } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";

import { useParams } from "react-router-dom";
import {
  getTarea,
  getVehiculo,
  getConductor,
  getConductorbyPatente,
} from "../../services/api_calls";

import TableTarea from "./table_tarea";
import TableVehiculo from "./table_tarea_vehiculo";
import TableConductor from "./table_tarea_conductor";

import driver_example from "../../data/driver_example.jpg"; // Replace with the actual path to your image
import car_example from "../../data/car_example.jpeg"; // Replace with the actual path to your image

import { useAuth } from "../../lib/headlessAuth";

const myTaskData = {
  apellido_solicitante: "Rodriguez",
  calle_destino: "Beauchef",
  calle_origen: "San Pablo",
  comuna_destino: "Santiago",
  comuna_origen: "Santiago",
  descripcion: "desc1",
  destino_latitud: -33.4577725,
  destino_longitud: -70.6635288,
  inicio: "2023-05-31T11:12",
  nombre_solicitante: "Bruno",
  numero_contacto: "56933027489",
  numero_destino: "850",
  numero_origen: "1353",
  partida_latitud: -33.4345566,
  partida_longitud: -70.6601565,
  patente: "AB123CD",
  titulo: "Test01",
};

const myDriverData = {
  rut: "18756912-0",
  correo: "super_conductor@gmail.com",
  nombre: "Luis",
  apellido1: "Latorre",
  apellido2: "Bravo",
  numero: "56985836098",
};

const FichaTarea = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { id } = useParams();
  const { state } = useAuth();

  const [taskData, settaskData] = useState(null);
  const [carData, setcarData] = useState(null);
  const [driverData, setdriverData] = useState(null);

  const [carPhotoPath, setcarPhotoPath] = useState("");
  const [driverPhotoPath, setdriverPhotoPath] = useState("");

  useEffect(() => {
    if (state === "authenticated") {
      getTarea(id).then((response) => {
        settaskData(response.data[0]);

        getVehiculo(response.data[0].patente)
          .then((response_1) => {
            setcarData(response_1.data);
            setcarPhotoPath(response_1.data.ruta_foto);
          })
          .catch((error) => {
            console.log(error);
          });

        getConductorbyPatente(response.data[0].patente)
          .then((response_3) => {
            setdriverData(response_3.data[0]);
            setdriverPhotoPath(response_3.data[0].ruta_foto);
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }
  }, [state]);

  return (
    <Box m="20px">
      <Header
        title="FICHA TAREA"
        subtitle="Toda la información de una tarea en un solo lugar"
      />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {/* Content for the left column */}
            {!taskData && <LinearProgress />}
            {taskData && <TableTarea data={taskData} />}
            <Typography
              mt={2}
              mb={1}
              variant="h3"
              color={colors.greenAccent[300]}
            >
              Vehículo
            </Typography>
            {!carData && <LinearProgress />}
            {carData && <TableVehiculo data={carData} />}
            <Typography
              mt={2}
              mb={1}
              variant="h3"
              color={colors.greenAccent[300]}
            >
              Conductor
            </Typography>
            {!driverData && (
              <Typography
                mt={2}
                mb={1}
                variant="Body1"
                color={colors.purple_maipu[800]}
              >
                Agregue un conductor al vehículo
              </Typography>
            )}
            {driverData && <TableConductor data={driverData} />}
          </Grid>
          {/* <Grid item xs={4}> */}
          {/* Content for the right column */}
          {/* <Typography
              mt={2}
              mb={1}
              variant="h3"
              color={colors.greenAccent[300]}
            >
              Conductor
            </Typography>
            <Paper elevation={3}>
              <img src={driverPhotoPath||driver_example} alt="driver" style={{width: "100%"}}/>
            </Paper>
            <Typography
              mt={2}
              mb={1}
              variant="h3"
              color={colors.greenAccent[300]}
            >
              Auto
            </Typography>
            <Paper elevation={3}>
              <img src={car_example||carPhotoPath} alt="car" style={{width: "100%"}}/>
            </Paper> */}
          {/* </Grid> */}
        </Grid>
      </Box>
    </Box>
  );
};

export default FichaTarea;
