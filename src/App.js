
import './App.css';
import { Blue } from './components/bluelayer/bluelayer';
import { Flash } from './components/flash-sales/flash-sales';
import { NavBar } from './components/navbar/navbar';
import { Products } from './components/products/product';
import { Recommended } from './components/recommended/recommended';
import { Welcome } from './components/welcome/welcome';


const App = () =>{
  return (<div className='App'>
    <NavBar />
    <Welcome />
    <Flash />
    <Products />
    <Recommended />
    <Blue />
    
    </div>
  );
}

export default App;
