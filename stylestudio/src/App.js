import { NavigationBar } from "./components/NavigationBar.js";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage.js";
import { LoginPage } from "./pages/LoginPage/LoginPage.js";
import { Signup } from "./pages/Signup/Signup.js";
import { Forums } from "./pages/Forums/Forums.js";
import { Guides } from "./pages/Guides/Guides.js";
import { Specificity } from "./pages/Specificity/Specificity.js";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesConfig from "./components/config/particles-config";

import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

function App() {
  const [currentUserDetails, setCurrentUserDetails] = useState([[]]);
  const [loggedIn, setLoggedIn] = useState(false);
  const fetchCookies = async () => {
    const res = await fetch(
      "https://csswebsitebackend-production.up.railway.app/",
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.status === 200) {
      const data = await res.json();
      setCurrentUserDetails(data[0]);
      handleLogIn();
      console.log({ data });
    }
  };
  const handleLogIn = () => {
    setLoggedIn(true);
  };
  const handleLogOut = () => {
    setCurrentUserDetails([[]]);
    setLoggedIn(false);
  };
  useEffect(() => {}, [loggedIn]);
  useEffect(() => {
    fetchCookies();
  }, []);

  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };
  return (
    <div className="App">
      <h1 className="brand">Style Studio.</h1>
      <NavigationBar
        currentUserDetails={currentUserDetails}
        loggedIn={loggedIn}
        handleLogOut={handleLogOut}
      />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={
            <LoginPage
              setCurrentUserDetails={setCurrentUserDetails}
              handleLogIn={handleLogIn}
            />
          }
        />
        <Route path="/sign-up" element={<Signup />} />

        <Route
          path="/forums/*"
          element={<Forums currentUserDetails={currentUserDetails} />}
        ></Route>
        <Route path="/leaderboard" element={<Specificity />} />
        <Route
          path="/guides"
          element={<Guides userType={currentUserDetails.type_id} />}
        />
      </Routes>
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesConfig}
      ></Particles>
    </div>
  );
}

export default App;
