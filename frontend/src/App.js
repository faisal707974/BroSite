import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import New_registration from './pages/New_registration/New_registration'
import Fumigation from './pages/Fumigation/Fumigation';
import Manager from './pages/Manager/Manager';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Home modal={true}/>} />
          <Route path='/new_registration' element={<New_registration/>} />
          <Route path='/fumigation' element={<Fumigation/>} />
          <Route path='/manager' element={<Manager/>} />
        </Routes>
      </Router>
    </Provider>

  )
}

export default App;
