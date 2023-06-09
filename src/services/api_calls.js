import axios from "axios";

axios.defaults.headers.common["ngrok-skip-browser-warning"] = "any";

export const server_endpoint = "http://172.25.7.47/api";
// const server_endpoint = "https://4224-200-27-195-4.ngrok-free.app/";
const hash_4_login = "xd";

const config = {
  headers: {
    "sesion-hash": hash_4_login,
  },
};

export const getVehiculos = async () => {
  return await axios.get(server_endpoint + "/vehiculos", config);
};

export const getVehiculo = async (mypatente) => {
  return await axios.get(
    server_endpoint + "/vehiculos/patente?patente=" + mypatente,
    config
  );
};

export const getConductores = async () => {
  return await axios.get(server_endpoint + "/usuarios/conductores", config);
};

export const getConductor = async (id) => {
  return await axios.get(
    server_endpoint + "/usuarios/conductores/informacion?rut=" + id,
    config
  );
};

export const getUser = async (id) => {
  return await axios.get(server_endpoint + "/usuarios?rut=" + id, config);
};

export const getConductorbyPatente = async (id) => {
  return await axios.get(
    server_endpoint + "/vehiculos/conductor/actual?patente=" + id,
    config
  );
};

export const getTareas = async () => {
  return await axios.get(server_endpoint + "/tareas", config);
};

export const getTarea = async (id) => {
  return await axios.get(server_endpoint + "/tareas/id?id=" + id, config);
};

export const postTareas = async (values) => {
  return await axios.post(server_endpoint + "/tareas", values, config);
};

export const postVehiculos = async (values) => {
  return await axios.post(server_endpoint + "/vehiculos", values, config);
};

export const getPathLicencia = async (id) => {
  return await axios.get(
    server_endpoint + "/usuarios/licencia?rut=" + id,
    config
  );
};

export const getPathRevision = async (id) => {
  return await axios.get(server_endpoint + "/revision?patente=" + id, config);
};

export const getLicencia = async (mediaPath) => {
  return await axios.get(server_endpoint + mediaPath, config);
};

export const login = async (rut, contrasenna) => {
  const response = await axios.post(
    server_endpoint + "/autentificar",
    {
      rut,
      contrasenna,
    },
  );
  const token = response.data.hash;
  console.log(response);
  if (token) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

export const isAuthenticated = () => {
  const user = localStorage.getItem("user");
  if (!user) {
    return {};
  }
  return JSON.parse(user);
};
