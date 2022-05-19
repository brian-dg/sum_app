import Link from 'next/link';
import Image from 'next/image';

import style from '../styles/Entrada.module.css'
import stylesP from '../styles/Producto.module.css'

const Entrada = ({entrada}) => {
    const {nombre,descripcion,imagen,published_at,id,precio } = entrada
    const [{url}] = imagen;

    return (   
        <div className={style.productos}> 
             <Image priority='true' layout="responsive" width={600} height={400} src={url} alt = {`imagen destacado ${nombre}`}/>  
            
            <div className={stylesP.contenido}>
                <h5 className={style.titulo}>{nombre}</h5>
                <p className={style.precio}>${precio}</p>
                <Link href={`/productos/${id}`}>
                    <a className={stylesP.enlace}>Ver Producto</a>
                </Link> 
                {/*<Link href={`/blog/${url}`}>
                <a className={style.enlace}>Leer entrada</a> 
                </Link>*/}
            </div>
        </div> 
    )
}

export default Entrada;