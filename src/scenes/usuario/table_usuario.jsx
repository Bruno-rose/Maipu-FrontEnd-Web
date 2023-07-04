import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { comuna_value_label } from "../../data/valueMapping";

const TableUsuario = (params) => {console.log("table",params);
  return (
    <TableContainer component={Paper} sx={{ maxWidth: "600px" }}>
      <Table>
        <TableBody>
          <TableRow key="nombre">
            <TableCell>Nombre</TableCell>
            <TableCell>{params.data.nombre}</TableCell>
          </TableRow>
          <TableRow key="apellidos">
            <TableCell>Apellidos</TableCell>
            <TableCell>{params.data.apellido1} {params.data.apellido2}</TableCell>
          </TableRow>
          <TableRow key="correo">
            <TableCell>Correo</TableCell>
            <TableCell>{params.data.correo}</TableCell>
          </TableRow>
          <TableRow key="rut">
            <TableCell>Rut</TableCell>
            <TableCell>{params.data.rut}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableUsuario;
