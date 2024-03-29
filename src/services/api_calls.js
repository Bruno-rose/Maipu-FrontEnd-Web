import axios from "axios";

export const baseURL =
  process.env.API_URL || "https://1172-200-27-195-4.ngrok-free.app";
export const client = axios.create({
  baseURL: baseURL,
  timeout: 6000,
  headers: { "ngrok-skip-browser-warning": "any" },
});

axios.defaults.headers.common["ngrok-skip-browser-warning"] = "any";
client.defaults.headers.common["ngrok-skip-browser-warning"] = "any";

client.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.data?.name)
      return Promise.reject(error?.response?.data?.name);
    return Promise.reject(error);
  }
);

export const getVehiculos = async () => {
  const response = await client.get("/vehiculos");
  return response;
};

export const getVehiculo = async (mypatente) => {
  return await client.get("/vehiculos/patente?patente=" + mypatente);
};

export const getVehiculoConductorByVehiculo = async (mypatente) => {
  return await client.get("/vehiculo-conductor/vehiculo?patente=" + mypatente);
};


export const getBitacora= async (year,month,patente) => {

  try {

    let response = await client.get("/tareas/bitacora",
    {params:{year: year , month: month, patente: patente},responseType: 'blob'}
    );

    console.log(response.data);

    const href = await URL.createObjectURL(response.data);
    const link = await document.createElement('a');
    link.href = href;
    link.setAttribute(
      'download', 
      `Bitacora_${patente}_${month}-${year}.xlsx`); //or any other extension
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
    
  } catch (e) {

    console.log(e);

  }
};

export const getRecargas = async (year,month,patente) => {

  try {

    let response = await client.get("/recargaCombustible/xlsx",
    {params:{year: year , month: month},responseType: 'blob'}
    );

    console.log(response.data);

    const href = await URL.createObjectURL(response.data);
    const link = await document.createElement('a');
    link.href = href;
    link.setAttribute(
      'download', 
      `Recargas_${month}-${year}.xlsx`); //or any other extension
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(href);
    
  } catch (e) {

    console.log(e);

  }
  
};






export const postVehiculoConductor = async ({ patente, rut, fecha }) => {
  // Desasignar conductor
  return await client.post("/vehiculo-conductor/inicio", {
    patente,
    rut,
    fecha,
  });
};

export const putTermino = async ({ patente, fecha }) => {  
  return await client.put("/vehiculo-conductor/termino", {
    patente,
    fecha,
  });
};


export const getConductores = async () => {
  return await client.get("/usuarios/conductores");
};

export const getConductor = async (id) => {
  return await client.get("/usuarios/conductores/informacion?rut=" + id);
};

export const getUser = async (id) => {
  return await client.get("/usuarios?rut=" + id);
};

export const getConductorbyPatente = async (id) => {
  return await client.get("/vehiculos/conductor/actual?patente=" + id);
};

export const getTareas = async () => {
  return await client.get("/tareas");
};

export const getTarea = async (id) => {
  return await client.get("/tareas/id?id=" + id);
};

export const postTareas = async (values) => {
  return await client.post("/tareas", values);
};

export const postVehiculos = async (values) => {
  return await client.post("/vehiculos", values);
};

export const getPathLicencia = async (id) => {
  return await client.get("/usuarios/licencia?rut=" + id);
};

export const getPathRevision = async (id) => {
  return await client.get("/revision?patente=" + id);
};

export const getLicencia = async (mediaPath) => {
  return await client.get(mediaPath);
};



export const login = async (rut, contrasenna) => {
  const response = await client.post("/autentificar", {
    rut,
    contrasenna,
  });
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

export default client;
