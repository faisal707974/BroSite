import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
// import Register from './components/registerNew/newRegister';
import Register from './components/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register/>} />
      </Routes>
    </Router>

  )
}

export default App;
