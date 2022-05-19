import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import { BsSearch } from 'react-icons/bs';

const Header = () => {
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

                    
                        <div className={styles.wrap}>
                            <div className={styles.search}>
                                <input type="text" className={styles.searchTerm} placeholder="What are you looking for?"/>
                                <button type="submit" className={styles.searchButton}>
                                    <i style={{display:'flex'}} ><BsSearch style={{color: 'black', textAlign:'start,'}} /></i> 
                                </button>
                            </div>
                        </div>

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