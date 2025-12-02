"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, XCircle, Brain, Lightbulb, Code, Gamepad2, RefreshCw, BookOpen, Zap } from "lucide-react"

const revisionLessons = [
  {
    id: 3,
    title: "Programming Solutions with Loops",
    icon: Code,
    color: "bg-blue-500",
    keywords: ["Algorithm", "Efficiency", "Loop", "Route", "Criteria", "Debug"],
    concepts: [
      {
        title: "Efficiency in Algorithms",
        description: "Using the fewest steps to solve a problem while meeting all criteria",
      },
      {
        title: "Multiple Solutions",
        description: "Most problems have more than one solution, but we aim for the most efficient",
      },
      {
        title: "Loops for Efficiency",
        description: "Repeating commands using loops makes algorithms shorter and less error-prone",
      },
    ],
    visualization: {
      type: "grid",
      description: "Robot Route Challenge - Find the most efficient path from A to B collecting all stars",
    },
    algorithmExample: `Inefficient (9 commands):
Forward, Forward, Left, Forward, Right, Forward, Forward, Right, Forward

Efficient with Loop (5 lines):
Repeat 2 times: Forward
Left
Repeat 3 times: Forward
Right
Repeat 2 times: Forward`,
    examTip: "Always read what makes a route 'efficient' - is it distance, number of commands, or prizes collected?",
  },
  {
    id: 4,
    title: "From Algorithms to Code",
    icon: Brain,
    color: "bg-purple-500",
    keywords: ["Code", "Command", "Repeat", "Scratch", "Sprite", "Debugging", "Notation"],
    concepts: [
      {
        title: "Algorithm vs Code",
        description: "An algorithm uses agreed notation; code is exactly what the computer reads",
      },
      {
        title: "Scratch Terminology",
        description: "In Scratch, we use 'repeat' instead of 'loop'",
      },
      {
        title: "Sequencing",
        description: "Commands must be in the correct order for the program to work properly",
      },
    ],
    scratchBlocks: [
      "when green flag clicked",
      "repeat (5)",
      "  move (10) steps",
      "  turn ↻ (15) degrees",
      "  wait (1) seconds",
      "go to x:(0) y:(0)",
    ],
    examTip: "In Scratch exams: 'repeat' = loop, green flag = start, indentation shows what's INSIDE the repeat",
  },
  {
    id: 5,
    title: "Creating a 'Frogger'-Style Game",
    icon: Gamepad2,
    color: "bg-green-500",
    keywords: ["Decomposition", "Sprite", "IF...THEN", "String", "Collision", "Game Design"],
    concepts: [
      {
        title: "Game Design",
        description: "Breaking down a complex game into manageable parts",
      },
      {
        title: "Decomposition Steps",
        description: "Background → Sprites → Movement → Collision → Scoring",
      },
      {
        title: "String Data Type",
        description: "Text messages like 'Well done!' or 'Game Over!'",
      },
    ],
    decompositionSteps: [
      "Setup phase: Find/create background",
      "Setup phase: Import/create sprites (frog, cars, target)",
      "Input: Link frog movement to arrow keys",
      "Repetition: Make cars move constantly",
      "Selection: Detect frog touching car",
      "Selection: Detect frog reaching home",
      "Variables: Add score counter and lives",
      "Polish: Add sounds and animations",
    ],
    examTip: "List 4-6 clear sub-problems in LOGICAL ORDER. Use words like 'first', 'then', 'next'",
  },
  {
    id: 6,
    title: "Forever Loops",
    icon: RefreshCw,
    color: "bg-orange-500",
    keywords: ["Forever Loop", "Initial Conditions", "Automated Objects", "Continuous Movement"],
    concepts: [
      {
        title: "Forever vs Repeat",
        description: "Forever runs continuously; Repeat X stops after X times",
      },
      {
        title: "Initial Conditions",
        description: "Set starting positions and values when game begins",
      },
      {
        title: "Game Objects",
        description: "Player-controlled use keys; Automated objects use forever loops",
      },
    ],
    codeComparison: {
      repeat: "repeat (10)\n  move (10) steps\n→ Moves 10 times then STOPS",
      forever: "forever\n  move (10) steps\n→ Keeps moving CONTINUOUSLY",
    },
    examTip: "Forever loops are perfect for automated game objects that need to move throughout the entire game",
  },
  {
    id: 7,
    title: "IF...THEN Conditions",
    icon: Zap,
    color: "bg-pink-500",
    keywords: ["Selection", "IF...THEN...ELSE", "Conditions", "Collision Detection", "Variables"],
    concepts: [
      {
        title: "Selection",
        description: "Making choices in code based on conditions",
      },
      {
        title: "Collision Detection",
        description: "IF frog touches car THEN game over",
      },
      {
        title: "Variables in Games",
        description: "Score counters and lives that change during gameplay",
      },
    ],
    selectionExamples: [
      "IF key pressed THEN move sprite",
      "IF touching color THEN change score",
      "IF score > 10 THEN display 'You Win!'",
      "IF lives = 0 THEN game over ELSE continue",
    ],
    examTip: "Selection lets your program make decisions. Always check the condition in the IF part",
  },
]

