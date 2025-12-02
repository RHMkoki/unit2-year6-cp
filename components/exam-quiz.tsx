"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle2, XCircle, HelpCircle, Trophy } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const examQuestions = [
  {
    id: 1,
    question: "What is wrong with this algorithm?",
    code: "Enjoy drink → Pour drink into glass → Put away drink and glass → Open bottle of drink",
    options: [
      { id: "A", text: "It is impossible" },
      { id: "B", text: "It is missing a loop" },
      { id: "C", text: "It is out of sequence" },
      { id: "D", text: "Nothing at all" },
    ],
    correctAnswer: "C",
    hint: "Think about the order of steps. Can you enjoy a drink before opening the bottle?",
    explanation:
      "The sequence is wrong - you cannot enjoy a drink before opening the bottle! The correct order should be: Open bottle → Pour into glass → Enjoy drink → Put away.",
    topic: "Sequence & Algorithms",
  },
  {
    id: 2,
    question: "What does 'being efficient' mean when writing algorithms?",
    options: [
      { id: "A", text: "Using the fewest number of commands to achieve the same outcome" },
      { id: "B", text: "Making sure you include selection" },
      { id: "C", text: "Using as many commands as possible" },
      { id: "D", text: "Making sure you remove indentations from the algorithm" },
    ],
    correctAnswer: "A",
    hint: "Think about what makes an algorithm better - doing more work or doing less work to get the same result?",
    explanation:
      "Efficiency means achieving the same result with fewer commands. Using loops instead of repeating commands makes programs more efficient.",
    topic: "Efficiency & Loops",
  },
  {
    id: 3,
    question: "What will happen when you click 'run' on this program?",
    code: "when run\nrepeat 5 times\n    move forward",
    options: [
      { id: "A", text: "The robot will not move" },
      { id: "B", text: "The robot will move five times and collect the gems" },
      { id: "C", text: "The robot will only move one space" },
      { id: "D", text: "The robot will only move four spaces" },
    ],
    correctAnswer: "B",
    hint: "Look at the repeat block carefully. How many times will 'move forward' execute?",
    explanation:
      "The repeat block will execute 'move forward' 5 times, so the robot moves 5 spaces and collects the gems.",
    topic: "Loops & Repetition",
  },
  {
    id: 4,
    question: "Match the term 'User interaction' to its correct description:",
    options: [
      { id: "A", text: "Letting the user input data that affects program outputs" },
      { id: "B", text: "An agreed set of algorithm codes that users understand" },
      { id: "C", text: "Spotting and removing errors from an algorithm or program" },
      { id: "D", text: "Making the program run faster" },
    ],
    correctAnswer: "A",
    hint: "Think about what 'interaction' means - how does the user communicate with the program?",
    explanation:
      "User interaction means allowing the user to input data (like keyboard presses or mouse clicks) that affects what the program does.",
    topic: "Programming Concepts",
  },
  {
    id: 5,
    question: "What does 'Debugging' mean?",
    options: [
      { id: "A", text: "Making the program more colorful" },
      { id: "B", text: "An agreed set of algorithm codes" },
      { id: "C", text: "Spotting and removing errors from an algorithm or program" },
      { id: "D", text: "Adding more features to a game" },
    ],
    correctAnswer: "C",
    hint: "Think about what 'bugs' are in programming. What do we do with bugs?",
    explanation:
      "Debugging means finding and fixing errors (bugs) in your algorithm or program. It's an essential programming skill!",
    topic: "Programming Concepts",
  },
  {
    id: 6,
    question: "Which of these is an example of decomposition?",
    options: [
      { id: "A", text: "Writing all the code at once without testing" },
      { id: "B", text: "Breaking a game project into smaller parts like background, sprites, and movement" },
      { id: "C", text: "Making the game as complicated as possible" },
      { id: "D", text: "Only focusing on one part of the game" },
    ],
    correctAnswer: "B",
    hint: "Decomposition means breaking something big into smaller pieces. Which option does that?",
    explanation:
      "Decomposition means breaking a big problem into smaller, manageable parts. This makes complex projects easier to build and test.",
    topic: "Problem Solving",
  },
  {
    id: 7,
    question:
      "Which block would be most useful for making automated characters move around the screen until the game ends?",
    options: [
      { id: "A", text: "IF...THEN..." },
      { id: "B", text: "repeat" },
      { id: "C", text: "wait until" },
      { id: "D", text: "forever loop" },
    ],
    correctAnswer: "D",
    hint: "Think about what 'until the game ends' means. What kind of loop runs continuously?",
    explanation:
      "A forever loop runs continuously until the program stops, making it perfect for automated movement of obstacles and characters.",
    topic: "Forever Loops",
  },
  {
    id: 8,
    question: "What is selection in programming?",
    options: [
      { id: "A", text: "Choosing which sprite to use" },
      { id: "B", text: "Making a choice between pathways based on a condition" },
      { id: "C", text: "Selecting colors for your game" },
      { id: "D", text: "Choosing the background" },
    ],
    correctAnswer: "B",
    hint: "Selection is about making choices in code. Which option describes making decisions based on conditions?",
    explanation:
      "Selection means the program makes a choice between different actions based on a condition. This is done using IF...THEN... blocks.",
    topic: "Selection & Conditions",
  },
  {
    id: 9,
    question: "In Scratch, what does a 'string' mean?",
    options: [
      { id: "A", text: "A piece of rope in the game" },
      { id: "B", text: "A sequence of characters (text messages)" },
      { id: "C", text: "A way to connect sprites" },
      { id: "D", text: "A musical instrument sound" },
    ],
    correctAnswer: "B",
    hint: "Think about text messages displayed in games like 'Well done!' or 'Game Over'",
    explanation:
      "A string is a sequence of characters used to display text messages to the user, such as 'Well done!' or 'Try again!'",
    topic: "Scratch Programming",
  },
  {
    id: 10,
    question: "When should you use indentation in your algorithm?",
    options: [
      { id: "A", text: "Never - it's not important" },
      { id: "B", text: "To show which commands are inside a loop or repetition" },
      { id: "C", text: "Only at the start of the algorithm" },
      { id: "D", text: "To make it look pretty" },
    ],
    correctAnswer: "B",
    hint: "Indentation shows which commands belong together. When do commands need to be grouped?",
    explanation:
      "Indentation is used to show which commands are inside a loop or repetition. It makes the algorithm clear and easy to understand.",
    topic: "Algorithm Structure",
  },
]

