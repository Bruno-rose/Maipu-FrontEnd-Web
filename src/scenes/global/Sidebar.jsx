import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import DriveEtaOutlinedIcon from "@mui/icons-material/DriveEtaOutlined";
import { useAuth } from "../../lib/headlessAuth";

import GridOnIcon from '@mui/icons-material/GridOn';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const { user } = useAuth();
  
  
  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed} width={"300px"}>
        <Menu iconShape="square">
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  FLOTA MAIPÚ
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && user && (
            <Box mb="25px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="100px"
                  height="100px"
                  src={user.ruta_foto}
                  style={{ cursor: "pointer", borderRadius: "50%" }}
                />
              </Box>
              <Box textAlign="center">
              <Typography
                  variant="h2"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  {user.nombre} {user.apellido1} {user.apellido2} 
                </Typography>
                {/* <Typography variant="h5" color={colors.greenAccent[500]}>
                  Administrador Flota
                </Typography> */}
              </Box>
            </Box>
          )}

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Typography
              variant="h4"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Flota
            </Typography>
            <Item
              title="Vehículos"
              to="/vehiculos"
              icon={<AirportShuttleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Agregar Vehículo"
              to="/agregar_vehiculo"
              icon={<AddOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h4"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Personal
            </Typography>
            <Item
              title="Conductores"
              to="/conductores"
              icon={<DriveEtaOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Agregar Conductor"
              to="/agregar_conductor"
              icon={<AddOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h4"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Tareas
            </Typography>
            <Item
              title="Tareas"
              to="/tareas"
              icon={<AssignmentOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Agregar Tarea"
              to="/agregar_tarea"
              icon={<AddOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />


            <Typography
              variant="h4"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Planillas
            </Typography>

            <Item
              title="Generar Planillas"
              to="/planillas"
              icon={<GridOnIcon />}
              selected={selected}
              setSelected={setSelected}
            />

          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
