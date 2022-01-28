
import './App.css';
import { Flash } from './components/flash-sales/flash-sales';
import { Welcome } from './components/welcome/welcome';


const App = () =>{
  return (<div className='App'>
    <Welcome />
    <Flash />
    </div>
  );
}

export default App;
