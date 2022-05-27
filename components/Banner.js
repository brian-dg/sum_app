import styles from '../styles/Banner.module.css';
import { BsTags,BsGift } from 'react-icons/bs';
import { AiTwotoneShop } from "react-icons/ai";

const Banner = () => {
  return (
    <div className= {`container-fluid mt-2 p-2 bg-secondary`}>
      <div className="row">

        <div  className= {`col `}>
            <div className='row'>
                <div className='col-2'> <i style={{display:'flex'}} ><AiTwotoneShop style={{height:'10rem',width:'10rem', color: 'black'}} /></i> </div>
                <div className='col-10'>
                    <strong className= {`${styles.titulo}`}>Envios</strong>
                    <p className={`${styles.pa}`}>Queres saber mas sobre el envio, Haz click aqui</p>
                </div>
            </div>            
        </div>
        
        <div className= {`col bg-red"`}>
            <div className='row'>
                <div className='col-2'><i style={{display:'flex'}} ><BsGift style={{height:'10rem',width:'10rem', color: 'black'}} /></i> </div>
                <div className='col-10'>
                    <strong className= {`${styles.titulo}`}>Pedidos</strong>
                    <p className={`${styles.pa}`}>Queres saber mas sobre el envio, Haz click aqui</p>
                </div>
            </div>
        </div>

        <div className="col bg-secondary">
            <div className='row'>
                <div className='col-2'><i style={{display:'flex'}} ><BsTags style={{height:'10rem',width:'10rem', color: 'black'}} /></i> </div>
                <div className='col-10'>
                    <strong className= {`${styles.titulo}`}>Nuevos Productos</strong>
                    <p className={`${styles.pa}`}>Queres saber mas sobre el envio, Haz click aqui</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;