const enhancedExamQuestions = [
  {
    id: 1,
    lesson: "Lesson 3",
    difficulty: "Medium",
    question:
      "What is wrong with this algorithm?\n\n1. Enjoy drink\n2. Pour drink into glass\n3. Put away drink and glass\n4. Open bottle of drink",
    options: ["A) It is impossible", "B) It is missing a loop", "C) It is out of sequence", "D) Nothing at all"],
    correct: 2,
    explanation:
      "The sequence is wrong! You can't enjoy a drink before opening the bottle. The correct order should be: Open bottle → Pour into glass → Enjoy drink → Put away. Remember: If sequence is wrong → unintended results!",
    keyPoint: "SEQUENCE matters! Steps must be in logical order.",
  },
  {
    id: 2,
    lesson: "Lesson 3",
    difficulty: "Easy",
    question: "What does 'being efficient' mean when writing algorithms?",
    options: [
      "A) Using the fewest number of commands to achieve the same outcome",
      "B) Making sure you include selection",
      "C) Using as many commands as possible",
      "D) Making sure you remove indentations",
    ],
    correct: 0,
    explanation:
      "Efficiency means achieving the same result with fewer commands. That's why loops are so important - 'Repeat 10 times: Forward' is much more efficient than writing 'Forward' 10 separate times!",
    keyPoint: "Efficient = Same outcome, fewer commands",
  },
  {
    id: 3,
    lesson: "Lesson 3",
    difficulty: "Hard",
    question:
      "James wrote: Right, Forward, Forward, Left, Forward, Right, Forward, Forward, Right, Forward (9 commands)\n\nYusuf wrote: Loop 6: Forward, Loop 3: Right, Left (5 commands)\n\nWho is more efficient?",
    options: [
      "A) James - his algorithm is clearer",
      "B) Yusuf - he used loops to reduce commands",
      "C) Both are equally efficient",
      "D) Neither - both have errors",
    ],
    correct: 1,
    explanation:
      "Yusuf is more efficient! He used loops to write the same route with only 5 lines instead of 9. Using loops makes your code shorter, easier to read, and less prone to typing errors.",
    keyPoint: "Loops make algorithms MORE EFFICIENT",
  },
  {
    id: 4,
    lesson: "Lesson 4",
    difficulty: "Medium",
    question: "What will happen when you run this program?\n\nwhen run\nrepeat 5 times\n    move forward",
    options: [
      "A) The robot will not move",
      "B) The robot will move five times",
      "C) The robot will only move one space",
      "D) The robot will move four times",
    ],
    correct: 1,
    explanation:
      "The repeat block executes 'move forward' exactly 5 times. The indentation shows that 'move forward' is INSIDE the repeat block, so it happens 5 times total.",
    keyPoint: "Indentation shows what's INSIDE the loop",
  },
  {
    id: 5,
    lesson: "Lesson 4",
    difficulty: "Easy",
    question: "In Scratch, what block makes a program start?",
    options: ["A) when space key pressed", "B) when green flag clicked", "C) forever", "D) repeat"],
    correct: 1,
    explanation:
      "'When green flag clicked' is the starting event block in Scratch. When you click the green flag above the stage, any code connected to this block begins running.",
    keyPoint: "Green flag = START in Scratch",
  },
  {
    id: 6,
    lesson: "Lesson 5",
    difficulty: "Medium",
    question: "Which of these is the BEST example of decomposition for creating a game?",
    options: [
      "A) Write all the code at once without planning",
      "B) Background → Sprites → Movement → Collision → Scoring",
      "C) Make everything as complicated as possible",
      "D) Only focus on one part until perfect",
    ],
    correct: 1,
    explanation:
      "Decomposition means breaking big problems into smaller, manageable steps in LOGICAL ORDER. Building a game step-by-step (background first, then add sprites, then movement, etc.) makes complex projects achievable!",
    keyPoint: "Decomposition = Break into smaller sub-problems",
  },
  {
    id: 7,
    lesson: "Lesson 5",
    difficulty: "Hard",
    question: "What is a STRING data type used for in games?",
    options: [
      "A) Storing player scores as numbers",
      "B) Displaying text messages like 'Game Over!' or 'You Win!'",
      "C) Controlling sprite movement",
      "D) Creating loops",
    ],
    correct: 1,
    explanation:
      "A STRING is a sequence of characters (text). In games, strings display messages to the user: 'Well done!', 'Game Over!', 'Level Complete!'. Numbers like scores use INTEGER variables instead.",
    keyPoint: "String = TEXT messages, not numbers",
  },
  {
    id: 8,
    lesson: "Lesson 6",
    difficulty: "Medium",
    question: "Which loop type is BEST for making cars move continuously until the game ends?",
    options: ["A) repeat (10)", "B) IF...THEN", "C) forever", "D) wait until"],
    correct: 2,
    explanation:
      "FOREVER loop runs continuously until the program stops - perfect for automated objects! Cars should keep moving throughout the game. 'Repeat 10' would make them stop after 10 moves.",
    keyPoint: "Forever = Continuous, Repeat X = Stops after X",
  },
  {
    id: 9,
    lesson: "Lesson 6",
    difficulty: "Easy",
    question: "What are 'initial conditions' in a game?",
    options: [
      "A) The final score at the end",
      "B) Starting positions and values when the game begins",
      "C) The rules for winning",
      "D) The game's background music",
    ],
    correct: 1,
    explanation:
      "Initial conditions set up the game's starting state: sprite starting positions (x and y coordinates), score = 0, lives = 3, etc. This ensures the game always starts the same way.",
    keyPoint: "Initial conditions = Starting setup",
  },
  {
    id: 10,
    lesson: "Lesson 7",
    difficulty: "Medium",
    question: "What is SELECTION in programming?\n\nExample: IF green walk light THEN cross road ELSE wait",
    options: [
      "A) Choosing which sprite to use in your game",
      "B) Making choices in code based on conditions (IF...THEN...ELSE)",
      "C) Selecting colors for backgrounds",
      "D) Choosing the best algorithm",
    ],
    correct: 1,
    explanation:
      "Selection means making decisions in code using IF...THEN...ELSE. The program checks a condition (IF) and chooses which path to take (THEN or ELSE). Example: IF frog touches car THEN game over ELSE continue playing.",
    keyPoint: "Selection = IF...THEN...ELSE decisions",
  },
  {
    id: 11,
    lesson: "Lesson 7",
    difficulty: "Hard",
    question:
      "Find the TWO errors in this movement code:\n\nwhen left arrow pressed → change x by (25)\nwhen down arrow pressed → change y by (25)\nwhen right arrow pressed → change x by (25)\nwhen down arrow pressed → change y by (25)",
    options: [
      "A) No errors",
      "B) Down appears twice (should be up) + missing negative values for left/down",
      "C) Only missing the up arrow",
      "D) Only missing negative values",
    ],
    correct: 1,
    explanation:
      "TWO ERRORS: (1) 'down arrow' appears TWICE - one should be 'UP arrow'. (2) Left needs 'change x by -25' (negative) and down needs 'change y by -25' (negative values move left/down on the coordinate grid).",
    keyPoint: "Check for: duplicate keys + correct positive/negative values",
  },
  {
    id: 12,
    lesson: "Lesson 7",
    difficulty: "Medium",
    question: "Which code correctly detects collision and ends the game?",
    options: [
      "A) forever\n    IF touching car THEN stop all",
      "B) repeat 10\n    touching car",
      "C) when green flag clicked\n    touching car",
      "D) IF color = red THEN move forward",
    ],
    correct: 0,
    explanation:
      "Option A is correct! Use a FOREVER loop to continuously check IF the sprite is touching the car. When the condition is TRUE, THEN execute 'stop all' to end the game. This is how collision detection works in games.",
    keyPoint: "Forever + IF touching + THEN action",
  },
]

