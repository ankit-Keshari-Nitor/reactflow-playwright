import React, { useState } from "react"
import FlowDesigner from "./flowDesigner"
import { Panel, PanelGroup } from "react-resizable-panels"

import "../styles/styles.scss"
import NodeDefinitionForm from "./nodeDefinitionForm"

function Workflow() {
  const [showForm, setShowForm] = useState(false)

  return (
    <div className="main-container">
      <PanelGroup
        direction="horizontal"
        id="group"
        defaultSize={100}
        minSize={70}
      >
        <Panel id="left-panel">
          <span className="workflow-container">
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
            <FlowDesigner onNodeClick={() => setShowForm(true)} />
          </span>
        </Panel>
        {/* <PanelResizeHandle id="resize-handle" /> */}
        {showForm && (
          <Panel id="right-panel" defaultSize={30} minSize={20} maxSize={30}>
            <NodeDefinitionForm onClose={() => setShowForm(false)} />
          </Panel>
        )}
      </PanelGroup>
    </div>
  )
}

export default Workflow
