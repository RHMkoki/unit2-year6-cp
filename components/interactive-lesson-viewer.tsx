"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { RobotGrid } from "@/components/robot-grid"
import { ScratchBlockBuilder } from "@/components/scratch-block-builder"

const lessons = [
  {
    id: 1,
    number: 3,
    title: "Programming Solutions with Loops",
    subtitle: "Efficient Algorithms",
    keywords: ["Algorithm", "Efficiency", "Loop", "Route", "Criteria", "Debug"],
    concepts: [
      {
        title: "Efficiency in Algorithms",
        description: "Using the fewest steps to solve a problem while meeting all criteria.",
      },
      {
        title: "Multiple Solutions",
        description: "Most problems have more than one solution, but we aim for the most efficient.",
      },
      {
        title: "Loops for Efficiency",
        description: "Repeating commands using loops makes algorithms shorter and less error-prone.",
      },
    ],
    activity: {
      title: "Finding Efficient Routes",
      description: "Plan a route for a robot from point A to B that:",
      tasks: [
        "Collects all gems/stars along the way",
        "Uses the fewest commands possible",
        "Incorporates loops where appropriate",
      ],
      hasRobotGrid: true,
    },
    algorithms: {
      inefficient: ["Forward", "Forward", "Left", "Forward", "Right", "Forward", "Forward", "Right", "Forward"],
      efficient: ["Repeat 2 times: Forward", "Left", "Repeat 3 times: Forward", "Right", "Repeat 2 times: Forward"],
    },
    examQuestions: [
      {
        question:
          "What is wrong with this algorithm?\nEnjoy drink → Pour drink into glass → Put away drink and glass → Open bottle of drink",
        options: ["A) It is impossible", "B) It is missing a loop", "C) It is out of sequence", "D) Nothing at all"],
        correct: 2,
        answer: "C - You can't enjoy a drink before opening the bottle!",
      },
      {
        question: "What does 'being efficient' mean when writing algorithms?",
        options: [
          "A) Using the fewest number of commands to achieve the same outcome",
          "B) Making sure you include selection",
          "C) Using as many commands as possible",
          "D) Making sure you remove indentations from the algorithm",
        ],
        correct: 0,
        answer: "A - Efficiency means achieving the same result with fewer commands.",
      },
    ],
  },
  {
    id: 2,
    number: 4,
    title: "From Algorithms to Code",
    subtitle: "Learning Scratch",
    keywords: ["Code", "Command", "Repeat", "Scratch", "Sprite", "Debugging", "Notation"],
    concepts: [
      {
        title: "Algorithm vs Code",
        description: "An algorithm uses agreed notation; code is exactly what the computer reads.",
      },
      {
        title: "Scratch Terminology",
        description: "In Scratch, we use 'repeat' instead of 'loop'.",
      },
      {
        title: "Sequencing",
        description: "Commands must be in the correct order for the program to work properly.",
      },
    ],
    scratchBlocks: [
      "when green flag clicked",
      "repeat (5)",
      "  move (10) steps",
      "  turn cw (15) degrees",
      "  wait (1) seconds",
      "go to x:(0) y:(0)",
    ],
    activity: {
      title: "Scratch Translation",
      description: "Translate your robot algorithm into Scratch code:",
      tasks: ["Use motion blocks for movement", "Use control blocks for repetition", "Test and debug your code"],
      hasScratchBuilder: true,
    },
    examQuestions: [
      {
        question: "What will happen when you click 'run' on this program?\nwhen run\nrepeat 5 times\n  move forward",
        options: [
          "A) The robot will not move",
          "B) The robot will move five times and collect the gems",
          "C) The robot will only move one space",
          "D) The robot will only move four spaces",
        ],
        correct: 1,
        answer: "B - The repeat block executes the move command 5 times.",
      },
    ],
  },
  {
    id: 3,
    number: 5,
    title: "Creating a 'Frogger'-Style Game",
    subtitle: "Game Design & Decomposition",
    keywords: ["Sprite", "Movement", "IF...THEN...", "String", "Decomposition", "Background", "Interaction"],
    concepts: [
      {
        title: "Game Design",
        description: "Breaking down a complex game into manageable parts.",
      },
      {
        title: "Sprites",
        description: "Characters or objects in a game (like the frog and cars).",
      },
      {
        title: "Decomposition",
        description: "Breaking a big problem into smaller sub-problems.",
      },
      {
        title: "String",
        description: "A sequence of characters (text) used to display messages.",
      },
    ],
    activity: {
      title: "Game Planning",
      description: "Plan your Frogger game by considering:",
      tasks: [
        "Background: Create or choose a road/street scene",
        "Character sprite: Frog (can edit or create your own)",
        "Sprite movement: Program up/down/left/right with arrow keys",
        "Additional objects: Cars that move continuously",
        "Character interaction: What happens when frog touches cars or reaches goal",
      ],
    },
    images: ["/images/08.png", "/images/09.png", "/images/10.png"],
    examQuestions: [
      {
        question: "Which of these is an example of decomposition?",
        options: [
          "A) Writing all the code at once without testing",
          "B) Breaking a game project into smaller parts like background, sprites, and movement",
          "C) Making the game as complicated as possible",
          "D) Only focusing on one part of the game",
        ],
        correct: 1,
        answer: "B - Decomposition means breaking big problems into smaller ones.",
      },
    ],
  },
  {
    id: 4,
    number: 6,
    title: "Forever Loops & Movement",
    subtitle: "Automated Game Objects",
    keywords: ["Forever Loop", "Obstacle", "Sprite", "Coordinates", "Automated Movement", "x-axis / y-axis"],
    concepts: [
      {
        title: "Forever Loop",
        description: "A loop that runs continuously until the program stops.",
      },
      {
        title: "Automated Movement",
        description: "Using loops to make sprites move without user input.",
      },
      {
        title: "Multiple Sprites",
        description: "Programming each sprite separately with its own code.",
      },
      {
        title: "Stage Coordinates",
        description: "The center is (0,0); x-axis is horizontal, y-axis is vertical.",
      },
    ],
    scratchBlocks: [
      "when green flag clicked",
      "forever",
      "  go to x: (230) y: (-130)",
      "  repeat (60)",
      "    change x by (-8)",
      "  hide",
      "  wait (3) seconds",
      "  show",
    ],
    activity: {
      title: "Programming Car Movement",
      description: "Add car sprites and program them to move automatically:",
      tasks: [
        "Add car sprite using 'Choose a Sprite'",
        "Program with forever loop for continuous movement",
        "Set starting position with coordinates",
        "Adjust speed by changing step amount",
      ],
    },
    images: ["/images/13.png", "/images/14.png", "/images/15.png"],
    examQuestions: [
      {
        question:
          "Which block would be most useful for making automated characters move around the screen until the game ends?",
        options: ["A) IF...THEN...", "B) repeat", "C) wait until", "D) forever loop"],
        correct: 3,
        answer: "D - Forever loop runs continuously until stopped.",
      },
    ],
  },
  {
    id: 5,
    number: 7,
    title: "IF...THEN Conditions for Interaction",
    subtitle: "Collision Detection",
    keywords: ["IF...THEN...", "Condition", "Interaction", "Input", "Output", "Sensing Block", "Decompose"],
    concepts: [
      {
        title: "Conditional Statements",
        description: "IF...THEN blocks that check conditions and run code when true.",
      },
      {
        title: "Interaction",
        description: "When sprites touch or collide with each other.",
      },
      {
        title: "Input & Output",
        description: "Input = user action or collision, Output = game response.",
      },
      {
        title: "Sensing Blocks",
        description: "Detect when sprites touch or conditions are met.",
      },
    ],
    scratchBlocks: [
      "when green flag clicked",
      "forever",
      "  if touching (Car Sprite) ? then",
      "    switch costume to (Frog Splat)",
      "    play sound (Splat Noise) until done",
      "    wait (3) seconds",
      "    go to x: (-167) y: (7)",
      "    switch costume to (Frog Normal)",
    ],
    activity: {
      title: "Programming Collision Detection",
      description: "Program what happens when the frog touches a car:",
      tasks: [
        "Game stops",
        "Sprite changes costume (to 'frog splat')",
        "Play 'splat' sound effect",
        "Wait 3 seconds, then reset to starting position",
      ],
    },
    images: ["/images/18.jpg", "/images/19.jpg"],
    examQuestions: [
      {
        question: "What is selection in programming?",
        options: [
          "A) Choosing which sprite to use",
          "B) Making a choice between pathways based on a condition",
          "C) Selecting colors for your game",
          "D) Choosing the background",
        ],
        correct: 1,
        answer: "B - Selection means choosing different actions based on conditions.",
      },
    ],
  },
]

