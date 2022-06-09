import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProtectedRoute from './Utils/ProtectedRoute';

import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Sidebar from './components/Sidebar/Sidebar';

import NewRegistration from './pages/NewRegistration/NewRegistration'

import Brocamp from './pages/Brocamp/Home/Brocamp';
import TechTasks from './pages/Brocamp/TechTasks/TechTasks';
import Brocamp_Review from './pages/Brocamp/Review/Review';

import Advisor from './pages/Advisor/Home/Home'
import Students from './pages/Advisor/Students/Students';
import Advisor_Review from './pages/Advisor/Review/Review';

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

          <Route path='/brocamp' element={<ProtectedRoute children={<Brocamp />} />} />
          <Route path='/brocamp/tech_tasks' element={<ProtectedRoute children={<TechTasks />} />} />
          <Route path='/brocamp/review' element={<ProtectedRoute children={<Brocamp_Review />} />} />

          <Route path='/advisor' element={<ProtectedRoute children={<Advisor />} />} />
          <Route path='/advisor/review' element={<ProtectedRoute children={<Advisor_Review />} />} />
          <Route path='/advisor/students' element={<ProtectedRoute children={<Students />} />} />

          <Route path='/manager' element={<Manager />} />
          <Route path='/manager/workshop' element={<Workshop status={'scheduled'} />} />
          <Route path='/manager/workshop/event_day/:id' element={<Workshop status={'eventDay'} />} />
          <Route path='/manager/tasks_management' element={<TasksManagement />} />

          <Route path='/test' element={<Sidebar />} />
        </Routes>
      </Router>
    </Provider>

  )
}

export default App;
