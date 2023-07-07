import { Box, Typography } from "@mui/material";
import Header from "../../components/Header";
import Paper from "@mui/material/Paper";

const Bienvenido = () => {
  return (
    <Box m="20px">
      {/* HEADER */}
      <Header
        title="Bienvenido"
        subtitle="Estás en el sistema de administración de la flota de vehículos de la municipalidad de Maipú"
      />
      <Box m="40px 0 0 0" padding={6} height="50vh" component={Paper}>
      <Typography variant="h4" component="h1" gutterBottom>
        ¡Bienvenido al sitio web de administración de flotas de vehículos!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Aquí en nuestra plataforma, te ofrecemos una solución integral para gestionar eficientemente tus vehículos, conductores y tareas asociadas. Ya sea que administres una pequeña flota de vehículos o una gran operación, nuestro sitio está diseñado para simplificar tus tareas diarias y proporcionarte un control completo sobre tus activos.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Con nuestra intuitiva interfaz, puedes agregar fácilmente conductores y vehículos a tu flota. Cada uno de ellos tiene su propia ficha detallada, donde puedes acceder a información relevante, como datos de contacto, historial de servicios y registros de mantenimiento. Además, puedes asignar tareas específicas a conductores y vehículos, lo que te permite realizar un seguimiento de las actividades y mantener un registro claro de las responsabilidades.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Nuestras tablas personalizables te brindan una visión general rápida de tu flota. Puedes visualizar información clave, como el rendimiento de los conductores, el consumo de combustible y el estado de mantenimiento de los vehículos. También puedes generar resúmenes históricos de las recargas de combustible, lo que te permite analizar el consumo y planificar eficientemente tus próximas recargas.
      </Typography>
      <Typography variant="body1" gutterBottom>
        Además de todas estas características, también ofrecemos una función de informes detallados. Puedes generar informes completos sobre el rendimiento de la flota, el consumo de combustible y las tareas realizadas. Estos informes te ayudarán a tomar decisiones informadas y optimizar tus operaciones.
      </Typography>
      <Typography variant="body1">
        En resumen, nuestra plataforma de administración de flotas de vehículos está diseñada para proporcionarte un control total sobre tus activos y actividades relacionadas. Te brindamos las herramientas necesarias para simplificar tu trabajo diario, optimizar el rendimiento de tu flota y tomar decisiones estratégicas basadas en datos. ¡Explora nuestras funciones y descubre cómo podemos ayudarte a gestionar eficientemente tu flota de vehículos!
      </Typography>
      </Box>
    </Box>
  );
};

export default Bienvenido;
