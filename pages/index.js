import react from 'react';
import Layout from '../components/Layout';
import Carousels from '../components/Carousels';

export default function Home() {
 
  return (
   
    
      <Layout pagina="Inicio">
        <main className='contenedor'>
          <h1 className='heading'>Nuestra coleccion</h1>
          {/*<Listado
            />*/}
            <Carousels/>
        </main>

        
        <section className='contenedor'>
            {/*<ListadoBlog
            />*/}
        </section>
      </Layout>

  )
}
