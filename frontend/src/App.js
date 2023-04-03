import './App.css';
import { BrowserRouter , Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navigation from './components/shared/Navigation/Navigation';
import Authenticate from './pages/Authenticate/Authenticate';
import Activate from './pages/Activate/Activate';
import Rooms from './pages/Rooms/Rooms';
import { useSelector } from 'react-redux';


function App() {
  return ( 
  <BrowserRouter>
    <Navigation />
    <Routes>
      <Route path="/" element={<><GuestRoute/><Home/></>}/>
      
      <Route path="/authenticate" element={<><GuestRoute/><Authenticate/></>}/>

      <Route path="/activate" element={<><SemiProtected/><Activate/></>}></Route>

      <Route path="/rooms" element={<><ProtectedRoute/><Rooms/></>}></Route>

    </Routes>
  </BrowserRouter>
  );
}


const GuestRoute = ({children,...location}) => {

  const {isAuth} = useSelector((state) => state.auth)
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
  const {user,isAuth} = useSelector((state) => state.auth)
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
  const {user,isAuth} = useSelector((state) => state.auth)
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
