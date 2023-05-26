import { Box, useTheme, Typography, Grid, Paper } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";

import { useParams } from "react-router-dom";
import { getTarea, getVehiculo } from "../../service/api_calls";

import TableTarea from "./table_tarea";
import TableVehiculo from "./table_tarea_vehiculo";
import TableConductor from "./table_tarea_conductor";
import driver_example from "../../data/driver_example.jpg"; // Replace with the actual path to your image
import car_example from "../../data/car_example.jpeg"; // Replace with the actual path to your image

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

  const [taskData, settaskData] = useState(null);
  const [carData, setcarData] = useState(null);
  const [driverData, setdriverData] = useState(null);

  useEffect(() => {
    try {
      settaskData(myTaskData);

      getVehiculo(myTaskData.patente).then((response) => {
        console.log(response.data);
        setcarData(response.data);
        setdriverData(myDriverData);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

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
            {!driverData && <LinearProgress />}
            {myDriverData && <TableConductor data={myDriverData} />}
          </Grid>
          <Grid item xs={4}>
            {/* Content for the right column */}
            <Typography
              mt={2}
              mb={1}
              variant="h3"
              color={colors.greenAccent[300]}
            >
              Conductor
            </Typography>
            <Paper elevation={3}>
              <img src={driver_example} alt="driver" style={{width: "100%"}}/>
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
              <img src={car_example} alt="car" style={{width: "100%"}}/>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default FichaTarea;
