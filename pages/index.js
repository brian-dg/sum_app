import react from 'react';
import Layout from '../components/Layout';
import Carousels from '../components/Carousels';
import Ofertas from '../components/Ofertas';
export default function Home() {
 
  return (
   
    
      <Layout pagina="Inicio">
        <main className='contenedor'>
        <Carousels/>
          <h1 className='heading'>Nuestra Clasicos</h1>
          {/*<Listado
            />*/}
            <Ofertas/>
        </main>

        
        <section className='contenedor'>
            {/*<ListadoBlog
            />*/}
        </section>
      </Layout>

  )
}
