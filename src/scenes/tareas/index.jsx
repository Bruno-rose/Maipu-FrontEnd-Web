import { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography, useTheme, Button } from "@mui/material";

import { tokens } from "../../theme";
import Header from "../../components/Header";
import { getTareas } from "../../service/api_calls";
import LinearProgress from '@mui/material/LinearProgress';


const Tareas = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [data, setData] = useState(null);

  useEffect(() => {
    getTareas()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "vehiculo",
      headerName: "Vehículo",
      flex: 1,
    },
    {
      field: "hora_de_inicio",
      headerName: "Hora de inico",
      flex: 1,
    },
    {
      field: "fecha",
      headerName: "Fecha",
      flex: 1,
    },
    {
      field: "origen",
      headerName: "Origen",
      flex: 1,
    },
    {
      field: "destino",
      headerName: "Destino",
      flex: 1,
    },
    {
      field: "descripcion",
      headerName: "Descripción",
      flex: 2,
    },
    {
      field: "ficha",
      headerName: "Ficha",
      flex: 1,
      renderCell: (params) => {
        return (
          // <Link to={`../tarea/detalles/${params.id}`}>Acceder</Link>
          <Button
            backgroundColor={colors.greenAccent[500]}
            key="vehiculo"
            // href="/tarea/" // agregar referencia al ID
            href={`../tarea/detalles/${params.id}`}
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
     
      <Box m="20px">
        <Header
          title="TAREAS"
          subtitle="Gestiona todas tareas en un solo lugar"
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
          {!data && <LinearProgress />}
          {data && <DataGrid rows={data} columns={columns} />}
          {/* <DataGrid checkboxSelection rows={data} columns={columns} /> */}
        </Box>
      </Box>
    
  );
};

export default Tareas;
