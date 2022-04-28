import Link from "next/link";
import styles from "../styles/Header.module.css";
import Image from "next/image";
const Header = () => {
    return(
      <header className={styles.header}>
          <div className="contenedor">
                <div className={styles.barra}>
                <Link href="/">
                    <a>
                        <Image width={400} height={100} src="/img/logo.svg"  alt="Imagen logo"/>
                    </a>
                </Link>

                <nav className={styles.navegacion}>
                    <Link href="/">Inicio</Link>
                    <Link href="/destacados">Destacados</Link>
                    <Link href="/productos">Productos</Link>
                    <Link href="/contacto">Contacto</Link>
                </nav>
                </div>
               
          </div>
      </header>  

    );
}


export default Header;