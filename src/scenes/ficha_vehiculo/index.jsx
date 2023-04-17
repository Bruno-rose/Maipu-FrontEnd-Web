import { Box, useTheme, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(patente, tipo, clase, disponibilidad, kilometraje, conductor) {
  return {patente, tipo, clase, disponibilidad, kilometraje, conductor};
}

const rows = [
  createData("Patente:", "ABC123", "Disponibilidad:", "Disponible"),
  createData("Tipo de vehículo:", "Sedán",  "Kilometraje:", 2000),
  createData("Clase de vehículo:", "Clase A", "Conductor:", "Juan Pérez",)
];

const FichaVehiculo = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="FICHA VEHÍCULO" subtitle="Toda la información del vehículo en un solo lugar" />
      {/* patente, tipo, clase, disponibilidad, kilometraje, conductor */}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="caption table">
          <caption>Información estática y dinámica del vehículo</caption>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="left"> <Typography color={colors.grey[500]} variant="h4">{row.patente}</Typography></TableCell>
                <TableCell align="left"><Typography color={colors.grey[500]} variant="h5">{row.tipo}</Typography></TableCell>
                <TableCell align="left"> <Typography color={colors.grey[500]} variant="h4">{row.clase}</Typography></TableCell>
                <TableCell align="left"><Typography color={colors.grey[500]} variant="h5">{row.disponibilidad}</Typography></TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{mt:8}}>

      <Accordion >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.grey[500]} variant="h4">
            TAREAS
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
    </Box>
  );
};



export default FichaVehiculo;
