import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const TableTarea = (params) => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: "600px" }}>
      <Table>
        <TableBody>
          <TableRow key="patente">
            <TableCell>Hora de inicio</TableCell>
            <TableCell>{(new Date(params.data.inicio)).toLocaleTimeString()} - {(new Date(params.data.inicio)).toLocaleDateString("es-ES")}</TableCell>
          </TableRow>
          <TableRow key="origen">
            <TableCell>Origen</TableCell>
            <TableCell>{params.data.calle_origen} {params.data.numero_origen}, {params.data.comuna_origen} </TableCell>
          </TableRow>
          <TableRow key="destino">
            <TableCell>Destino</TableCell>
            <TableCell>{params.data.calle_destino} {params.data.numero_destino}, {params.data.comuna_destino} </TableCell>
          </TableRow>
          <TableRow key="solicitante">
            <TableCell>Solicitante</TableCell>
            <TableCell>{params.data.nombre_solicitante} {params.data.apellido_solicitante}</TableCell>
          </TableRow>
          <TableRow key="contacto">
            <TableCell>Número de contacto</TableCell>
            <TableCell>{params.data.numero_contacto}</TableCell>
          </TableRow>
          <TableRow key="descripcion">
            <TableCell>Descripción</TableCell>
            <TableCell>{params.data.descripcion}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableTarea;
