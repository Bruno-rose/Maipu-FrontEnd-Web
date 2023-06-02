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
            <TableCell>{params.driver.nombre} {params.driver.apellido1} {params.driver.apellido2}</TableCell>
          </TableRow>
          <TableRow key="RUT">
            <TableCell>RUT</TableCell>
            <TableCell>{params.user.rut}</TableCell>
          </TableRow>
          <TableRow key="correo">
            <TableCell>Email</TableCell>
            <TableCell>{params.user.correo}</TableCell>
          </TableRow>
          <TableRow key="numero">
            <TableCell>Teléfono</TableCell>
            <TableCell>{params.user.numero?params.user.numero:"Sin Teléfono"}</TableCell>
          </TableRow>
          <TableRow key="patente">
            <TableCell>Patente</TableCell>
            <TableCell>{params.driver.patenteVehiculo}</TableCell>
          </TableRow>
          <TableRow key="operacional">
            <TableCell>Operacional</TableCell>
            <TableCell>{params.driver.vehiculoOperacional?"Operacional":"No Operacional"}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableConductor;
