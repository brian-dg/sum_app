import react from 'react';
import Layout from '../components/Layout';
import Carousels from '../components/Carousels';
import Ofertas from '../components/Ofertas';
import Banner from '../components/Banner';
export default function Home() {
 
  return (
   
    
      <Layout pagina="Inicio">
        <main className='contenedor'>
        
          <h1 className='heading'>Nuestra Clasicos</h1>
          <Carousels/>
          <Banner/>
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
