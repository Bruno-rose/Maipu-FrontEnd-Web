import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";

import { Outlet } from "react-router-dom";
import { tokens } from "./theme";

import Vehiculos from "./scenes/vehiculos";
import AgregarVehiculo from "./scenes/agregar_vehiculo";
import FichaVehiculo from "./scenes/ficha_vehiculo";

import Conductores from "./scenes/conductores";
import AgregarConductor from "./scenes/agregar_conductor";
import FichaConductor from "./scenes/ficha_conductor";

import AgregarTarea from "./scenes/agregar_tarea";
import Tareas from "./scenes/tareas";
import FichaTarea from "./scenes/ficha_tarea";

import { CssBaseline, ThemeProvider, useTheme } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import LogIn from "./scenes/login";

const AppLayoutSideTopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <>
      <div
        className="app"
        style={{
          backgroundColor: colors.white_maipu[300],
          overflow: "scroll",
        }}
      >
        <Sidebar />
        <main className="content">
          <Topbar />
          <Outlet />
        </main>
      </div>
    </>
  );
};

const AppLayout = () => (
  <>
    <div className="app">
      <main className="content">
        <Outlet />
      </main>
    </div>
  </>
);

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/login" element={<LogIn />} />
          </Route>
          <Route element={<AppLayoutSideTopBar />}>
            <Route path="/" />
            {/* Vehiculos */}
            <Route path="/vehiculos" element={<Vehiculos />} />
            <Route path="/agregar_vehiculo" element={<AgregarVehiculo />} />
            <Route path="/vehiculo/detalles/:id" element={<FichaVehiculo />} />
            {/* Conductores */}
            <Route path="/conductores" element={<Conductores />} />
            <Route path="/agregar_conductor" element={<AgregarConductor />} />
            <Route
              path="/conductor/detalles/:id"
              element={<FichaConductor />}
            />
            {/* Tareas */}
            <Route path="/tareas" element={<Tareas />} />
            <Route path="/agregar_tarea" element={<AgregarTarea />} />
            <Route path="/tarea/detalles/:id" element={<FichaTarea />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
