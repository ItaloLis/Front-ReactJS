import './App.css';
import Emoji1 from './img/emojiestrelinha.png'
import Emoji2 from './img/explodindo.png'
import Emoji3 from './img/susto.png'
import Destino1 from './img/maldivas.jpg'
import Destino2 from './img/amazonas.jpeg'
import Destino3 from './img/niagara.jpg'

function Pacotes(){
    return(
        <div>
              <div className='anuncio'>
                    <div className='img3'>
                        <img src={Destino1}></img>
                    </div>
                    <h2>Lua de Mel?! <br></br> Que tal Ilhas Maldivas?</h2>
                    <img className='Emoji' src={Emoji1}/>
                    <div className='botao'>
                            <h4>Pacotes a partir de:</h4>
                            <h2 className='valor'>R$3.500</h2>
                    </div>
              </div>

              <div className='anuncio'>
                    <div className='img3'>
                        <img src={Destino2}></img>
                    </div>
                    <h2>Descubra os encantos da Amazônia!</h2>
                    <img className='Emoji' src={Emoji2}></img>
                    <div className='botao'>
                            <h4>Pacotes a partir de:</h4>
                            <h2 className='valor'>R$973</h2>
                    </div>
              </div>
              <div className='anuncio'>
                    <div className='img3'>
                        <img src={Destino3}></img>
                    </div>
                    <h2>Cataratas do Niágara, <br></br>bora?</h2>
                    <img className='Emoji' src={Emoji3}></img>
                    <div className='botao'>
                            <h4>Pacotes a partir de:</h4>
                            <h2>R$2.700</h2>
                    </div>
              </div>
          </div>
    );
}

export default Pacotes;