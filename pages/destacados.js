import Layout from "../components/Layout";
import Entrada from "../components/Entrada";


const Destacados = ({entradas}) => {
  
    return(
        <Layout pagina= "Destacados">
            <main className="contenedor">
                <h2 className="heading">Destacados</h2>

                <div>
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
    const url = "http://localhost:1337/productos"
    const respuesta = await fetch(url)
    const entradas = await respuesta.json()

  

    return {
        props: {
            entradas
        }
    }
}
export default Destacados;