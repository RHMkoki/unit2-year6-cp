"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function DragDropActivity() {
  const [draggedItem, setDraggedItem] = useState<string | null>(null)
  const [dropZones, setDropZones] = useState<{ [key: string]: string }>({})

  const items = [
    { id: "algorithm", label: "Algorithm", definition: "An agreed set of codes users understand" },
    { id: "code", label: "Code", definition: "Exact instructions the device reads" },
    { id: "debug", label: "Debug", definition: "Spotting and removing errors" },
  ]

  const zones = ["zone1", "zone2", "zone3"]

  const handleDragStart = (id: string) => {
    setDraggedItem(id)
  }

  const handleDrop = (zone: string) => {
    if (draggedItem) {
      setDropZones({ ...dropZones, [zone]: draggedItem })
      setDraggedItem(null)
    }
  }

  return (
    <Card className="p-6">
      <h3 className="font-bold mb-4">Drag & Drop: Match Terms to Definitions</h3>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Terms</h4>
          {items.map((item) => (
            <div
              key={item.id}
              draggable
              onDragStart={() => handleDragStart(item.id)}
              className="p-3 bg-blue-100 border-2 border-blue-300 rounded-lg cursor-move hover:bg-blue-200 transition-colors"
            >
              {item.label}
            </div>
          ))}
        </div>

        <div className="space-y-2">
          <h4 className="font-semibold text-sm">Definitions</h4>
          {zones.map((zone, idx) => (
            <div
              key={zone}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(zone)}
              className="p-3 border-2 border-dashed border-gray-300 rounded-lg min-h-[60px] bg-gray-50"
            >
              {dropZones[zone] ? (
                <span className="font-semibold text-green-700">
                  {items.find((i) => i.id === dropZones[zone])?.label}
                </span>
              ) : (
                <span className="text-gray-400">Drop here ({items[idx]?.definition})</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <Button onClick={() => setDropZones({})} variant="outline" className="mt-4">
        Reset
      </Button>
    </Card>
  )
}
