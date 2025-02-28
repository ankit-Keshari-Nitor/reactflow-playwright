import React, { useState } from "react"
import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
} from "react-router-dom"
import Workflow from "./components/workflow"
import LoginForm from "./components/LoginPage"

const App = () => {
  const [loggedIn, setloggedIn] = useState(false)

  function callbackFunction(childData) {
    setloggedIn(childData)
  }

  return (
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
  )
}

export default App
