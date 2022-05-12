import '../styles/globals.css'
import { CategoriaProvider } from '../context/CategoriasProvider';
import { ProductosProvider } from '../context/ProductosProvider';

function MyApp({ Component, pageProps }) {

  return(
    <CategoriaProvider>
      <ProductosProvider>
        <Component {...pageProps} />
      </ProductosProvider>
    </CategoriaProvider>
  
  )
}

export default MyApp
