import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
// import Register from './components/registerNew/newRegister';
import Register from './pages/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'
import store from './redux/store';
import Login from './pages/Login/Login';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Home modal={true}/>} />
        </Routes>
      </Router>
    </Provider>

  )
}

export default App;
