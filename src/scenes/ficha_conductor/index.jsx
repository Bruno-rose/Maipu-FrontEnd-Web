import { Box, useTheme, Typography, Paper } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";

import { useParams } from "react-router-dom";

import {
  getConductor,
  getUser,
  getPathLicencia,
  baseURL,
} from "../../services/api_calls";
import { Grid } from "@mui/material";
import TableConductor from "./table_conductor";


const FichaTarea = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { id } = useParams();

  const [driverData, setdriverData] = useState(null);
  const [userData, setuserData] = useState(null);
  const [userPathLicense, setuserPathLicense] = useState(null);

  useEffect(() => {
    // console.log(id);
    getConductor(id)
      .then((response) => {
        setdriverData(response.data.data);
      })
      .catch((error) => {
        console.log("conductor",error);
      });

    getUser(id)
      .then((response) => {
        setuserData(response.data.data[0]);
      })
      .catch((error) => {
        console.log("user",error);
      });

    getPathLicencia(id)
      .then((response) => {
        console.log(response.data.data[0]);
        setuserPathLicense(response.data.data[0]);
      })
      .catch((error) => {
        console.log("licencia",error);
      });
  }, [id]);

  return (
    <Box m="20px">
      <Header
        title="FICHA CONDUCTOR"
        subtitle="Toda la información de un conductor en un solo lugar"
      />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            {/* Content for the left column */}
            {(!userData || !driverData) && <LinearProgress />}
            {userData && driverData && (
              <TableConductor driver={driverData} user={userData} />
            )}
          </Grid>
          <Grid item xs={4}>
            {/* Content for the right column */}
            <Typography
              mt={2}
              mb={1}
              variant="h3"
              color={colors.greenAccent[300]}
            >
              Licencia de conducir
            </Typography>
            {!userPathLicense && <LinearProgress />}
            {userPathLicense && (
              <Paper elevation={3}>
                <img
                  src={baseURL + userPathLicense.ruta_archivo2}
                  alt="licencia"
                  style={{ width: "50%" }}
                />
                <img
                  src={baseURL + userPathLicense.ruta_archivo1}
                  alt="foto_perfil"
                  style={{ width: "50%" }}
                />
              </Paper>
            )}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default FichaTarea;
