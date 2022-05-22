import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import NewRegistration from './pages/NewRegistration/NewRegistration'

import Sidebar from './components/Sidebar/Sidebar';

import Brocamp from './pages/Brocamp/Home/Brocamp';
import TechTasks from './pages/Brocamp/TechTasks/TechTasks';

import Manager from './pages/Manager/Home/Home'
import Workshop from './pages/Manager/Workshop/Workshop';
import TasksManagement from './pages/Manager/TasksManagement/TasksManagement';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Home modal={true} />} />
          <Route path='/new_registration' element={<NewRegistration />} />

          <Route path='/brocamp' element={<Brocamp />} />
          <Route path='/brocamp/tech_tasks' element={<TechTasks/>} />

          <Route path='/manager' element={<Manager/>} />
          <Route path='/manager/workshop' element={<Workshop status={'scheduled'} />} />
          <Route path='/manager/workshop/event_day' element={<Workshop status={'eventDay'}/>} />
          <Route path='/manager/tasks_management' element={<TasksManagement/>} />

          <Route path='/test' element={<Sidebar />} />
        </Routes>
      </Router>
    </Provider>

  )
}

export default App;
