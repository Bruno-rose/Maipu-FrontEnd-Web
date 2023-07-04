import { Box, useTheme, Typography } from "@mui/material";
import Header from "../../components/Header";
import { useAuth } from "../../lib/headlessAuth";
import TableUsuario from "./table_usuario";

const Usuario = () => {
  const { user } = useAuth();
  console.log("view", user);
  return (
    <Box m="20px">
      {/* HEADER */}
      <Header
        title="Perfil"
        subtitle="Información de usuario"
      />
      {user && <TableUsuario data={user} />}
    </Box>
  );
};

export default Usuario;
