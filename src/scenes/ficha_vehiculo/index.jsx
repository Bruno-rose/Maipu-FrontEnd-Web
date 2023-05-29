import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, useTheme, Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

import Header from "../../components/Header";
import TableVehiculo from "./table_vehiculo";


import { getVehiculo, getUser } from "../../service/api_calls";


const FichaVehiculo = () => {
  const [carData, setCarData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getVehiculo(id)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        setCarData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return (
    <Box m="20px">
      <Header
        title="FICHA VEHÍCULO"
        subtitle="Toda la información del vehículo en un solo lugar"
      />
      {!carData && <LinearProgress />}
      {carData && <TableVehiculo data={carData} />}
    </Box>
  );
};

export default FichaVehiculo;
