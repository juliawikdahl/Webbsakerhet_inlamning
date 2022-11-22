
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './views/Home';
import Createblog from './views/Createblog';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='create' element={<Createblog/>} />
        </Routes>
    </div>
  );
}

export default App;
