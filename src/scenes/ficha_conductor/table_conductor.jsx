import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { vehicle_value_label, contract_value_label } from "../../data/valueMapping";


const TableConductor = (params) => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: "600px" }}>
      <Table>
        <TableBody>
          <TableRow key="nombre">
            <TableCell>Nombre</TableCell>
            <TableCell>{params.data.nombre} {params.data.apellido1} {params.data.apellido2}</TableCell>
          </TableRow>
          <TableRow key="numero">
            <TableCell>Teléfono</TableCell>
            <TableCell>{params.data.numero}</TableCell>
          </TableRow>
          <TableRow key="correo">
            <TableCell>Email</TableCell>
            <TableCell>{params.data.correo}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableConductor;
