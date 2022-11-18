import logo from './logo.svg';
import imagenHome from "./img/rick-morty.png";
import './App.css';

function App() {

const reqApi = async () => {

  console.log("click");
};

  return (
    <div className="App">
      <header className="App-header">
      <h1 className="title">Rick & Morty</h1>
      <img src={imagenHome} alt="rick and morty" className="img-home"/>
      <button onClick={reqApi} className="btn-search" >Buscar personajes</button>
      </header>
    </div>
  );
}

export default App;