export function InteractiveLessonViewer() {
  const [currentLesson, setCurrentLesson] = useState(0)
  const [progress, setProgress] = useState(0)

  const lesson = lessons[currentLesson]

  const nextLesson = () => {
    if (currentLesson < lessons.length - 1) {
      setCurrentLesson(currentLesson + 1)
      setProgress(((currentLesson + 2) / lessons.length) * 100)
    }
  }

  const prevLesson = () => {
    if (currentLesson > 0) {
      setCurrentLesson(currentLesson - 1)
      setProgress((currentLesson / lessons.length) * 100)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <Card className="p-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold">Year 6 Programming Unit 2</h1>
            <p className="text-white/90">Complete Revision Guide - Lessons 3 to 7</p>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold">{Math.round(progress)}%</div>
            <div className="text-sm text-white/80">Complete</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="h-3 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-green-400 transition-all duration-500" style={{ width: `${progress}%` }} />
        </div>
      </Card>

      {/* Lesson Navigation */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {lessons.map((l, index) => (
          <button
            key={l.id}
            onClick={() => {
              setCurrentLesson(index)
              setProgress(((index + 1) / lessons.length) * 100)
            }}
            className={`flex-shrink-0 px-4 py-2 rounded-lg font-semibold transition-all ${
              currentLesson === index ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            Lesson {l.number}
          </button>
        ))}
      </div>

      {/* Main Content */}
      <Card className="p-6">
        <div className="mb-6">
          <Badge className="mb-2">Lesson {lesson.number}</Badge>
          <h2 className="text-3xl font-bold mb-2 text-balance">{lesson.title}</h2>
          <p className="text-lg text-muted-foreground text-balance">{lesson.subtitle}</p>
        </div>

        <Tabs defaultValue="concepts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="concepts">Core Concepts</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
            <TabsTrigger value="activity">Activities</TabsTrigger>
            <TabsTrigger value="exam">Exam Prep</TabsTrigger>
          </TabsList>

          {/* Core Concepts */}
          <TabsContent value="concepts" className="space-y-4">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <h3 className="font-bold text-blue-900 mb-3">Key Concepts</h3>
              <div className="space-y-3">
                {lesson.concepts.map((concept, idx) => (
                  <div key={idx}>
                    <h4 className="font-semibold text-blue-800">{concept.title}</h4>
                    <p className="text-blue-700 text-sm text-pretty">{concept.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Keywords */}
            <div>
              <h3 className="font-semibold mb-3">Keywords to Remember</h3>
              <div className="flex flex-wrap gap-2">
                {lesson.keywords.map((keyword, idx) => (
                  <Badge key={idx} variant="secondary" className="px-3 py-1">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Images */}
            {lesson.images && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {lesson.images.map((img, idx) => (
                  <div key={idx} className="border-2 border-gray-200 rounded-lg overflow-hidden">
                    <img
                      src={img || "/placeholder.svg"}
                      alt={`Lesson ${lesson.number} visual ${idx + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Examples */}
          <TabsContent value="examples" className="space-y-4">
            {lesson.algorithms && (
              <div className="space-y-4">
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-red-900 mb-2">
                    ❌ Inefficient Algorithm ({lesson.algorithms.inefficient.length} steps)
                  </h4>
                  <div className="font-mono text-sm space-y-1">
                    {lesson.algorithms.inefficient.map((step, idx) => (
                      <div key={idx} className="text-red-800">
                        {step}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
                  <h4 className="font-semibold text-green-900 mb-2">
                    ✅ Efficient Algorithm ({lesson.algorithms.efficient.length} steps)
                  </h4>
                  <div className="font-mono text-sm space-y-1">
                    {lesson.algorithms.efficient.map((step, idx) => (
                      <div key={idx} className="text-green-800">
                        {step}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {lesson.scratchBlocks && (
              <div className="bg-gray-800 text-white p-4 rounded-lg">
                <h4 className="font-semibold mb-3">Scratch Code Example</h4>
                <div className="font-mono text-sm space-y-1">
                  {lesson.scratchBlocks.map((block, idx) => (
                    <div key={idx} className={block.startsWith("  ") ? "pl-6 text-green-400" : "text-yellow-300"}>
                      {block}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          {/* Activities */}
          <TabsContent value="activity" className="space-y-4">
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
              <h3 className="font-bold text-green-900 mb-2">{lesson.activity.title}</h3>
              <p className="text-green-800 mb-3 text-pretty">{lesson.activity.description}</p>
              <ul className="space-y-2">
                {lesson.activity.tasks.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Star className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-green-900 text-pretty">{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            {lesson.activity.hasRobotGrid && <RobotGrid />}
            {lesson.activity.hasScratchBuilder && <ScratchBlockBuilder />}
          </TabsContent>

          {/* Exam Prep */}
          <TabsContent value="exam" className="space-y-4">
            <h3 className="font-bold text-xl mb-4">Exam-Style Questions</h3>
            {lesson.examQuestions.map((q, idx) => (
              <Card key={idx} className="p-4 bg-yellow-50 border-2 border-yellow-300">
                <h4 className="font-semibold mb-3 whitespace-pre-wrap text-balance">
                  Q{idx + 1}: {q.question}
                </h4>
                <div className="space-y-2 mb-3">
                  {q.options.map((option, optIdx) => (
                    <div
                      key={optIdx}
                      className={`p-2 rounded ${
                        optIdx === q.correct ? "bg-green-100 border border-green-300" : "bg-white"
                      }`}
                    >
                      <span className="text-pretty">{option}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-blue-100 border border-blue-300 p-3 rounded">
                  <p className="text-sm font-semibold text-blue-900 text-balance">Answer: {q.answer}</p>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </Card>

      {/* Navigation Controls */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={prevLesson}
          disabled={currentLesson === 0}
          className="flex items-center gap-2 bg-transparent"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous Lesson
        </Button>

        <Button
          onClick={nextLesson}
          disabled={currentLesson === lessons.length - 1}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
        >
          Next Lesson
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  )
}
