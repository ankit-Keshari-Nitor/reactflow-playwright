import React from "react"
import FlowComponent from "./flowComponent"

import "../styles/styles.css"

function Workflow() {
  return (
    <div className="main-container">
      <div className="drag-container">
        <div
          id="partner-node"
          className="draggable"
          draggable
          onDragStart={(event) => {
            event.dataTransfer.setData("application/reactflow", "partner")
          }}
        >
          Partner
        </div>
        <div
          id="sponsor-node"
          className="draggable"
          draggable
          onDragStart={(event) => {
            event.dataTransfer.setData("application/reactflow", "sponsor")
          }}
        >
          Sponsor
        </div>
      </div>
      <FlowComponent />
    </div>
  )
}

export default Workflow
