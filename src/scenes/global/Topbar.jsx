import { Box, IconButton, useTheme } from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import React from "react";
import { useAuth } from "../../lib/headlessAuth";

const Topbar = () => {
  const { signOut } = useAuth();

  return (
    <Box display="flex" justifyContent="flex-end" p={2}>
      {/* ICONS */}
      <Box display="flex">
        <IconButton type="button" href="\">
          <HomeIcon />
        </IconButton>
        <IconButton type="button" href="\user">
          <PersonOutlinedIcon />
        </IconButton>
        <IconButton type="button" onClick={signOut}>
          <LogoutIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
