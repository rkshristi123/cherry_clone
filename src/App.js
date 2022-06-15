import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import { Offers } from './components/Offers';
import {Filters} from './components/Filters'
import {Restaurents} from './components/Restaurents'
import Restaurent from './data/Restaurent.json'
 
function App() {
  return (
    <div  >
     <Navbar/>
     <Offers/>
     <section className="near-you">

     <Filters/>
     <Restaurents Restaurent={Restaurent}/>
     </section>
     
    </div>
  );
}

export default App;
