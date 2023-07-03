import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import axios from "axios";
import { getLongitudeLatitude } from "../../services/user_calls";

import { postTareas } from "../../services/api_calls";
import { getBitacora } from "../../services/api_calls";

import { comuna_options } from "../../data/valueMapping";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";

const Planillas = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();



  const handleFormSubmit = async (values) => {
    /* 
    try {
      values.partida_kilometraje = -1; // To remove eventually
      console.log(values);
      const response = postTareas(values);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    navigate("/tareas");


    */

    const year = values.inicio.split('-')[0];
    const month = values.inicio.split('-')[1]

    try {

      const response = getBitacora(year,month,values.patente);
      console.log("response:", response);
    } catch (error) {
      console.log(error);
    }

    console.log(values);
  
    console.log("patente", values.patente);
  };

  return (
    <Box m="20px">
      <Header title="GENERAR PLANILLAS" subtitle="Crea una nueva tarea" />
      <Box mt="40px" sx={{ display: "flex", justifyContent: "center" }}>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(12, minmax(0, 1fr))"
                sx={{
                  minWidth: "500px",
                }}
              >
                <Typography
                  variant="h5"
                  color={colors.greenAccent[400]}
                  sx={{ gridColumn: "span 12" }}
                >
                  Bitácora
                </Typography>
                <TextField
                  fullWidth
                  variant="filled"
                  type="text"
                  label="Patente"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.patente}
                  name="patente"
                  error={!!touched.patente && !!errors.patente}
                  helperText={touched.patente && errors.patente}
                  sx={{ gridColumn: "span 4" }}
                />

                <TextField
                  fullWidth
                  variant="filled"
                  type="date"
                  label="Mes de la Bitácora"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.inicio}
                  name="inicio"
                  error={!!touched.inicio && !!errors.inicio}
                  helperText={touched.inicio && errors.inicio}
                  sx={{ gridColumn: "span 4" }}
                  InputLabelProps={{ shrink: true }}
                />
              </Box>
              <Box
                mt="20px"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Button type="submit" color="secondary" variant="contained">
                  Crear nueva tarea
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
};




const checkoutSchema = yup.object().shape({
  patente: yup.string().required("Campo requerido"),
  inicio: yup.date().required("Campo requerido"),
});



const initialValues = {  
  patente: "",
  inicio: "",
};


export default Planillas;
