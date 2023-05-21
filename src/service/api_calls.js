import axios from "axios";

const server_endpoint = "http://172.25.7.47/api/v2";

export const getVehiculos = async () => {
  return await axios.get(server_endpoint + "/vehiculos");
};

export const getConductores = async () => {
  return await axios.get(server_endpoint + "/usuarios/conductores");
};

export const getTareas = async () => {
  return await axios.get(server_endpoint + "/tareas");
};

export const postVehiculos = async (values) => {
    return await axios.post(server_endpoint + "/vehiculos", values);
  };
  