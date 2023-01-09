import {NavigationBar} from './components/NavigationBar.js'
import {Route, Routes} from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage.js';
import {LoginPage} from './pages/LoginPage/LoginPage.js'
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <Routes>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
