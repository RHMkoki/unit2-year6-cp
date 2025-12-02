"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle2, Circle, BookOpen, Code, Gamepad2 } from "lucide-react"
import { LessonContent } from "@/components/lesson-content"
import { ExamQuiz } from "@/components/exam-quiz"
import { KeyConcepts } from "@/components/key-concepts"
import { ProgressTracker } from "@/components/progress-tracker"

export default function ProgrammingStudyGuide() {
  const [completedLessons, setCompletedLessons] = useState<number[]>([])
  const [activeLesson, setActiveLesson] = useState(1)

  const lessonGroups = [
    {
      id: 1,
      title: "Introduction to Algorithms",
      lessons: [1, 2],
      icon: BookOpen,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "Programming with Loops",
      lessons: [3, 4],
      icon: Code,
      color: "bg-purple-500",
    },
    {
      id: 3,
      title: "Building a Frogger Game",
      lessons: [5, 6, 7],
      icon: Gamepad2,
      color: "bg-green-500",
    },
  ]

  const toggleLesson = (lessonId: number) => {
    if (completedLessons.includes(lessonId)) {
      setCompletedLessons(completedLessons.filter((id) => id !== lessonId))
    } else {
      setCompletedLessons([...completedLessons, lessonId])
    }
  }

  const progress = (completedLessons.length / 7) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-yellow-400 to-orange-400 border-b-4 border-orange-500 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-white drop-shadow-md">Year 6 Programming Unit</h1>
              <p className="text-white/90 mt-2 text-lg font-medium">Unit 2: Programming (Part 1) - Lessons 3-7</p>
            </div>
            <div className="text-right bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
              <div className="text-sm font-medium text-white/90">Your Progress</div>
              <div className="text-3xl font-bold text-white">{Math.round(progress)}%</div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="lessons" className="space-y-6">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 h-auto p-1">
            <TabsTrigger value="lessons" className="text-base py-3">
              📚 Lessons
            </TabsTrigger>
            <TabsTrigger value="concepts" className="text-base py-3">
              🧠 Key Concepts
            </TabsTrigger>
            <TabsTrigger value="exam" className="text-base py-3">
              📝 End of Unit Exam
            </TabsTrigger>
            <TabsTrigger value="checklist" className="text-base py-3">
              ✅ Final Review
            </TabsTrigger>
          </TabsList>

          {/* Lessons Tab */}
          <TabsContent value="lessons" className="space-y-6">
            <ProgressTracker completedLessons={completedLessons} totalLessons={7} />

            {lessonGroups.map((group) => {
              const Icon = group.icon
              return (
                <Card key={group.id} className="p-6 border-2 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`${group.color} p-3 rounded-lg shadow-md`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold">{group.title}</h2>
                      <p className="text-sm text-muted-foreground">Lessons {group.lessons.join(", ")}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {group.lessons.map((lessonNum) => (
                      <LessonContent
                        key={lessonNum}
                        lessonNumber={lessonNum}
                        isCompleted={completedLessons.includes(lessonNum)}
                        onToggle={() => toggleLesson(lessonNum)}
                        isActive={activeLesson === lessonNum}
                        onSelect={() => setActiveLesson(lessonNum)}
                      />
                    ))}
                  </div>
                </Card>
              )
            })}
          </TabsContent>

          {/* Key Concepts Tab */}
          <TabsContent value="concepts">
            <KeyConcepts />
          </TabsContent>

          {/* Exam Tab */}
          <TabsContent value="exam">
            <div className="space-y-6">
              <Card className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
                <h2 className="text-2xl font-bold mb-3">End of Unit Exam Practice</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Test your knowledge with these exam-style questions. Try to answer each question without looking at
                  the lessons first. You can use the hint button if you get stuck!
                </p>
                <div className="bg-white rounded-lg p-4 border border-blue-200">
                  <h3 className="font-semibold mb-2 text-blue-900">Exam Tips:</h3>
                  <ul className="space-y-1 text-sm text-blue-800">
                    <li>• Read each question carefully</li>
                    <li>• Use the hint button if you're unsure</li>
                    <li>• Think about the key concepts from lessons</li>
                    <li>• Don't worry if you don't get them all right first time!</li>
                  </ul>
                </div>
              </Card>

              <ExamQuiz />
            </div>
          </TabsContent>

          {/* Final Checklist Tab */}
          <TabsContent value="checklist">
            <Card className="p-6">
              <h2 className="text-2xl font-bold mb-4">Final Review Checklist</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Check off what you can confidently do before your exam:
              </p>

              <div className="space-y-4">
                {[
                  "I can create algorithms to solve problems and find the most efficient route",
                  "I can check algorithms for bugs and use logical reasoning to predict outcomes",
                  "I can use loops (repetition) to make my algorithms more efficient",
                  "I understand the difference between algorithms and code",
                  "I can write code in Scratch using repeat blocks",
                  "I understand how to use sequencing correctly in my programs",
                  "I can design and plan a Frogger-style game",
                  "I can break down big projects into smaller parts (decomposition)",
                  "I can add obstacles to my game using forever loops",
                  "I know how to program multiple sprites separately",
                  "I can use IF... THEN... blocks for selection and interaction",
                  "I understand how to use sensing blocks to detect collisions",
                  "I can debug my code and fix errors",
                  "I can test my programs and give/receive feedback",
                ].map((item, index) => (
                  <ChecklistItem key={index} text={item} />
                ))}
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg border-2 border-blue-200">
                <h3 className="font-semibold text-blue-900 mb-3">💡 Key Exam Reminders:</h3>
                <ul className="space-y-2 text-sm text-blue-800 leading-relaxed">
                  <li>
                    <strong>Sequence:</strong> The ORDER of steps matters! Wrong sequence = unintended results
                  </li>
                  <li>
                    <strong>Efficiency:</strong> Use LOOPS to reduce the number of commands
                  </li>
                  <li>
                    <strong>Indentation:</strong> Always indent commands inside loops
                  </li>
                  <li>
                    <strong>Scratch:</strong> Uses 'repeat' not 'loop', and code must be EXACT
                  </li>
                  <li>
                    <strong>Forever loops:</strong> Run continuously until program stops (good for obstacles)
                  </li>
                  <li>
                    <strong>IF... THEN...:</strong> Used for SELECTION - making choices based on conditions
                  </li>
                  <li>
                    <strong>Debugging:</strong> Finding and fixing errors - always test your code!
                  </li>
                </ul>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function ChecklistItem({ text }: { text: string }) {
  const [checked, setChecked] = useState(false)

  return (
    <button
      onClick={() => setChecked(!checked)}
      className="flex items-start gap-3 w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors"
    >
      {checked ? (
        <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
      ) : (
        <Circle className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
      )}
      <span className={`leading-relaxed ${checked ? "text-muted-foreground line-through" : ""}`}>{text}</span>
    </button>
  )
}
