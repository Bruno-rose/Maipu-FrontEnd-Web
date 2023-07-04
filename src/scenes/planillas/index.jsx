import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { getBitacora, getRecargas } from "../../services/api_calls";
import { useNavigate } from "react-router-dom";

const Planillas = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();


  /* Bitácora request */
  const handleFormSubmit1 = async (values) => {

    const year = values.inicio.split('-')[0];
    const month = values.inicio.split('-')[1]

    try {

      getBitacora(year,month,values.patente);

    } catch (error) {

      console.log(error);
    }

  };

  /* Recargas request */
  const handleFormSubmit2 = async (values) => {

    const year = values.inicio.split('-')[0];
    const month = values.inicio.split('-')[1]

    try {

      getRecargas(year,month);

    } catch (error) {

      console.log(error);

    }

  };


  return (
    <Box m="20px">
      <Header title="GENERAR PLANILLAS" subtitle="Exportar planillas de Excel con información mensual" />

      {/* BITACORA */}
      <Box mt="40px" sx={{ display: "flex", justifyContent: "left" }}>
        <Formik
          onSubmit={handleFormSubmit1}
          initialValues={initialValues1}
          validationSchema={checkoutSchema1}
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
                  Generar Bitácora
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>

      {/* RECARGAS */}
      <Box mt="40px" sx={{ display: "flex", justifyContent: "left" }}>
        <Formik
          onSubmit={handleFormSubmit2}
          initialValues={initialValues2}
          validationSchema={checkoutSchema2}
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
                  Recargas de Bencina
                </Typography>

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
                  Generar Recargas
                </Button>
              </Box>
            </form>
          )}
        </Formik>
      </Box>





    </Box>
  );
};




const checkoutSchema1 = yup.object().shape({
  patente: yup.string().required("Campo requerido"),
  inicio: yup.date().required("Campo requerido"),
});

const initialValues1 = {  
  patente: "",
  inicio: "",
};



const checkoutSchema2 = yup.object().shape({
  inicio: yup.date().required("Campo requerido"),
});

const initialValues2 = {  
  inicio: "",
};



export default Planillas;
