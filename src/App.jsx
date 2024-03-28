import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import './App.css'
import NavBar from './components/NavBar';
import Home from './Home';
import Counter from './pages/Counter';
import TickTock from './pages/TickTock';
import Ratings from './pages/Ratings';

function App() {
  return (
    <>
     <BrowserRouter>
  <NavBar/>
   <Routes>
 <Route path="/home" element={<Home />}/>
 <Route path="/count" element={<Counter />}/>
 <Route path="/ratings" element={<Ratings />}/>
 <Route path="/currenttime" element={<TickTock />}/>
  </Routes> 
  </BrowserRouter> 
    </>
  )
}

export default App;
