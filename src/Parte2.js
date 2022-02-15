import './App.css';
import Img2 from './img/precos.jpeg'

function Parte2(){
    return(
        <div className='barra2'>
              <div className='frase2'>
                  <h1>Preços Acessíveis</h1>
              </div>

              <div className='img2'>
                <img src={Img2}></img>
              </div>
        </div>
    );
}

export default Parte2;