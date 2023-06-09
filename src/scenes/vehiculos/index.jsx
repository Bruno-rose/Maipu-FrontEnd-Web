import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, useTheme, Button } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { getVehiculos } from "../../services/api_calls";

import { tokens } from "../../theme";
import Header from "../../components/Header";

import { vehicle_value_label, contract_value_label } from "../../data/valueMapping";


const getRowId = (row) => row.patente;

const Vehiculos = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState(null);

  useEffect(() => {
    getVehiculos()
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const columns = [
    {
      field: "patente",
      flex:1,
      headerName: "Patente",
    },
    {
      field: "tipo_contrato_id",
      flex:1,
      headerName: "Contrato",
      valueFormatter: (params) => (contract_value_label[params.value] ),
    },
    {
      field: "tipo_id",
      flex:1,
      headerName: "Tipo",
      valueFormatter: (params) => (vehicle_value_label[params.value] ),
    },

    {
      field: "anno",
      flex:1,
      headerName: "Año",
      renderCell: (params) => (
        <>
          {(new Date(params.value)).getFullYear()}
        </>
      ),
    },
    {
      field: "marca",
      flex:1,
      headerName: "Marca",
    },
    {
      field: "modelo",
      flex:1,
      headerName: "Modelo",
    },
    {
      field: "operacional",
      flex:1,
      headerName: "Operacional",
      valueFormatter: (params) => (params.value ? "SI" : "NO"),
    },
    {
      field: "reference",
      flex:1,
      headerName: "Ficha",
      valueGetter: (params) => {
        return params.row.patente;
      },

      renderCell: (params) => {
        return (
          <Button variant="contained" href={`../vehiculo/detalles/${params.id}`} sx={{ backgroundColor:colors.blueAccent[700]}} >Acceder</Button >
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="FLOTA DE VEHÍCULOS"
        subtitle="Gestiona la flota de vehículos"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
        }}
      >
        {!data && <LinearProgress />}
        {data && (
          <DataGrid rows={data} columns={columns} getRowId={getRowId} />
        )}
      </Box>
    </Box>
  );
};

export default Vehiculos;
