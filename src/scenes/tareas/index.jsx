import { useEffect, useState } from "react";
import { DataGrid, esES } from "@mui/x-data-grid";
import { Box, useTheme, Button } from "@mui/material";

import { tokens } from "../../theme";
import Header from "../../components/Header";
import { getTareas } from "../../services/api_calls";
import LinearProgress from "@mui/material/LinearProgress";
import axios from "axios";
import { comuna_value_label } from "../../data/valueMapping";
import { useAuth } from "../../lib/headlessAuth";

axios.defaults.headers.common["ngrok-skip-browser-warning"] = "any";

const Tareas = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const { state } = useAuth();

  const [data, setData] = useState(null);

  useEffect(() => {
    if (state === "authenticated") {
      getTareas()
        .then((response) => {
          setData(response.data);
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [state]);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "patente",
      headerName: "Vehículo",
      flex: 1,
    },
    {
      field: "inicio_hora",
      headerName: "Hora de inicio",
      flex: 1,
      valueGetter: (params) => {
        return new Date(params.row.inicio).toLocaleTimeString("es-ES");
      },
    },
    {
      field: "inicio",
      headerName: "Fecha",
      flex: 1,
      valueGetter: (params) => {
        return new Date(params.row.inicio).toLocaleDateString("es-ES");
      },
    },
    {
      field: "origen",
      headerName: "Origen",
      flex: 2,
      valueGetter: (params) => {
        return `${params.row.nombre_direccion_partida} ${
          params.row.numero_direccion_partida
        }, ${comuna_value_label[params.row.comuna_partida]}`;
      },
    },
    {
      field: "destino",
      headerName: "Destino",
      flex: 2,
      valueGetter: (params) => {
        return `${params.row.nombre_direccion_destino} ${
          params.row.numero_direccion_destino
        }, ${comuna_value_label[params.row.comuna_destino]}`;
      },
    },
    {
      field: "descripcion",
      headerName: "Descripción",
      flex: 3,
    },
    {
      field: "ficha",
      headerName: "Ficha",
      flex: 1,
      renderCell: (params) => {
        return (
          <Button
            variant="contained"
            href={`../tarea/detalles/${params.row.id}`}
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
        title="TAREAS"
        subtitle="Gestiona todas las tareas en un solo lugar"
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
        {data && <DataGrid localeText={esES.components.MuiDataGrid.defaultProps.localeText}  rows={data} columns={columns} />}
      </Box>
    </Box>
  );
};

export default Tareas;