export function InteractiveRevision() {
  const [activeLesson, setActiveLesson] = useState(0)
  const [quizMode, setQuizMode] = useState(false)
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [completedQuestions, setCompletedQuestions] = useState<number[]>([])

  const lesson = revisionLessons[activeLesson]
  const question = enhancedExamQuestions[currentQuestion]

  const handleAnswer = (index: number) => {
    if (showResult) return
    setSelectedAnswer(index)
    setShowResult(true)
    if (index === question.correct) {
      setScore(score + 1)
    }
    setCompletedQuestions([...completedQuestions, currentQuestion])
  }

  const nextQuestion = () => {
    if (currentQuestion < enhancedExamQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowResult(false)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswer(null)
    setShowResult(false)
    setScore(0)
    setCompletedQuestions([])
  }

  const progressPercent = ((currentQuestion + 1) / enhancedExamQuestions.length) * 100

  if (quizMode) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Quiz Header */}
        <Card className="p-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-3xl font-bold text-balance">Enhanced Practice Exam</h2>
              <p className="text-white/90 mt-1">12 comprehensive questions with detailed explanations</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold">{score}</div>
              <div className="text-sm opacity-90">/{completedQuestions.length}</div>
            </div>
          </div>
          <Progress value={progressPercent} className="h-2 bg-white/20" />
        </Card>

        {/* Question Card */}
        <Card className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="secondary" className="text-base px-4 py-1">
              Question {currentQuestion + 1}/{enhancedExamQuestions.length}
            </Badge>
            <Badge
              className={`${
                question.difficulty === "Easy"
                  ? "bg-green-500"
                  : question.difficulty === "Medium"
                    ? "bg-orange-500"
                    : "bg-red-500"
              }`}
            >
              {question.difficulty}
            </Badge>
            <Badge variant="outline">{question.lesson}</Badge>
          </div>

          <h3 className="text-2xl font-semibold mb-6 whitespace-pre-wrap font-mono leading-relaxed text-balance">
            {question.question}
          </h3>

          <div className="space-y-4">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index
              const isCorrect = index === question.correct
              const showFeedback = showResult

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  disabled={showResult}
                  className={`w-full text-left p-5 rounded-xl border-2 transition-all ${
                    showFeedback
                      ? isCorrect
                        ? "border-green-500 bg-green-50 shadow-lg scale-[1.02]"
                        : isSelected
                          ? "border-red-500 bg-red-50"
                          : "border-gray-200 opacity-50"
                      : isSelected
                        ? "border-blue-500 bg-blue-50 shadow-md"
                        : "border-gray-300 hover:border-blue-300 hover:bg-gray-50"
                  } ${showResult ? "cursor-default" : "cursor-pointer"}`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg text-pretty">{option}</span>
                    {showFeedback && isCorrect && <CheckCircle2 className="w-7 h-7 text-green-600 flex-shrink-0" />}
                    {showFeedback && isSelected && !isCorrect && (
                      <XCircle className="w-7 h-7 text-red-600 flex-shrink-0" />
                    )}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Detailed Explanation */}
          {showResult && (
            <div className="mt-8 space-y-4">
              <Card
                className={`p-6 ${
                  selectedAnswer === question.correct
                    ? "bg-green-50 border-2 border-green-300"
                    : "bg-blue-50 border-2 border-blue-300"
                }`}
              >
                <div className="flex items-start gap-3">
                  {selectedAnswer === question.correct ? (
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  ) : (
                    <Lightbulb className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  )}
                  <div className="flex-1">
                    <h4 className="font-bold text-lg mb-2">
                      {selectedAnswer === question.correct ? "Correct! Well done!" : "Here's why:"}
                    </h4>
                    <p className="text-base leading-relaxed text-pretty mb-3">{question.explanation}</p>
                    <div className="bg-white/60 rounded-lg p-3 border-l-4 border-purple-500">
                      <div className="font-semibold text-purple-900 mb-1">Key Point to Remember:</div>
                      <p className="text-purple-800">{question.keyPoint}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 flex justify-between">
            <Button variant="outline" onClick={() => setQuizMode(false)} size="lg">
              <BookOpen className="w-4 h-4 mr-2" />
              Back to Lessons
            </Button>

            <div className="flex gap-3">
              {completedQuestions.length > 0 && (
                <Button variant="outline" onClick={resetQuiz} size="lg">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Restart
                </Button>
              )}
              {showResult && currentQuestion < enhancedExamQuestions.length - 1 && (
                <Button onClick={nextQuestion} size="lg">
                  Next Question →
                </Button>
              )}
            </div>
          </div>
        </Card>

        {/* Final Score */}
        {currentQuestion === enhancedExamQuestions.length - 1 && showResult && (
          <Card className="p-8 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 border-2 border-green-400">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">Quiz Complete!</h3>
              <div className="text-7xl font-bold mb-4">
                <span className={score >= 10 ? "text-green-600" : score >= 8 ? "text-blue-600" : "text-orange-600"}>
                  {score}
                </span>
                <span className="text-gray-400">/{enhancedExamQuestions.length}</span>
              </div>
              <p className="text-xl text-muted-foreground mb-6 text-balance">
                {score === enhancedExamQuestions.length
                  ? "Perfect score! You're absolutely ready for the exam!"
                  : score >= 10
                    ? "Excellent work! You've mastered the content!"
                    : score >= 8
                      ? "Great job! Review the explanations and try again to hit 100%!"
                      : "Good effort! Go back to the lessons and practice more!"}
              </p>
              <div className="flex gap-4 justify-center">
                <Button onClick={resetQuiz} size="lg" className="px-8">
                  <RefreshCw className="w-5 h-5 mr-2" />
                  Try Again
                </Button>
                <Button onClick={() => setQuizMode(false)} variant="outline" size="lg" className="px-8">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Review Lessons
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header Card */}
      <Card className="p-8 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-4xl font-bold mb-2 text-balance">Interactive Revision Mode</h2>
            <p className="text-xl text-white/90 text-balance">Comprehensive lessons 3-7 with enhanced exam practice</p>
          </div>
          <Button
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 px-8"
            onClick={() => setQuizMode(true)}
          >
            <Brain className="w-5 h-5 mr-2" />
            Start Practice Exam
          </Button>
        </div>
      </Card>

      {/* Lesson Selector */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {revisionLessons.map((les, index) => {
          const Icon = les.icon
          return (
            <button
              key={les.id}
              onClick={() => setActiveLesson(index)}
              className={`p-4 rounded-xl border-2 transition-all ${
                activeLesson === index
                  ? "border-purple-500 bg-purple-50 shadow-lg scale-105"
                  : "border-gray-200 hover:border-purple-300 hover:shadow-md"
              }`}
            >
              <div className={`${les.color} w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-semibold text-center text-balance">Lesson {les.id}</div>
            </button>
          )
        })}
      </div>

      {/* Lesson Content */}
      <Card className="p-8">
        <div className="flex items-center gap-4 mb-6">
          <div className={`${lesson.color} p-4 rounded-xl`}>
            <lesson.icon className="w-8 h-8 text-white" />
          </div>
          <div>
            <Badge className="mb-2">Lesson {lesson.id}</Badge>
            <h3 className="text-3xl font-bold text-balance">{lesson.title}</h3>
          </div>
        </div>

        <Tabs defaultValue="concepts" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="concepts">Core Concepts</TabsTrigger>
            <TabsTrigger value="examples">Examples</TabsTrigger>
            <TabsTrigger value="keywords">Keywords</TabsTrigger>
            <TabsTrigger value="exam">Exam Tips</TabsTrigger>
          </TabsList>

          <TabsContent value="concepts" className="space-y-4">
            {lesson.concepts.map((concept, index) => (
              <Card key={index} className="p-6 bg-gradient-to-r from-blue-50 to-purple-50">
                <h4 className="text-xl font-bold mb-2 text-balance">{concept.title}</h4>
                <p className="text-lg text-muted-foreground text-balance">{concept.description}</p>
              </Card>
            ))}

            {lesson.decompositionSteps && (
              <Card className="p-6 bg-green-50 border-2 border-green-300">
                <h4 className="text-xl font-bold mb-4">Decomposition Steps</h4>
                <ol className="space-y-2">
                  {lesson.decompositionSteps.map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="bg-green-600 text-white w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                        {index + 1}
                      </span>
                      <span className="text-lg pt-0.5">{step}</span>
                    </li>
                  ))}
                </ol>
              </Card>
            )}

            {lesson.selectionExamples && (
              <Card className="p-6 bg-pink-50 border-2 border-pink-300">
                <h4 className="text-xl font-bold mb-4">Selection Examples</h4>
                <div className="space-y-3">
                  {lesson.selectionExamples.map((example, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-pink-200 font-mono text-base">
                      {example}
                    </div>
                  ))}
                </div>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="examples" className="space-y-4">
            {lesson.algorithmExample && (
              <Card className="p-6 bg-gray-50">
                <h4 className="text-xl font-bold mb-4">Algorithm Comparison</h4>
                <pre className="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-base leading-relaxed whitespace-pre-wrap">
                  {lesson.algorithmExample}
                </pre>
              </Card>
            )}

            {lesson.scratchBlocks && (
              <Card className="p-6 bg-purple-50 border-2 border-purple-300">
                <h4 className="text-xl font-bold mb-4">Scratch Code Blocks</h4>
                <div className="space-y-2">
                  {lesson.scratchBlocks.map((block, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg font-mono text-base ${
                        block.startsWith("  ") ? "ml-8 bg-blue-500 text-white" : "bg-purple-600 text-white"
                      }`}
                    >
                      {block}
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {lesson.codeComparison && (
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-6 bg-red-50 border-2 border-red-300">
                  <h4 className="font-bold mb-3 text-red-900">Repeat Loop</h4>
                  <pre className="bg-gray-900 text-red-400 p-4 rounded-lg font-mono text-sm whitespace-pre-wrap">
                    {lesson.codeComparison.repeat}
                  </pre>
                </Card>
                <Card className="p-6 bg-green-50 border-2 border-green-300">
                  <h4 className="font-bold mb-3 text-green-900">Forever Loop</h4>
                  <pre className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm whitespace-pre-wrap">
                    {lesson.codeComparison.forever}
                  </pre>
                </Card>
              </div>
            )}

            {lesson.visualization && (
              <Card className="p-6 bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300">
                <h4 className="text-xl font-bold mb-3">
                  {lesson.visualization.type === "grid" ? "Visual Challenge" : "Visualization"}
                </h4>
                <p className="text-lg text-balance">{lesson.visualization.description}</p>
                {lesson.visualization.type === "grid" && (
                  <div className="mt-6 bg-white p-6 rounded-lg">
                    <div className="grid grid-cols-5 gap-2 max-w-sm mx-auto">
                      {["A", "", "★", "", "", "", "★", "", "★", "", "", "", "", "★", "", "", "", "", "", "B"].map(
                        (cell, i) => (
                          <div
                            key={i}
                            className={`aspect-square flex items-center justify-center text-2xl font-bold border-2 rounded ${
                              cell === "A"
                                ? "bg-green-200 border-green-400"
                                : cell === "B"
                                  ? "bg-red-200 border-red-400"
                                  : cell === "★"
                                    ? "bg-yellow-200 border-yellow-400"
                                    : "bg-gray-50 border-gray-300"
                            }`}
                          >
                            {cell}
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                )}
              </Card>
            )}
          </TabsContent>

          <TabsContent value="keywords">
            <Card className="p-6">
              <h4 className="text-xl font-bold mb-4">Key Terms for Lesson {lesson.id}</h4>
              <div className="flex flex-wrap gap-3">
                {lesson.keywords.map((keyword, index) => (
                  <Badge key={index} variant="secondary" className="text-base px-4 py-2">
                    {keyword}
                  </Badge>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="exam">
            <Card className="p-8 bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-400">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-12 h-12 text-amber-600 flex-shrink-0" />
                <div>
                  <h4 className="text-2xl font-bold mb-3 text-amber-900">Exam Strategy</h4>
                  <p className="text-xl leading-relaxed text-amber-800 text-balance">{lesson.examTip}</p>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </Card>

      {/* Practice Prompt */}
      <Card className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-300">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-xl font-bold mb-2">Ready to test your knowledge?</h4>
            <p className="text-muted-foreground text-balance">
              Take the enhanced practice exam with 12 comprehensive questions
            </p>
          </div>
          <Button size="lg" onClick={() => setQuizMode(true)} className="px-8">
            <Brain className="w-5 h-5 mr-2" />
            Start Exam
          </Button>
        </div>
      </Card>
    </div>
  )
}
