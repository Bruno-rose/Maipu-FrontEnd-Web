import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from '@mui/icons-material/Home';

import React from "react";

// import { Link, useHistory } from 'react-router-dom';

import UserContext from "../../services/auth/UserContext";

const Topbar = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [currentUser, setCurrentUser] = useContext(UserContext);
  // const history = useHistory();

  const handleLogOut = () => {
    localStorage.removeItem("user");
    setCurrentUser({});
    navigate("/login");
  };

  return (
    <Box display="flex" justifyContent="flex-end" p={2}>
      {/* ICONS */}
      <Box display="flex">
        <IconButton type="button" href="\">
        <HomeIcon />
        </IconButton>

        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
        <IconButton type="button" onClick={handleLogOut}>
          <LogoutIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
