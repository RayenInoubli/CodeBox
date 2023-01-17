import {Routes, Route} from 'react-router-dom'
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';
import NewCard from './components/NewCard';
import Account from './components/Account';
import Training from './components/Training';
import ProtectedRoute from './protected/ProtectedRoute';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/Signup' element={<Signup />}></Route>
      <Route path='/Login' element={<Login />}></Route>

      <Route element={<ProtectedRoute />} >
        <Route path='/Profile' element={<Profile />}></Route>
        <Route path='/New' element={<NewCard />}></Route>
        <Route path='/Account' element={<Account />}></Route>
        <Route path='/Training' element={<Training />}></Route>
      </Route>
      
    </Routes>
  );
}

export default App;
