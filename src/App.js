import React, { useState } from "react"
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom"
import Workflow from "./components/workflow"
import LoginForm from "./components/LoginPage"

import "./styles/styles.css"

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false)

  function callbackFunction(childData) {
    setLoggedIn(childData)
  }

  return (
    <>
      <span className="title-bar">
        <span className="is-size-1">PEM - 2.0</span>
        {loggedIn && (
          <button
            id="logoutBtn"
            class="button is-block is-info"
            onClick={() => setLoggedIn(false)}
          >
            Log out
          </button>
        )}
      </span>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              loggedIn ? (
                <Navigate to="/Workflow" />
              ) : (
                <LoginForm parentCallback={callbackFunction} />
              )
            }
          />
          <Route
            path="/Workflow"
            element={loggedIn ? <Workflow /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
