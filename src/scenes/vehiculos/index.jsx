import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, useTheme, Button } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import { getVehiculos } from "../../service/api_calls";

import { tokens } from "../../theme";
import Header from "../../components/Header";

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

  const columns2 = [
    {
      field: "anno",
      headerName: "anno",
    },
    {
      field: "marca",
      headerName: "marca",
    },
    {
      field: "modelo",
      headerName: "modelo",
    },
    {
      field: "numero_chasis",
      headerName: "numero_chasis",
    },
    {
      field: "numero_inventario",
      headerName: "numero_inventario",
    },
    {
      field: "numero_motor",
      headerName: "numero_motor",
    },
    {
      field: "operacional",
      headerName: "operacional",
    },
    {
      field: "patente",
      headerName: "patente",
    },
    {
      field: "ruta_foto",
      headerName: "ruta_foto",
    },
    {
      field: "tipo_contrato_id",
      headerName: "tipo_contrato_id",
    },
    {
      field: "tipo_id",
      headerName: "tipo_id",
    },
  ];

  const columns1 = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "patente",
      headerName: "Patente",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "conductor",
      headerName: "Conductor",
      type: "string",
      headerAlign: "left",
      align: "left",
      flex: 1,
      valueFormatter: (params) =>
        params.value ? params.value : "SIN CONDUCTOR",
    },
    {
      field: "operacional",
      headerName: "Operacional",
      flex: 1,
      valueFormatter: (params) => (params.value ? "SI" : "NO"),
    },
    {
      field: "clase",
      headerName: "Contrato",
      flex: 1,
    },
    {
      field: "tipo",
      headerName: "Tipo de vehículo",
      flex: 1,
    },
    {
      field: "ficha",
      headerName: "Ficha",
      flex: 1,
      renderCell: (params) => {
        return (
          <Link to={`../vehiculo/detalles/${params.id}`}>Acceder</Link>
          // <Button
          //   backgroundColor={colors.greenAccent[500]}
          //   key="vehiculo"
          //   href="vehiculo/detalles/1" // agregar referencia al ID
          //   width="60%"
          //   m="0 auto"
          //   p="5px"
          //   sx={{ backgroundColor: colors.grey[900] }}
          //   // display="flex"
          //   // justifyContent="center"
          //   borderRadius="4px"
          //   variant="outlined"
          // >
          //   <Typography color={colors.grey[200]} sx={{ ml: "5px" }}>
          //     Acceder
          //   </Typography>
          // </Button>
        );
      },
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="FLOTA DE VEHÍCULOS"
        subtitle="Administra la flota de vehículos"
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

export default Vehiculos;
