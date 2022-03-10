import Link from 'next/link';
import Image from 'next/image';
import {formatearFecha } from '../helpers';
import style from '../styles/Entrada.module.css'

const Entrada = ({entrada}) => {
    const {nombre,descripcion,imagen,published_at,id, url } = entrada
    
    var arrayImagen = imagen.map(function(ima) {
       
        return ima
       
    })
    console.log(arrayImagen)

    return (
        <article>                         
           {/* <Image priority='true' layout="responsive" width={800} height={600} src={arrayImagen.url} alt = {`imagen destacado ${nombre}`}/>  */}
            <div className={style.contenido}>
                <h3>{nombre}</h3>
                <p className={style.fecha}>{formatearFecha(published_at)}</p>
                <p className={style.resumen}>{descripcion}</p>
                    {/*<Link href={`/blog/${url}`}>
                     <a className={style.enlace}>Leer entrada</a> 
                     </Link>*/}
            </div>  
        </article>
    )
}

export default Entrada;