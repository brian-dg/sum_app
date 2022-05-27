import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import { BsSearch } from 'react-icons/bs';
import { useState } from "react";
import useProductos from "../hooks/useProductos";

const Header = () => {
    const {busquedaProductos} = useProductos();

    const [search,setSearch] = useState({
        busqueda:''
    });

    const handleSubmit = e => {
        e.preventDefault();

        if(Object.values(busqueda).includes('')){
            console.log('error')
            return
        }
        busquedaProductos(search);
    }
    return(
      <header className={styles.header}>
          <div className="contenedor">
                <div className={styles.barra}>
                    <div className={styles.logo}>
                        <Link href="/">
                            <a>
                                <Image width={400} height={100} src="/img/logo.svg"  alt="Imagen logo"/>
                            </a>
                        </Link>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className={styles.wrap}>
                            <div className={styles.search}>
                                <input
                                    type="text"
                                    id="busqueda"
                                    name="busqueda"
                                    value={search.busqueda}
                                    onChange={e => setSearch({
                                        ...search,
                                        [e.target.name] : e.target.value
                                    })}
                                    className={styles.searchTerm}
                                    placeholder="What are you looking for?"/>
                                <button type="submit" className={styles.searchButton}>
                                    <i style={{display:'flex'}} ><BsSearch style={{color: 'black', textAlign:'start,'}} /></i> 
                                </button>
                            </div>
                        </div>
                    </form>

                    <div className={styles.seccion}>
                        <nav className={styles.navegacion}>                         
                            <Link href="/">Inicio</Link>
                            <Link href="/destacados">Destacados</Link>
                            <Link href="/productos">Productos</Link>
                            <Link href="/contacto">Contacto</Link>
                        </nav>
                    </div>

                </div>
               
          </div>
      </header>  

    );
}


export default Header;