import './App.css';
// import axios from 'axios';
import { useEffect, useState } from 'react'
import { grabFilms } from './services';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Data from './components/Data';
import Films from './components/Films';
import Form from './components/Form';

function App() {
  const [films, setFilms] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const getAllFilms = async () => {
      const res = await grabFilms()
      console.log(res)
      setFilms(res)
    }
    getAllFilms()
  }, [toggle])


  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/"
          element={<Films films={films} />} />
        <Route path="/new"
          element={<Form
            setToggle={setToggle} />}
        />
        <Route path="/films/:id"
          element={<Data films={films}
            setToggle={setToggle} />}
        />
        <Route path="/edit/:id"
          element={<Form films={films}
            setToggle={setToggle} />}
        />
        <Route path="/featured" element={null} />
      </Routes>

    </div>
  );
}

export default App;
