import axios from "axios";
import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, useTheme, Button } from "@mui/material";

import { tokens } from "../../theme";
import Header from "../../components/Header";

const Conductores = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState(null);

  // cambiar endpoint y columnas para mostrar la informacion de los autos
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const columns = [
    {
      field: "userId",
      headerName: "USER",
    },
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "title",
      headerName: "Title",
    },
    {
      field: "body",
      headerName: "Description",
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
    },
    {
      field: "tarea",
      headerName: "Tarea",
      flex: 1,
    },
    {
      field: "ubicacion",
      headerName: "Ubicacion",
      flex: 1,
    },
    {
      field: "ficha",
      headerName: "Ficha",
      flex: 1,
      renderCell: () => {
        return (
          <Button
            backgroundColor={colors.greenAccent[500]}
            key="vehiculo"
            href="/ficha_vehiculo" // agregar referencia al ID
            width="60%"
            m="0 auto"
            p="5px"
            sx={{ backgroundColor: colors.grey[900] }}
            // display="flex"
            // justifyContent="center"
            borderRadius="4px"
            variant="outlined"
          >
            <Typography color={colors.grey[200]} sx={{ ml: "5px" }}>
              Acceder
            </Typography>
          </Button>
        );
      },
    },
  ];

  return (
    data && (
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
            // "& .MuiCheckbox-root": {
            //   color: `${colors.greenAccent[200]} !important`,
            // },
          }}
        >
          <DataGrid  rows={data} columns={columns} />
          {/* <DataGrid checkboxSelection rows={data} columns={columns} /> */}
        </Box>
      </Box>
    )
  );
};

export default Conductores;