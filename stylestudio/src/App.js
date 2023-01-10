import {NavigationBar} from './components/NavigationBar.js'
import {Route, Routes} from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage.js';
import {LoginPage} from './pages/LoginPage/LoginPage.js'
import {Signup} from './pages/Signup/Signup.js'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const [signInCredentials,setSignInCredentials] = useState({name:'',password:''})
  const handleSignInChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setSignInCredentials((prev) => {
      return { ...prev, [name]: value };
    });
    console.log(signInCredentials);
  };
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage handleSignInChange={handleSignInChange} signInCredentials={signInCredentials}/>}/>
        <Route path='/sign-up' element={<Signup handleSignInChange={handleSignInChange} signInCredentials={signInCredentials}/>}/>
      </Routes>
    </div>
  );
}

export default App;
