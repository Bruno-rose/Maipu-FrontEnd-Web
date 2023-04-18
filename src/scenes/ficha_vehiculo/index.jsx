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

// const carData = {
//   patente: "ABC123",
//   disponibilidad: "Disponible",
//   tipo: "Sedán",
//   clase: "Clase A",
//   kilometraje: 79302,
//   conductor: "Juan Pérez",
// };

const FichaVehiculo = () => {
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

  return carData&&(
    <Box m="20px">
      <Header
        title="FICHA VEHÍCULO"
        subtitle="Toda la información del vehículo en un solo lugar"
      />
      {/* patente, tipo, clase, disponibilidad, kilometraje, conductor */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <caption>Información estática y dinámica del vehículo</caption>
          <TableBody>
            <TableRow key={1}>
              <TableCell align="left">
                {" "}
                <Typography color={colors.grey[500]} variant="h4">
                  Patente:
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography color={colors.grey[500]} variant="h5">
                  {carData.name}
                </Typography>
              </TableCell>
              <TableCell align="left">
                {" "}
                <Typography color={colors.grey[500]} variant="h4">
                  Disponibilidad:
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography color={colors.grey[500]} variant="h5">
                  {carData.username}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow key={2}>
              <TableCell align="left">
                {" "}
                <Typography color={colors.grey[500]} variant="h4">
                  Tipo de vehículo:
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography color={colors.grey[500]} variant="h5">
                  {carData.website}
                </Typography>
              </TableCell>
              <TableCell align="left">
                {" "}
                <Typography color={colors.grey[500]} variant="h4">
                  Kilometraje:
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography color={colors.grey[500]} variant="h5">
                  {carData.email}
                </Typography>
              </TableCell>
            </TableRow>
            <TableRow key={3}>
              <TableCell align="left">
                {" "}
                <Typography color={colors.grey[500]} variant="h4">
                  Clase de vehículo:
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography color={colors.grey[500]} variant="h5">
                  {carData.phone}
                </Typography>
              </TableCell>
              <TableCell align="left">
                {" "}
                <Typography color={colors.grey[500]} variant="h4">
                  Conductor:
                </Typography>
              </TableCell>
              <TableCell align="left">
                <Typography color={colors.grey[500]} variant="h5">
                  {carData.id}
                </Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ mt: 8 }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.grey[500]} variant="h4">
              TAREAS
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.grey[500]} variant="h4">
              FISCALIZACIONES
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.grey[500]} variant="h4">
              CONDUCTORES
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.grey[500]} variant="h4">
              REVISIÓNES TÉCNICAS
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography color={colors.grey[500]} variant="h4">
              MANTENCIONES
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default FichaVehiculo;
