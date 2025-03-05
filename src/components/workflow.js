import React from "react"
import FlowDesigner from "./flowDesigner"

import "../styles/styles.scss"

function Workflow() {
  return (
    <div className="main-container">
      <div className="drag-container">
        <div
          id="partner-node"
          className="draggable-item"
          draggable
          onDragStart={(event) => {
            event.dataTransfer.setData("application/reactflow", "partner")
          }}
        >
          Partner
        </div>
        <div
          id="sponsor-node"
          className="draggable-item"
          draggable
          onDragStart={(event) => {
            event.dataTransfer.setData("application/reactflow", "sponsor")
          }}
        >
          Sponsor
        </div>
      </div>
      <FlowDesigner />
    </div>
  )
}

export default Workflow
