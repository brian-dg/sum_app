import Layout from "../components/Layout";
import Entrada from "../components/Entrada";
import styles from '../styles/Listado.module.css';

const Destacados = ({entradas}) => {
  
    return(
        <Layout pagina= "Destacados">
            <main className="contenedor">
                <h2 className="heading">Destacados</h2>

                <div className={styles.listado}>
                    {entradas.map(entrada => (
                        <Entrada 
                            key={entrada.id}
                            entrada = {entrada}
                        />
                    ))}
                </div>
            </main>         
        </Layout>
    );
}

export async function getServerSideProps() {
    const url = "http://localhost:1337/productos?categorias=3"
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()

  

    return {
        props: {
            entradas
        }
    }
}
export default Destacados;