import axios from "axios";

axios.defaults.headers.common['ngrok-skip-browser-warning'] = 'any';

const server_endpoint = "http://172.25.7.47/api";
// const server_endpoint = "https://4224-200-27-195-4.ngrok-free.app/";
const hash_4_login = "xd";

const config = {
  headers:{
    'sesion-hash': hash_4_login,
  }
}

export const getVehiculos = async () => {
  return await axios.get(server_endpoint + "/vehiculos", config);
};

export const getVehiculo = async (patente) => {
  return await axios.get(server_endpoint + "/vehiculos/" + patente, config);
};

export const getConductores = async () => {
  return await axios.get(server_endpoint + "/usuarios/conductores", config);
};

export const getConductor = async (id) => {
  return await axios.get(server_endpoint + "/usuarios/conductores/" + id, config);
};

export const getTareas = async () => {
  return await axios.get(server_endpoint + "/tareas", config);
};

export const getTarea = async (id) => {
  return await axios.get(server_endpoint + "/tareas/patente?patente=" + id, config);
};

export const postTareas = async (values) => {
  return await axios.post(server_endpoint + "/tareas", values, config);
};

export const postVehiculos = async (values) => {
  return await axios.post(server_endpoint + "/vehiculos", values, config);
};
