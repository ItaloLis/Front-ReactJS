import React, { Component } from 'react';

import './App.css';
import Titulo from './Titulo';
import Menu from './Menu';
import Parte1 from './Parte1';
import Parte2 from './Parte2';
import Ofertas from './Ofertas';
import Pacotes from './Pacotes';
import MaisPacotes from './MaisPacotes';
import Feedback from './Feedback';
import Form from './Form';

class App extends Component {
  render(){
    return (
       <div>

          <Titulo/>

          <Menu/>

          <Parte1/>

          <Parte2/>

          <Ofertas/>

          <Pacotes/>

          <MaisPacotes/>

          <Feedback/>

          <Form/>
          
       </div>
    );
  }
}

export default App;
