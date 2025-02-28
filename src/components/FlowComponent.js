import React, { useCallback, useState, useRef } from "react"
import {
  ReactFlow,
  Controls,
  MiniMap,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import "../styles/styles.css"
import { INITIAL_NODES, INITIAL_EDGES } from "./../utils/constant"

const FlowComponent = () => {
  const [nodes, setNodes] = useState(INITIAL_NODES)
  const [edges, setEdges] = useState(INITIAL_EDGES)
  const reactFlowWrapper = useRef(null) // Create a ref

  const onConnect = useCallback((params) => {
    setEdges((eds) => addEdge(params, eds))
  }, [])

  const onNodesChange = useCallback((changes) => {
    setNodes((nds) => applyNodeChanges(changes, nds))
  }, [])

  const onEdgesChange = useCallback((changes) => {
    setEdges((eds) => applyEdgeChanges(changes, eds))
  }, [])

  const onDrop = useCallback((event) => {
    event.preventDefault()
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect() // Use the ref to get the bounding rectangle
    const type = event.dataTransfer.getData("application/reactflow")

    if (typeof type === "undefined" || !reactFlowBounds) {
      return
    }

    const position = {
      x: event.clientX - reactFlowBounds.left,
      y: event.clientY - reactFlowBounds.top,
    }

    const newNode = {
      id: String(Math.random()), // Generate a unique id
      type: type === "partner" ? "partner" : "sponsor", // Differentiate types
      position,
      data: { label: `${type === "partner" ? "Partner" : "Sponsor"} Node` },
    }

    setNodes((nds) => nds.concat(newNode))
  }, [])

  const onDragOver = (event) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = "move"
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background: "#ffffff !important",
      }}
      ref={reactFlowWrapper}
    >
      {/* Attach the ref here */}
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  )
}

export default FlowComponent
