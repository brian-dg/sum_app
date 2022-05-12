import Layout from "../components/Layout";
import Listado from "../components/Listado";
import Formulario from "../components/Formulario";
import styles from "../styles/Formulario.module.css";



const Productos = ({ productos }) => {
  
  return (
    <Layout pagina="Productos">
      <main className="contenedor">
        <h1 className="heading">Nuestra coleccion de Productos</h1>
        <div>
          <div className={styles.contenedor}>
            <Formulario/>
          </div>
          <Listado productos={productos} />
        </div>
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  { /* const url = `${process.env.API_URL}/productos`; */}
  
  const url = "http://localhost:1337/productos";
  const respuesta = await fetch(url);
  const productos = await respuesta.json();

  return {
    props: {
      productos,
    },
  };
}

export default Productos;
