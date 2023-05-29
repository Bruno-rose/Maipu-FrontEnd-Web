import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";

import { useParams } from "react-router-dom";

import { getConductor, getUser } from "../../service/api_calls";

import TableConductor from "./table_conductor";


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

  const [driverData, setdriverData] = useState(null);
  const [userData, setuserData] = useState(null);

  useEffect(() => {

    getConductor(id).then((response) => {
      console.log(response);
      setdriverData(response.data.data);
    }).catch((error) => {
      console.log(error);
    });

    getUser(id).then((response) => {
      console.log(response.data.data[0]);
      setuserData(response.data.data[0]);
    }).catch((error) => {
      console.log(error);
    });

  }, []);

  return (
    <Box m="20px">
      <Header
        title="FICHA CONDUCTOR"
        subtitle="Toda la información de un conductor en un solo lugar"
      />
      <Box>
        { (!userData || !driverData) && <LinearProgress />}
        {(userData && driverData) && <TableConductor driver={driverData} user={userData} />}
      </Box>
    </Box>
  );
};

export default FichaTarea;
