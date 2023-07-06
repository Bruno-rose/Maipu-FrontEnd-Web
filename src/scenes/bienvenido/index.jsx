import { Box } from "@mui/material";
import Header from "../../components/Header";
import Paper from "@mui/material/Paper";

const Bienvenido = () => {

  return (
    <Box m="20px">
      {/* HEADER */}
        <Header
          title="Bienvenido"
          subtitle="Estas en el sistema de administración de la flota de vehículos de la municipalidad de Maipú"
        />
        <Box m="40px 0 0 0" height="75vh" component={Paper}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          asperiores? Ipsa sint voluptatem quam neque ratione! Quisquam iure
          exercitationem modi, labore natus officia in necessitatibus. Magnam
          officia nemo aspernatur vel! Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Quod distinctio fuga sed, neque voluptas quis
          molestias, architecto eaque totam hic at labore veritatis, similique
          amet rerum dolores nobis in aliquid. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Molestias ipsum sit eligendi vitae
          dolores qui praesentium consequuntur officiis! Consequatur qui non
          error quaerat quod praesentium exercitationem vero numquam cumque a.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          mollitia temporibus dicta laboriosam ad sequi sint ducimus nulla
          iusto, eius dolore quidem vitae excepturi fugit alias minus cum
          obcaecati similique.
        </Box>
      </Box>
  );
};

export default Bienvenido;
