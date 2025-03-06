import React from "react"

import "../styles/styles.scss"
import { Logout } from "@carbon/icons-react"

export const TopNav = ({ loggedIn, setLoggedIn }) => {
  return (
    <span className="title-bar">
      <span>PEM - 2.0</span>
      {loggedIn && (
        <Logout
          id="logoutBtn"
          onClick={() => setLoggedIn(false)}
          className="logout-button"
        />
      )}
    </span>
  )
}
