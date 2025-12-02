"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle, RefreshCw } from "lucide-react"
import Image from "next/image"

const quizQuestions = [
  {
    id: 1,
    lesson: "Lesson 3: Algorithms & Sequence",
    question:
      "What is wrong with this algorithm?\n\n1. Enjoy drink\n2. Pour drink into glass\n3. Put away drink and glass\n4. Open bottle of drink",
    options: ["A) It is impossible", "B) It is missing a loop", "C) It is out of sequence", "D) Nothing at all"],
    correct: 2,
    explanation:
      "Answer: C - The sequence is wrong. You must OPEN the bottle BEFORE pouring it. If the sequence is wrong in an algorithm, the program will produce unintended results.",
  },
  {
    id: 2,
    lesson: "Lesson 3: Efficiency",
    question: "What does 'being efficient' mean when writing algorithms?",
    options: [
      "A) Using the fewest number of commands to achieve the same outcome",
      "B) Making sure you include selection",
      "C) Using as many commands as possible",
      "D) Making sure you remove indentations from the algorithm",
    ],
    correct: 0,
    explanation:
      "Answer: A - Efficiency means achieving the same result with fewer commands. This is why we use loops/repeat - they make our code more efficient by reducing the number of commands needed.",
  },
  {
    id: 3,
    lesson: "Lesson 4: Code Translation",
    question: "What will happen when you click 'run' on this program?\n\nwhen run\nrepeat 5 times\n    move forward",
    options: [
      "A) The robot will not move",
      "B) The robot will move five times and collect the gems",
      "C) The robot will only move one space",
      "D) The robot will only move four spaces",
    ],
    correct: 1,
    explanation:
      "Answer: B - The repeat block executes the move command 5 times. Because 'move forward' is indented inside the repeat block, it will happen 5 times total.",
    visualImage: "/images/04.png",
  },
  {
    id: 4,
    lesson: "Lesson 4: Key Terms",
    question: "Match: User interaction",
    options: [
      "A) Letting the user input data that affects program outputs",
      "B) An agreed set of algorithm codes that users understand",
      "C) Spotting and removing errors from an algorithm or program",
    ],
    correct: 0,
    explanation:
      "Answer: A - User interaction means letting the user input data (like pressing keys, clicking) that affects what the program does (outputs).",
  },
  {
    id: 5,
    lesson: "Lesson 4: Key Terms",
    question: "Match: Notation",
    options: [
      "A) Letting the user input data that affects program outputs",
      "B) An agreed set of algorithm codes that users understand",
      "C) Spotting and removing errors from an algorithm or program",
    ],
    correct: 1,
    explanation:
      "Answer: B - Notation is an agreed set of algorithm codes that users understand (like 'repeat', 'if...then', proper indentation).",
  },
  {
    id: 6,
    lesson: "Lesson 4: Key Terms",
    question: "Match: Debugging",
    options: [
      "A) Letting the user input data that affects program outputs",
      "B) An agreed set of algorithm codes that users understand",
      "C) Spotting and removing errors from an algorithm or program",
    ],
    correct: 2,
    explanation: "Answer: C - Debugging means spotting and removing errors (bugs) from an algorithm or program.",
  },
  {
    id: 7,
    lesson: "Lesson 5: Game Design",
    question: "Which of these is an example of decomposition?",
    options: [
      "A) Writing all the code at once without testing",
      "B) Breaking a game project into smaller parts like background, sprites, and movement",
      "C) Making the game as complicated as possible",
      "D) Only focusing on one part of the game",
    ],
    correct: 1,
    explanation:
      "Answer: B - Decomposition means breaking big problems into smaller, manageable sub-problems. Example: making Frogger → add background → add sprites → add movement → add collision.",
  },
  {
    id: 8,
    lesson: "Lesson 6: Forever Loops",
    question:
      "Which block would be most useful for making automated characters move around the screen until the game ends?",
    options: ["A) IF...THEN...", "B) repeat", "C) wait until", "D) forever loop"],
    correct: 3,
    explanation:
      "Answer: D - Forever loop runs continuously until the program is stopped. Perfect for automated objects like cars that need to keep moving throughout the entire game.",
  },
  {
    id: 9,
    lesson: "Lesson 7: Selection",
    question:
      "What is selection in a computing context?\n\nThink of this example: IF green walk light on THEN cross road ELSE stand and wait",
    options: [
      "A) Choosing which sprite to use",
      "B) Choosing between pathways based on a condition",
      "C) Selecting colors for your game",
      "D) Choosing the background",
    ],
    correct: 1,
    explanation:
      "Answer: B - Selection means making choices in your code using IF...THEN...ELSE. The program checks a condition (IF) and chooses which action to take (THEN/ELSE). Example: IF frog touches car THEN game over ELSE continue.",
  },
  {
    id: 10,
    lesson: "Lesson 7: Code Debugging",
    question:
      "What are the errors in this movement code?\n\nwhen left arrow key pressed\nchange x by (25)\nwhen down arrow key pressed\nchange y by (25)\nwhen right arrow key pressed\nchange x by (25)\nwhen down arrow key pressed\nchange y by (25)",
    options: [
      "A) No errors",
      "B) Down arrow appears twice (should be up arrow once) and missing negative values for left/down movement",
      "C) Only missing the up arrow key",
      "D) Only missing negative values",
    ],
    correct: 1,
    explanation:
      "Answer: B - Two errors: (1) 'when down arrow key pressed' appears TWICE - one should be 'when up arrow key pressed'. (2) Left movement needs 'change x by -25' (negative) and down movement needs 'change y by -25' (negative values to go left/down).",
  },
]

