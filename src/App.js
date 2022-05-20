import './styles/tailwind.css';
import './styles/custom.css';
import { BrowserRouter} from 'react-router-dom';


import Header from './pages/Header';
import AppRouter from './AppRouter';



function App() {
  return (
    <div >
      <BrowserRouter>
      <Header/>
      <AppRouter/>
     
      
      </BrowserRouter>
    </div>
  );
}

export default App;
