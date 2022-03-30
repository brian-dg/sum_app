import Layout from "../../components/Layout"
import Image from "next/image";
import { formatearFecha} from '../../helpers/index';
import styles from '../../styles/producto.module.css';
const EntradaProducto = ({productos}) => {
    const {descripcion,imagen,nombre,precio,id} = productos
    
    console.log(imagen)
    
    return(
        <Layout
        pagina={nombre}>
            <main className="contenedor">
                <h1 className="heading">{nombre}</h1>
                <article className={styles.entrada}>
                   {/*<Image layout="responsive" width={800} height={600} src={} alt={`Imagen de entrada ${nombre}`}/>*/ } 

                    <div className={styles.contenido}>
                        <p className={styles.fecha}> {formatearFecha(published_at)}</p>
                        <p className={styles.texto}>{descripcion}</p>
                    </div>
                </article>
            </main>
        </Layout>
    )
}


export async function getServerSideProps({query: {id}}) {
  
    const urlProductos = `${process.env.NEXT_PUBLIC_API_URL}/productos?id=${id}`
    const respuesta = await fetch(urlProductos);
    const productos = await respuesta.json();

    console.log(productos)
    return {
        props: {
            productos
        }
    }
}


export default EntradaProducto;