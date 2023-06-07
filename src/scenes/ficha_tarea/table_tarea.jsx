import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { comuna_value_label } from "../../data/valueMapping";

const TableTarea = (params) => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: "600px" }}>
      <Table>
        <TableBody>
          <TableRow key="patente">
            <TableCell>Hora y fecha de inicio</TableCell>
            <TableCell>{(new Date(params.data.inicio)).toLocaleTimeString("es-ES")} - {(new Date(params.data.inicio)).toLocaleDateString("es-ES")}</TableCell>
          </TableRow>
          <TableRow key="origen">
            <TableCell>Origen</TableCell>
            <TableCell>{params.data.nombre_direccion_partida} {params.data.numero_direccion_partida}, {comuna_value_label[params.data.comuna_partida]}</TableCell>
            {/* <TableCell>{params.data.calle_origen} {params.data.numero_origen}, {params.data.comuna_origen} </TableCell> */}
          </TableRow>
          <TableRow key="destino">
            <TableCell>Destino</TableCell>
            <TableCell>{params.data.nombre_direccion_destino} {params.data.numero_direccion_destino}, {comuna_value_label[params.data.comuna_destino]}</TableCell>
            {/* <TableCell>{params.data.calle_destino} {params.data.numero_destino}, {params.data.comuna_destino} </TableCell> */}
          </TableRow>
          <TableRow key="solicitante">
            <TableCell>Solicitante</TableCell>
            <TableCell>{params.data.solicitante}</TableCell>
            {/* <TableCell>{params.data.nombre_solicitante} {params.data.apellido_solicitante}</TableCell> */}
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
