import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { vehicle_value_label, contract_value_label } from "../../data/valueMapping";

const MUITable = (params) => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: "600px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Parametros</TableCell>
            <TableCell>Valores</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key="patente">
            <TableCell>Patente</TableCell>
            <TableCell>{params.data.patente}</TableCell>
          </TableRow>
          <TableRow key="tipo">
            <TableCell>Tipo</TableCell>
            <TableCell>{vehicle_value_label[params.data.tipo_id]}</TableCell>
          </TableRow>
          <TableRow key="contrato">
            <TableCell>Contrato</TableCell>
            <TableCell>{contract_value_label[params.data.tipo_contrato_id]}</TableCell>
          </TableRow>
          <TableRow key="disponibilidad">
            <TableCell>Disponibilidad</TableCell>
            <TableCell>{params.data.operacional?"Disponible":"No disponible"}</TableCell>
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
            <TableCell>{params.data.anno}</TableCell>
          </TableRow>
          <TableRow key="numero_inventario">
            <TableCell>Número de inventario</TableCell>
            <TableCell>{params.data.numero_inventario}</TableCell>
          </TableRow>
          <TableRow key="numero_de_chasis">
            <TableCell>Número de chasis</TableCell>
            <TableCell>{params.data.numero_chasis}</TableCell>
          </TableRow>
          <TableRow key="numero_de_motor">
            <TableCell>Número de motor</TableCell>
            <TableCell>{params.data.numero_motor}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MUITable;
