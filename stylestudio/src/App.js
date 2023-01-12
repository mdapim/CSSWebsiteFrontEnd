import { NavigationBar } from "./components/NavigationBar.js";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage.js";
import { LoginPage } from "./pages/LoginPage/LoginPage.js";
import { Signup } from "./pages/Signup/Signup.js";
import { Forums } from "./pages/Forums/Forums.js";

import { Guides } from "./pages/Guides/Guides.js";
import { Specificity } from './pages/Specificity/Specificity.js';

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  const [signInCredentials, setSignInCredentials] = useState({
    name: "",
    password: "",
  });
  const [currentUserDetails, setCurrentUserDetails] = useState([]);
  
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
      <NavigationBar currentUserDetails={currentUserDetails} />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/login"
          element={
            <LoginPage
              handleSignInChange={handleSignInChange}
              signInCredentials={signInCredentials}
              setCurrentUserDetails={setCurrentUserDetails}
            />
          }
        />
        <Route
          path="/sign-up"
          element={
            <Signup
              handleSignInChange={handleSignInChange}
              signInCredentials={signInCredentials}
            />
          }
        />


        <Route
          path="/forums"
          element={<Forums currentUserDetails={currentUserDetails} />}
        ></Route>
        <Route path="/leaderboard" element={<Specificity />} />
        <Route path='/guides' element = {<Guides userType={currentUserDetails.type_id}/>}/>
      </Routes>
    </div>
  );
}

export default App;
