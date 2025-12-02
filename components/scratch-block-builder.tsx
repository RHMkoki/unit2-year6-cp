"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus, Trash2 } from "lucide-react"

export function ScratchBlockBuilder() {
  const [blocks, setBlocks] = useState<string[]>([])

  const availableBlocks = [
    "when green flag clicked",
    "move (10) steps",
    "turn ↻ (15) degrees",
    "repeat (5)",
    "forever",
    "if touching (sprite) ? then",
    "wait (1) seconds",
    "go to x:(0) y:(0)",
  ]

  const addBlock = (block: string) => {
    setBlocks([...blocks, block])
  }

  const removeBlock = (index: number) => {
    setBlocks(blocks.filter((_, i) => i !== index))
  }

  return (
    <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <h3 className="font-bold mb-4">Scratch Block Builder</h3>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold text-sm mb-2">Available Blocks</h4>
          <div className="space-y-2">
            {availableBlocks.map((block, idx) => (
              <button
                key={idx}
                onClick={() => addBlock(block)}
                className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-left flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                <span className="font-mono text-sm">{block}</span>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-sm mb-2">Your Code</h4>
          <div className="bg-gray-800 text-white p-4 rounded-lg min-h-[300px]">
            {blocks.length === 0 ? (
              <p className="text-gray-400 text-sm">Add blocks to build your code</p>
            ) : (
              <div className="space-y-1">
                {blocks.map((block, idx) => (
                  <div key={idx} className="flex items-center gap-2 group">
                    <span className="font-mono text-sm flex-1">{block}</span>
                    <button
                      onClick={() => removeBlock(idx)}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Trash2 className="w-4 h-4 text-red-400" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
          <Button onClick={() => setBlocks([])} variant="outline" size="sm" className="mt-2">
            Clear All
          </Button>
        </div>
      </div>
    </Card>
  )
}
