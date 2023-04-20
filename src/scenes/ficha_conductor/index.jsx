import { Box, useTheme, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import axios from "axios";
import { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const FichaConductor = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [carData, setCarData] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        setCarData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    carData && (
      <Box m="20px">
        <Header
          title="FICHA CONDUCTOR"
          subtitle="Toda la información del conductor en un solo lugar"
        />
        {/* patente, tipo, clase, disponibilidad, kilometraje, conductor */}

        <Box sx={{ maxWidth: "50%" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 375 }} aria-label="caption table">
              {/* <caption>Información estática y dinámica del vehículo</caption> */}
              <TableBody>
                <TableRow key={1}>
                  <TableCell align="left">
                    {" "}
                    <Typography color={colors.grey[500]} variant="h4">
                      Nombre:
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography color={colors.grey[500]} variant="h5">
                      {carData.name}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow key={2}>
                  <TableCell align="left">
                    {" "}
                    <Typography color={colors.grey[500]} variant="h4">
                      Vehículo:
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography color={colors.grey[500]} variant="h5">
                      {carData.website}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow key={3}>
                  <TableCell align="left">
                    {" "}
                    <Typography color={colors.grey[500]} variant="h4">
                      Tipo:
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography color={colors.grey[500]} variant="h5">
                      {carData.phone}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow key={4}>
                  <TableCell align="left">
                    {" "}
                    <Typography color={colors.grey[500]} variant="h4">
                    Licencia:
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography color={colors.grey[500]} variant="h5">
                      {carData.phone}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow key={5}>
                  <TableCell align="left">
                    {" "}
                    <Typography color={colors.grey[500]} variant="h4">
                      Rut:
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography color={colors.grey[500]} variant="h5">
                      {carData.phone}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow key={6}>
                  <TableCell align="left">
                    {" "}
                    <Typography color={colors.grey[500]} variant="h4">
                      Estado:
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography color={colors.grey[500]} variant="h5">
                      {carData.phone}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow key={7}>
                  <TableCell align="left">
                    {" "}
                    <Typography color={colors.grey[500]} variant="h4">
                      Teléfono:
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography color={colors.grey[500]} variant="h5">
                      {carData.phone}
                    </Typography>
                  </TableCell>
                </TableRow>
                <TableRow key={8}>
                  <TableCell align="left">
                    {" "}
                    <Typography color={colors.grey[500]} variant="h4">
                      Email:
                    </Typography>
                  </TableCell>
                  <TableCell align="left">
                    <Typography color={colors.grey[500]} variant="h5">
                      {carData.phone}
                    </Typography>
                  </TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    )
  );
};

export default FichaConductor;
