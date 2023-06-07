import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, useTheme, Typography, Grid, Paper } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { tokens } from "../../theme";

import Header from "../../components/Header";
import TableVehiculo from "./table_vehiculo";

import { getVehiculo, getPathRevision, server_endpoint } from "../../service/api_calls";

const FichaVehiculo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [carData, setCarData] = useState(null);
  const [carRevision, setcarRevision] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getVehiculo(id)
      .then((response) => {
        setCarData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    getPathRevision(id)
      .then((response) => {
        setcarRevision(response.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);

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
                  src={server_endpoint + carRevision.ruta_archivo}
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
