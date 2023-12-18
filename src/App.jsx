import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Contacts from './components/Contacts';
import Head from './components/Head';
import Register from './components/Register';

function App() {

  return (
    <>
      <Router>
        <div className="app">
          <Head/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/register" element={<Register/>} />
          <Route path="/contacts" element={<Contacts/>}/>
          <Route ></Route>
        </Routes>
        </div>
       
      </Router>
    </>
  )
}

export default App
