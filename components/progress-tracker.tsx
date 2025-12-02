import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function ProgressTracker({
  completedLessons,
  totalLessons,
}: {
  completedLessons: number[]
  totalLessons: number
}) {
  const progress = (completedLessons.length / totalLessons) * 100

  return (
    <Card className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold">Your Learning Progress</h3>
          <p className="text-sm opacity-90">
            {completedLessons.length} of {totalLessons} lessons completed
          </p>
        </div>
        <div className="text-4xl font-bold">{Math.round(progress)}%</div>
      </div>
      <Progress value={progress} className="h-3 bg-white/30" />
    </Card>
  )
}
