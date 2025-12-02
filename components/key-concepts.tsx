import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function KeyConcepts() {
  const concepts = [
    {
      term: "Algorithm",
      definition: "A set of sequenced or ordered instructions followed to complete a task",
      example: "Making a jam sandwich: Get bread → Spread butter → Add jam → Put together",
      examTip: "If the sequence is wrong, the program produces UNINTENDED RESULTS",
      color: "blue",
    },
    {
      term: "Sequence",
      definition: "The order in which instructions are followed",
      example: "You must open the bottle BEFORE pouring the drink",
      examTip: "Order matters! Some things can't happen unless another instruction is completed first",
      color: "purple",
    },
    {
      term: "Repetition/Iteration",
      definition: "Instructions that are repeated to make programs more efficient",
      example: "Instead of 'Forward, Forward, Forward' → Use 'Repeat 3 times: Forward'",
      examTip: "Always show repetition using INDENTATION. Uses fewer commands = more efficient",
      color: "green",
    },
    {
      term: "Selection",
      definition: "Choosing between pathways based on a condition (IF...THEN...ELSE)",
      example: "IF touching car THEN stop game ELSE keep playing",
      examTip: "Selection lets your program make decisions based on what's happening",
      color: "orange",
    },
    {
      term: "Variable",
      definition: "A storage location with a NAME and a VALUE that can change",
      example: "Variable 'Score' starts at 0, increases to 1, then 2, then 3...",
      examTip: "Variables need TWO things: a name AND a value. Common example = player's score",
      color: "red",
    },
    {
      term: "Decomposition",
      definition: "Breaking a large problem into smaller, manageable sub-problems",
      example: "Making a game: 1) Add background 2) Add sprites 3) Add movement 4) Add scoring...",
      examTip: "Large projects are easier when broken into small steps!",
      color: "pink",
    },
    {
      term: "Debugging",
      definition: "Finding and fixing errors (bugs) in a program",
      example: "Expected: Frog moves up. Actual: Frog moves down. Bug = wrong keystroke code",
      examTip: "Compare what SHOULD happen vs what ACTUALLY happens",
      color: "indigo",
    },
    {
      term: "Input",
      definition: "Data the user provides to the program (like keystroke presses)",
      example: "Pressing arrow keys to move the frog character",
      examTip: "Inputs let users interact with your program",
      color: "cyan",
    },
    {
      term: "Output",
      definition: "Data the program shows to the user (like messages or sounds)",
      example: "Displaying 'Game Over!' message or playing a sound effect",
      examTip: "Outputs show information back to the user",
      color: "teal",
    },
  ]

  return (
    <div className="space-y-4">
      <Card className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <h2 className="text-2xl font-bold mb-2">Programming Constructs</h2>
        <p className="opacity-90">Master these 4 main constructs for your exam:</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
          {["Sequence", "Repetition", "Selection", "Variables"].map((construct) => (
            <div key={construct} className="bg-white/20 backdrop-blur rounded-lg p-3 text-center font-semibold">
              {construct}
            </div>
          ))}
        </div>
      </Card>

      {concepts.map((concept, index) => (
        <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
          <div className="flex items-start gap-4">
            <Badge className={`bg-${concept.color}-500 text-lg px-3 py-1`}>{index + 1}</Badge>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">{concept.term}</h3>
              <div className="space-y-3">
                <div>
                  <div className="text-sm font-semibold text-muted-foreground mb-1">Definition:</div>
                  <p className="text-sm">{concept.definition}</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="text-sm font-semibold text-purple-600 mb-1">Example:</div>
                  <p className="text-sm font-mono">{concept.example}</p>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <div className="text-sm font-semibold text-amber-900 mb-1">⚡ Exam Tip:</div>
                  <p className="text-sm text-amber-800">{concept.examTip}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      ))}

      {/* Quick Reference Card */}
      <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-300">
        <h3 className="text-xl font-bold mb-4 text-green-800">📋 Quick Reference - Remember These!</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <div className="font-semibold text-green-700">✅ DO:</div>
            <ul className="space-y-1 pl-4">
              <li>• Use indentation for repetition</li>
              <li>• Test your algorithms step by step</li>
              <li>• Break big problems into sub-problems</li>
              <li>• Give variables clear names</li>
              <li>• Use IF...THEN for conditions</li>
            </ul>
          </div>
          <div className="space-y-2">
            <div className="font-semibold text-red-700">❌ DON'T:</div>
            <ul className="space-y-1 pl-4">
              <li>• Forget to check sequence order</li>
              <li>• Skip indentation in loops</li>
              <li>• Forget variables need name AND value</li>
              <li>• Mix up inputs and outputs</li>
              <li>• Forget to test your code!</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}
