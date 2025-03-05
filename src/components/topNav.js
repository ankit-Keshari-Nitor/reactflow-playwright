import React from "react"

import "../styles/styles.scss"
import { Button } from "@carbon/react"

export const TopNav = ({ loggedIn, setLoggedIn }) => {
  return (
    <span className="title-bar">
      <span>PEM - 2.0</span>
      {loggedIn && (
        <Button
          id="logoutBtn"
          kind="secondary"
          onClick={() => setLoggedIn(false)}
        >
          Log out
        </Button>
      )}
    </span>
  )
}
