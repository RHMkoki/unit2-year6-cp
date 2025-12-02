"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function RobotGrid() {
  const [path, setPath] = useState<number[]>([])

  const grid = [
    { id: 0, type: "start", label: "A" },
    { id: 1, type: "empty" },
    { id: 2, type: "star" },
    { id: 3, type: "empty" },
    { id: 4, type: "empty" },
    { id: 5, type: "empty" },
    { id: 6, type: "star" },
    { id: 7, type: "empty" },
    { id: 8, type: "star" },
    { id: 9, type: "empty" },
    { id: 10, type: "empty" },
    { id: 11, type: "empty" },
    { id: 12, type: "empty" },
    { id: 13, type: "star" },
    { id: 14, type: "empty" },
    { id: 15, type: "empty" },
    { id: 16, type: "empty" },
    { id: 17, type: "empty" },
    { id: 18, type: "empty" },
    { id: 19, type: "end", label: "B" },
  ]

  const toggleCell = (id: number) => {
    if (path.includes(id)) {
      setPath(path.filter((p) => p !== id))
    } else {
      setPath([...path, id])
    }
  }

  return (
    <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50">
      <h3 className="font-bold text-center mb-4">Robot Route Visualization</h3>
      <p className="text-center text-sm text-muted-foreground mb-4 text-balance">
        Task: Create an algorithm to move from A to B collecting all stars ⭐
      </p>

      <div className="flex justify-center mb-4">
        <div className="grid grid-cols-5 gap-1 w-fit">
          {grid.map((cell) => (
            <button
              key={cell.id}
              onClick={() => toggleCell(cell.id)}
              className={`w-14 h-14 border-2 rounded flex items-center justify-center text-xl font-bold transition-all ${
                cell.type === "start"
                  ? "bg-green-200 border-green-400"
                  : cell.type === "end"
                    ? "bg-red-200 border-red-400"
                    : cell.type === "star"
                      ? "bg-yellow-100 border-yellow-300"
                      : path.includes(cell.id)
                        ? "bg-blue-200 border-blue-400"
                        : "bg-white border-gray-300 hover:bg-gray-50"
              }`}
            >
              {cell.type === "star" && "⭐"}
              {cell.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2">
        <Button variant="outline" size="sm" onClick={() => setPath([])}>
          Clear Path
        </Button>
      </div>

      <div className="mt-4 p-3 bg-blue-50 rounded-lg">
        <p className="text-sm font-semibold text-blue-900 mb-1">Your Algorithm:</p>
        <p className="text-xs text-blue-800 text-pretty">
          Click cells to mark your path. Try to collect all stars with the fewest commands!
        </p>
      </div>
    </Card>
  )
}
