import Layout from "../components/Layout";
import Link from 'next/link';
import styles from '../styles/noEncontrado.module.css';

const noEncontrado = () => {
    return(
        <Layout>
            <div className={styles.no_encontrado}>
                <h1 className="heading"> Pagina no encontrada</h1>
                <Link href="/"> Volver al Inicio</Link>
            </div>
        </Layout>
    )
}

export default noEncontrado;