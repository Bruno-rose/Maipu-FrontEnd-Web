import axios from "axios";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, useTheme, Button } from "@mui/material";

import { tokens } from "../../theme";
import Header from "../../components/Header";
import { getConductores } from "../../services/api_calls";
import LinearProgress from "@mui/material/LinearProgress";

const getRowId = (row) => row.nombre;

const Conductores = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState(null);

  useEffect(() => {
    getConductores()
      .then((response) => {
        setData(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const columns2 = [
    {
      field: "nombre",
      headerName: "Nombre",
    },
    {
      field: "apellido1",
      headerName: "Apellido",
    },
    {
      field: "rut",
      headerName: "RUT",
    },
    {
      field: "numero",
      headerName: "Teléfono",
      valueFormatter: (params) =>
        params.value ? params.value : "Sin teléfono",
    },
    {
      field: "ficha",
      headerName: "Ficha",
      flex: 1,
      renderCell: (params) => {
        return (
          <Button
            variant="contained"
            href={`../conductor/detalles/${params.row.rut}`}
            sx={{ backgroundColor: colors.blueAccent[700] }}
          >
            Acceder
          </Button>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="CONDUCTORES"
        subtitle="Gestiona el personal de la flota en un solo lugar"
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
          <DataGrid rows={data} columns={columns2} getRowId={getRowId} />
        )}
      </Box>
    </Box>
  );
};

export default Conductores;
