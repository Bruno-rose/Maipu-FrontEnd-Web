import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { vehicle_value_label } from "../../data/valueMapping";


const TableVehiculo = (params) => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: "600px" }}>
      <Table>
        <TableBody>
          <TableRow key="patente">
            <TableCell>Patente</TableCell>
            <TableCell>{params.data.patente}</TableCell>
          </TableRow>
          <TableRow key="tipo">
            <TableCell>Tipo</TableCell>
            <TableCell>{vehicle_value_label[params.data.tipo_id]}</TableCell>
          </TableRow>
          <TableRow key="marca">
            <TableCell>Marca</TableCell>
            <TableCell>{params.data.marca}</TableCell>
          </TableRow>
          <TableRow key="modelo">
            <TableCell>Modelo</TableCell>
            <TableCell>{params.data.modelo}</TableCell>
          </TableRow>
          <TableRow key="anno">
            <TableCell>Año</TableCell>
            <TableCell> {(new Date(params.data.anno)).getFullYear()}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableVehiculo;
