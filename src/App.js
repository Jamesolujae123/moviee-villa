import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Videodetails from './pages/Movie-details';

function App() {
  return (
   <>
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/movie-details/:id' element={<Videodetails />}/>
    </Routes> 
   </>
  );
}

export default App;
