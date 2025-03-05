import React, { useState } from "react"
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom"
import Workflow from "./components/workflow"

import "./styles/styles.scss"
import { TopNav } from "./components/topNav"
import LoginForm from "./components/loginForm"
import CarbonForm from "./components/carbonForm"

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  function callbackFunction(childData) {
    setLoggedIn(childData)
  }

  return (
    <>
      <TopNav loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              loggedIn ? (
                <Navigate to="/workflow" />
              ) : (
                <LoginForm parentCallback={callbackFunction} />
              )
            }
          />
          <Route path="/register" element={<CarbonForm />} />
          <Route
            path="/workflow"
            element={loggedIn ? <Workflow /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
