
import './App.css';
import { Flash } from './components/flash-sales/flash-sales';
import { Products } from './components/products/product';
import { Welcome } from './components/welcome/welcome';


const App = () =>{
  return (<div className='App'>
    <Welcome />
    <Flash />
    <Products />
    </div>
  );
}

export default App;
