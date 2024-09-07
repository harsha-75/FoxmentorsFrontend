
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages/Home';
import SessionsPage from './components/pages/SessionsPage';
import CoursesPage from './components/pages/CoursesPage';
import PractiseHub from './components/pages/PractiseHub';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import SignOut from './components/pages/SignOut';
import Forget from './components/pages/Forget';

function App() {
  return (
       <Router className="bg-gray-100 min-h-screen">
            <Header/>
              <Routes>
                   <Route path="/" element={<Home/>}/>
                   <Route path="/sessions" element={<SessionsPage/>}/>
                   <Route path="/courses" element={<CoursesPage/>}/>
                   <Route path="/practicehub" element={<PractiseHub/>}/>
                   <Route path="/signin" element={<SignIn/>}/>
                   <Route path="/signup" element={<SignUp/>}/>
                   <Route path="/signout" element={<SignOut/>}/>
                   <Route path="/forget" element={<Forget/>}/>
              </Routes>
       </Router>
  );
}

export default App;
