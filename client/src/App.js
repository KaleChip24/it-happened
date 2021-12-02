import './App.css';
// import axios from 'axios';
import { useEffect, useState } from 'react'
import { grabFilms } from './services';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Films from './components/Films';
import Data from './components/Data';

function App() {
  const [films, setFilms] = useState([])

  useEffect(() => {
    const getAllFilms = async () => {
      const res = await grabFilms()
      console.log(res)
      setFilms(res)
    }
    getAllFilms()
  }, [])


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Films films={films} />} />
        <Route path="/new" element={null} />
        <Route path="/films/:id" element={<Data films={films} />} />
        <Route path="/edit/:id" element={null} />
      </Routes>

    </div>
  );
}

export default App;
