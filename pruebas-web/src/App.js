import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <div className="botones">
        <div className="btn1">
          <label>
            Opcion 1
            <button className="opcion1" type="submit">
              Computador gamer
            </button>
          </label>
        </div>
        <div className="btn2">
          <label>
            Opcion 2
            <button className="opcion2" type="submit">
              Computador de oficina
            </button>
          </label>
        </div>
        <div className="btn3">
          <label>
            Opcion 3
            <button className="opcion3" type="submit">
              Computador de renderizados
            </button>
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
