export const INITIAL_NODES = [
  {
    id: "1",
    position: { x: 200, y: 100 },
    data: { label: "Partner" },
    type: "partner",
  },
  {
    id: "2",
    position: { x: 500, y: 300 },
    data: { label: "Partner" },
    type: "partner",
  },
  {
    id: "3",
    position: { x: 800, y: 100 },
    data: { label: "Sponsor" },
    type: "sponsor",
  },
]

export const INITIAL_EDGES = [{ id: "e1-2", source: "1", target: "2" }]
