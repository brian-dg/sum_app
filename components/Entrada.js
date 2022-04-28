import Link from 'next/link';
import Image from 'next/image';
import {formatearFecha } from '../helpers';
import style from '../styles/Entrada.module.css'
import styles from '../styles/Listado.module.css';
import stylesP from '../styles/Producto.module.css'

const Entrada = ({entrada}) => {
    const {nombre,descripcion,imagen,published_at,id } = entrada
    const [{url}] = imagen;

    return (
    <div className={styles.listado}>
        <article>    
        <div className={stylesP.productos}> 
             <Image priority='true' layout="responsive" width={600} height={400} src={url} alt = {`imagen destacado ${nombre}`}/>  
            <div className={style.contenido}>
                <h3>{nombre}</h3>
                <p className={style.fecha}>{formatearFecha(published_at)}</p>
                <p className={style.resumen}>{descripcion}</p>
                
                {/*<Link href={`/blog/${url}`}>
                <a className={style.enlace}>Leer entrada</a> 
                </Link>*/}
            </div>
            </div>
        </article>
    </div>

       
    )
}

export default Entrada;