export function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)
  const [answeredQuestions, setAnsweredQuestions] = useState<number[]>([])

  const question = quizQuestions[currentQuestion]

  const handleAnswer = (index: number) => {
    if (showResult) return

    setSelectedAnswer(index)
    setShowResult(true)

    if (index === question.correct) {
      setScore(score + 1)
    }

    setAnsweredQuestions([...answeredQuestions, currentQuestion])
  }

  const nextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
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
    setAnsweredQuestions([])
  }

  const isQuizComplete = currentQuestion === quizQuestions.length - 1 && showResult

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Score Card */}
      <Card className="p-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Exam Practice Quiz</h2>
            <p className="opacity-90">Real exam-style questions with detailed explanations</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold">
              {score}/{answeredQuestions.length}
            </div>
            <div className="text-sm opacity-90">Score</div>
          </div>
        </div>
      </Card>

      {/* Progress */}
      <div className="flex gap-2">
        {quizQuestions.map((_, index) => (
          <div
            key={index}
            className={`h-2 flex-1 rounded-full transition-colors ${
              index < currentQuestion ? "bg-green-500" : index === currentQuestion ? "bg-blue-500" : "bg-gray-200"
            }`}
          />
        ))}
      </div>

      {/* Question Card */}
      <Card className="p-6">
        <div className="mb-4">
          <Badge className="mb-2">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </Badge>
          <h3 className="text-xl font-semibold whitespace-pre-wrap font-mono text-balance">{question.question}</h3>
          {question.visualImage && (
            <div className="mt-4">
              <Image src={question.visualImage || "/placeholder.svg"} alt="Visual Image" width={400} height={300} />
            </div>
          )}
        </div>

        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index
            const isCorrect = index === question.correct
            const showFeedback = showResult

            return (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={showResult}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  showFeedback
                    ? isCorrect
                      ? "border-green-500 bg-green-50"
                      : isSelected
                        ? "border-red-500 bg-red-50"
                        : "border-gray-200"
                    : isSelected
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-gray-300"
                } ${showResult ? "cursor-default" : "cursor-pointer"}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-pretty">{option}</span>
                  {showFeedback && isCorrect && <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />}
                  {showFeedback && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  )}
                </div>
              </button>
            )
          })}
        </div>

        {/* Explanation */}
        {showResult && (
          <div className="mt-4 space-y-3">
            <div
              className={`p-4 rounded-lg ${
                selectedAnswer === question.correct
                  ? "bg-green-50 border border-green-200"
                  : "bg-blue-50 border border-blue-200"
              }`}
            >
              <div className="font-semibold mb-1">
                {selectedAnswer === question.correct ? "✅ Correct! Well done!" : "📖 Explanation:"}
              </div>
              <p className="text-sm text-pretty">{question.explanation}</p>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-6 flex justify-between">
          <Button variant="outline" onClick={resetQuiz} disabled={answeredQuestions.length === 0}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Restart Quiz
          </Button>

          {showResult && !isQuizComplete && <Button onClick={nextQuestion}>Next Question →</Button>}
        </div>
      </Card>

      {/* Final Results */}
      {isQuizComplete && (
        <Card className="p-6 bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-300">
          <h3 className="text-2xl font-bold mb-4 text-center">Quiz Complete</h3>
          <div className="text-center mb-4">
            <div className="text-5xl font-bold text-green-600">
              {score}/{quizQuestions.length}
            </div>
            <p className="text-muted-foreground mt-2 text-balance">
              {score === quizQuestions.length
                ? "Perfect score! You're ready for the exam!"
                : score >= quizQuestions.length * 0.7
                  ? "Great job! Review the explanations for questions you missed and you'll ace it!"
                  : "Good effort! Review all the exam tips and key concepts, then try again!"}
            </p>
          </div>
          <Button onClick={resetQuiz} className="w-full">
            <RefreshCw className="w-4 h-4 mr-2" />
            Practice Again
          </Button>
        </Card>
      )}

      {/* Study Reminder */}
      <Card className="p-4 bg-blue-50 border border-blue-200">
        <h4 className="font-semibold text-blue-900 mb-2">Exam Preparation Strategy</h4>
        <ul className="space-y-1 text-sm text-blue-800">
          <li>✓ Take this quiz multiple times until you get 10/10</li>
          <li>✓ Read ALL explanations carefully</li>
          <li>✓ Go back to Key Concepts tab to review any topics you struggle with</li>
          <li>✓ Practice writing algorithms with proper indentation</li>
          <li>✓ Remember key phrases like 'wrong sequence → unintended results'</li>
        </ul>
      </Card>
    </div>
  )
}