export function ExamQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({})
  const [showHint, setShowHint] = useState<Record<number, boolean>>({})
  const [checkedAnswers, setCheckedAnswers] = useState<Record<number, boolean>>({})
  const [showResults, setShowResults] = useState(false)

  const question = examQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / examQuestions.length) * 100
  const answeredCount = Object.keys(checkedAnswers).length
  const correctCount = Object.entries(checkedAnswers).filter(([id, isCorrect]) => isCorrect).length

  const handleSelectAnswer = (optionId: string) => {
    setSelectedAnswers({ ...selectedAnswers, [question.id]: optionId })
  }

  const handleCheckAnswer = () => {
    const isCorrect = selectedAnswers[question.id] === question.correctAnswer
    setCheckedAnswers({ ...checkedAnswers, [question.id]: isCorrect })
  }

  const handleNext = () => {
    if (currentQuestion < examQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const toggleHint = () => {
    setShowHint({ ...showHint, [question.id]: !showHint[question.id] })
  }

  const resetQuiz = () => {
    setCurrentQuestion(0)
    setSelectedAnswers({})
    setShowHint({})
    setCheckedAnswers({})
    setShowResults(false)
  }

  if (showResults) {
    const percentage = Math.round((correctCount / examQuestions.length) * 100)
    return (
      <Card className="p-8">
        <div className="text-center space-y-6">
          <Trophy className="w-20 h-20 mx-auto text-yellow-500" />
          <div>
            <h2 className="text-3xl font-bold mb-2">Quiz Complete!</h2>
            <p className="text-muted-foreground">Here's how you did:</p>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 border-2 border-blue-200">
            <div className="text-5xl font-bold text-blue-600 mb-2">{percentage}%</div>
            <div className="text-lg text-blue-800">
              You got <span className="font-bold">{correctCount}</span> out of{" "}
              <span className="font-bold">{examQuestions.length}</span> correct
            </div>
          </div>

          <div className="space-y-2">
            {percentage >= 80 && (
              <Alert className="border-green-200 bg-green-50">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                  <strong>Excellent work!</strong> You're well prepared for your exam. Keep reviewing the key concepts.
                </AlertDescription>
              </Alert>
            )}
            {percentage >= 60 && percentage < 80 && (
              <Alert className="border-amber-200 bg-amber-50">
                <HelpCircle className="h-4 w-4 text-amber-600" />
                <AlertDescription className="text-amber-800">
                  <strong>Good effort!</strong> Review the lessons for topics you found difficult and try again.
                </AlertDescription>
              </Alert>
            )}
            {percentage < 60 && (
              <Alert className="border-red-200 bg-red-50">
                <XCircle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  <strong>Keep practicing!</strong> Go back through the lessons and make sure you understand the key
                  concepts before trying again.
                </AlertDescription>
              </Alert>
            )}
          </div>

          <div className="flex gap-3 justify-center">
            <Button onClick={resetQuiz} size="lg">
              Try Again
            </Button>
            <Button onClick={() => window.location.reload()} variant="outline" size="lg">
              Back to Lessons
            </Button>
          </div>
        </div>
      </Card>
    )
  }

  const isAnswered = checkedAnswers[question.id] !== undefined
  const selectedOption = selectedAnswers[question.id]
  const isCorrectAnswer = checkedAnswers[question.id]

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <Card className="p-4">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="font-medium">
              Question {currentQuestion + 1} of {examQuestions.length}
            </span>
            <span className="text-muted-foreground">
              {answeredCount} answered • {correctCount} correct
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </Card>

      {/* Question Card */}
      <Card className="p-6">
        <div className="space-y-6">
          {/* Topic Badge */}
          <div>
            <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
              {question.topic}
            </span>
          </div>

          {/* Question */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-balance leading-relaxed">{question.question}</h3>
            {question.code && (
              <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4 font-mono text-sm whitespace-pre-wrap">
                {question.code}
              </div>
            )}
          </div>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option) => {
              const isSelected = selectedOption === option.id
              const showCorrect = isAnswered && option.id === question.correctAnswer
              const showWrong = isAnswered && isSelected && option.id !== question.correctAnswer

              return (
                <button
                  key={option.id}
                  onClick={() => !isAnswered && handleSelectAnswer(option.id)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                    showCorrect
                      ? "border-green-500 bg-green-50"
                      : showWrong
                        ? "border-red-500 bg-red-50"
                        : isSelected
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  } ${isAnswered ? "cursor-not-allowed" : "cursor-pointer"}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-bold text-lg">{option.id}</span>
                    <span className="flex-1 leading-relaxed">{option.text}</span>
                    {showCorrect && <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />}
                    {showWrong && <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />}
                  </div>
                </button>
              )
            })}
          </div>

          {/* Hint Button */}
          {!isAnswered && (
            <div>
              <Button onClick={toggleHint} variant="outline" size="sm" className="w-full bg-transparent">
                <HelpCircle className="w-4 h-4 mr-2" />
                {showHint[question.id] ? "Hide Hint" : "Need a Hint?"}
              </Button>

              {showHint[question.id] && (
                <Alert className="mt-3 border-blue-200 bg-blue-50">
                  <HelpCircle className="h-4 w-4 text-blue-600" />
                  <AlertDescription className="text-blue-800 leading-relaxed">{question.hint}</AlertDescription>
                </Alert>
              )}
            </div>
          )}

          {/* Check Answer Button */}
          {!isAnswered && selectedOption && (
            <Button onClick={handleCheckAnswer} className="w-full" size="lg">
              Check My Answer
            </Button>
          )}

          {/* Explanation */}
          {isAnswered && (
            <Alert className={isCorrectAnswer ? "border-green-200 bg-green-50" : "border-amber-200 bg-amber-50"}>
              {isCorrectAnswer ? (
                <CheckCircle2 className="h-4 w-4 text-green-600" />
              ) : (
                <HelpCircle className="h-4 w-4 text-amber-600" />
              )}
              <AlertDescription className={`${isCorrectAnswer ? "text-green-800" : "text-amber-800"} leading-relaxed`}>
                <strong>{isCorrectAnswer ? "Correct!" : "Not quite."}</strong> {question.explanation}
              </AlertDescription>
            </Alert>
          )}

          {/* Navigation */}
          <div className="flex gap-3 pt-4 border-t">
            <Button
              onClick={handlePrevious}
              variant="outline"
              disabled={currentQuestion === 0}
              className="flex-1 bg-transparent"
            >
              Previous
            </Button>
            <Button
              onClick={handleNext}
              disabled={!isAnswered}
              className="flex-1"
              variant={currentQuestion === examQuestions.length - 1 ? "default" : "default"}
            >
              {currentQuestion === examQuestions.length - 1 ? "See Results" : "Next Question"}
            </Button>
          </div>
        </div>
      </Card>

      {/* Instructions */}
      <Card className="p-4 bg-yellow-50 border-yellow-200">
        <p className="text-sm text-yellow-900 text-center text-balance leading-relaxed">
          💡 <strong>Tip:</strong> Try to answer without hints first. If you're stuck, use the hint button to help you
          think through the problem!
        </p>
      </Card>
    </div>
  )
}
