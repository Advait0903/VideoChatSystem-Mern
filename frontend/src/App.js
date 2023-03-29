import './App.css';
import { BrowserRouter , Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Authenticate from './pages/Authenticate/Authenticate';
import Activate from './pages/Activate/Activate';
import Rooms from './pages/Rooms/Rooms';

const isAuth = false;
const user = {
  activated: false,
}

function App() {
  return ( 
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<><GuestRoute/><Home/></>}/>
      {/* <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/> */}
      
      <Route path="/authenticate" element={<><GuestRoute/><Authenticate/></>}/>

      <Route path="/activate" element={<><SemiProtected/><Activate/></>}></Route>

      <Route path="/rooms" element={<><ProtectedRoute/><Rooms/></>}></Route>

    </Routes>
  </BrowserRouter>
  );
}


const GuestRoute = ({children,...location}) => {
  return isAuth ? (
 
    <Navigate to = 
      {
        {
          pathname: '/rooms',
          state: { from: location}
        }
      }
    />

  ) : (
    children
  )
}

const SemiProtected = ({children,...location}) => {
  return !isAuth ? (
    <Navigate to = 
      {
        {
          pathname: '/',
          state: { from: location}
        }
      }
    />
    
  ) : isAuth && !user.activated ? (
    children
  ) : (
    <Navigate 
      to={
        {
          pathname: '/rooms',
          state: {from: location},
        }
      }
    />
  )
}

const ProtectedRoute = ({children,...location}) => {
  return !isAuth ? (
    <Navigate to = 
      {
        {
          pathname: '/',
          state: { from: location}
        }
      }
    />
    
  ) : isAuth && !user.activated ? (
    <Navigate 
      to={
        {
          pathname: '/activate',
          state: {from: location},
        }
      }
    />
  ) : (
    children
  )
}

export default App;
