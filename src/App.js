import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";

import Vehiculos from "./scenes/vehiculos";
import AgregarVehiculo from "./scenes/agregar_vehiculo";
import FichaVehiculo from "./scenes/ficha_vehiculo";

import Conductores from "./scenes/conductores";
import AgregarConductor from "./scenes/agregar_conductor";
import FichaConductor from "./scenes/ficha_conductor";

import AgregarTarea from "./scenes/agregar_tarea";
import Tareas from "./scenes/tareas";
import FichaTarea from "./scenes/ficha_tarea";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              {/* Vehiculos */}
              <Route path="/vehiculos" element={<Vehiculos />} />
              <Route path="/agregar_vehiculo" element={<AgregarVehiculo />} />
              <Route
                path="/vehiculo/detalles/:id"
                element={<FichaVehiculo />}
              />
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
              <Route
                path="/tarea/detalles/:id"
                element={<FichaTarea />}
              />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
