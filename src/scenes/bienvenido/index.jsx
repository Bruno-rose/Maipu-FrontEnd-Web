import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Bienvenido = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Bienvenido" subtitle="Estas en el sistema de administración de la flota de vehículos de la municipalidad de Maipú" />

      </Box>
    </Box>
  );
};

export default Bienvenido;
