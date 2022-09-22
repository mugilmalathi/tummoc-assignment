import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function App() {

  const user = useSelector(selectUser)

  return (
    <div className="App">
     {
      user ? <Home /> : <Login />
     }
    </div>
  );
}

export default App;
