import React from "react"
import FlowComponent from "./components/FlowComponent"

import "./styles/styles.css"

function App() {
  return (
    <div className="main-container">
      <div className="drag-container">
        <div
          className="draggable"
          draggable
          onDragStart={(event) => {
            event.dataTransfer.setData("application/reactflow", "partner")
          }}
        >
          Partner Node
        </div>
        <div
          className="draggable"
          draggable
          onDragStart={(event) => {
            event.dataTransfer.setData("application/reactflow", "sponsor")
          }}
        >
          Sponsor Node
        </div>
      </div>
      <FlowComponent />
    </div>
  )
}

export default App
