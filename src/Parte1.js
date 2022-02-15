import './App.css';
import Img1 from './img/noronha.jpg'

function Parte1(){
    return(
        <div className='barra2'>
              <div className='img1'>
                  <img src={Img1}></img>
              </div>
              
              <div className='frase1'>
                  <h1>Destinos Paradisíacos</h1>
              </div>
        </div>
    );
}

export default Parte1;