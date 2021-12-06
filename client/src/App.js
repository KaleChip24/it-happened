import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react'
import { grabFilms, grabFeatures } from './services/index';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Navbar';
import Data from './components/Data';
import Films from './components/Films';
import Form from './components/Form';
import Featured from './components/features/Featured';
import CatData from './components/features/CatData';


function App() {
  const [films, setFilms] = useState([])
  const [features, setFeatures] = useState([])
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const getAllFilms = async () => {
      const res = await grabFilms()
      console.log(res)
      setFilms(res)
    }
    getAllFilms()
  }, [toggle])

  useEffect(() => {
    const getAllFeatures = async () => {
      const res = await grabFeatures()
      console.log(res)
      setFeatures(res)
    }
    getAllFeatures()
  }, [])


  return (
    <div className="App">
      <Nav />
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
        <Route path="/featured" element={<Featured features={features} />} />
        <Route path="/featured/:id" element={<CatData features={features} />} />
      </Routes>

    </div>
  );
}

export default App;
