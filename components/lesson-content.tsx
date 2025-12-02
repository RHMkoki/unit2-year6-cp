"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Circle, ChevronDown, ChevronUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const lessonData = {
  1: {
    title: "What are Algorithms?",
    duration: "Week 1",
    summary: "Understanding the foundation of programming - what algorithms are and why sequence matters",
    keyPoints: [
      "Algorithm = A set of ORDERED instructions to complete a task",
      "Sequence = The ORDER matters! Steps must be in the correct order",
      "If sequence is wrong → program produces UNINTENDED RESULTS",
      "Real-life algorithms: recipes, morning routine, building instructions",
    ],
    teachingExplanation:
      "Think of an algorithm like a recipe. If you try to eat the cake before baking it, or put ingredients in the wrong order, you won't get the result you want! In programming, the computer follows your instructions EXACTLY in the order you give them.",
    example: {
      title: "The Jam Sandwich Algorithm",
      code: [
        "1. Get two slices of bread",
        "2. Get butter from fridge",
        "3. Get jam from cupboard",
        "4. Spread butter on first slice",
        "5. Spread jam on first slice",
        "6. Repeat steps 4-5 on second slice",
        "7. Put slices together",
        "8. Enjoy!",
        "",
        "❌ WRONG SEQUENCE:",
        "1. Enjoy!",
        "2. Get bread",
        "→ This won't work! You can't enjoy before making it!",
      ],
    },
    activity:
      "Robot Role Play: One person acts as a robot who can ONLY follow exact instructions. Try to make them make a jam sandwich. The robot cannot guess or assume anything!",
    examTip:
      "In exam questions, always check if steps are in logical order. Can each step happen based on previous steps?",
    remember: "⚠️ EXAM KEY POINT: If sequence is wrong → unintended results!",
  },
  2: {
    title: "Repetition & Loops Make Programs Efficient",
    duration: "Week 1",
    summary: "Learn how to use repetition (loops) to write shorter, more efficient algorithms",
    keyPoints: [
      "Repetition = Repeating the same instruction(s) multiple times",
      "Also called ITERATION in programming",
      "Makes programs MORE EFFICIENT = uses fewer commands",
      "ALWAYS show repetition with INDENTATION",
    ],
    teachingExplanation:
      "Imagine telling someone to walk forward 10 times. You could say 'forward, forward, forward...' 10 times, OR you could say 'Repeat 10 times: forward'. Which is more efficient? The second one! That's what loops do - they save time and reduce errors.",
    example: {
      title: "Efficient vs Inefficient Algorithms",
      code: [
        "❌ INEFFICIENT (10 lines of code):",
        "Forward",
        "Forward",
        "Forward",
        "Forward",
        "Forward",
        "Forward",
        "Forward",
        "Forward",
        "Forward",
        "Forward",
        "",
        "✅ EFFICIENT (2 lines of code):",
        "Repeat 10",
        "    Forward",
        "",
        "Notice the INDENTATION? This shows 'Forward' is INSIDE the repeat!",
      ],
    },
    activity:
      "Create a route for a robot to collect 5 stars. First write it without loops, then rewrite it using 'Repeat' commands. Count how many lines you saved!",
    examTip: "When writing algorithms, always look for patterns that repeat and use a loop. Remember to indent!",
    remember: "💡 EXAM KEY POINT: Repetition makes programs EFFICIENT by using fewer commands",
  },
  3: {
    title: "Programming a solution to a problem that contains loops (part 1)",
    duration: "Week 1",
    summary: "Create algorithms that solve given problems to find the most efficient route between two objects",
    keyPoints: [
      "Command = A single instruction in an algorithm",
      "Criteria = The rules or requirements a solution must meet",
      "Debug = Find and fix errors in your algorithm",
      "Loop = Repetition of instructions",
      "Route = The path from one point to another",
    ],
    teachingExplanation:
      "There is often more than one way to solve a problem. The problems in this lesson will have more than one solution, but the goal is to find the most efficient one. An efficient route depends on the CRITERIA of the problem - it might be fewest steps, shortest distance, or collecting the most items.",
    visualImages: [
      {
        src: "/images/01.png",
        caption: "James and Yusuf discuss different routes - efficiency depends on using loops to reduce steps",
      },
      {
        src: "/images/02.png",
        caption: "Finding efficient routes from A to B - discuss different paths with your partner",
      },
      {
        src: "/images/03.png",
        caption: "Activity: Plan a route to collect all gems using the shortest algorithm with loops",
      },
    ],
    example: {
      title: "James vs Yusuf - Who Wrote It More Efficiently?",
      code: [
        "James's Algorithm:",
        "Right-Forward-Forward-Left-Forward-Right-Forward-Forward-Right-Forward",
        "",
        "Yusuf's Algorithm:",
        "Loop 6",
        "    Forward",
        "Loop 3",
        "    Right",
        "Left",
        "",
        "✅ Yusuf is correct! He used LOOPS to make it more efficient.",
        "To find the most efficient route:",
        "1. Check all criteria are met",
        "2. Check for unnecessary commands",
        "3. Check if commands could be replaced with loops",
      ],
    },
    activity: {
      title: "Partner Activities",
      steps: [
        "Activity 1: Discuss different routes the robot could take to get from A to B",
        "Activity 2: Decide which route would be the most efficient",
        "Activity 3: Plan a route that collects all gems using the shortest algorithm with loops",
        "Discuss: Which was most difficult? Did you use loops? What makes a route efficient?",
      ],
    },
    examTip:
      "Efficiency of a route depends on the CRITERIA. Always check: fewest steps? Most items collected? Shortest distance?",
    remember:
      "💡 I can create algorithms to solve a problem, check for bugs, and use logical reasoning to predict outcomes",
  },
  4: {
    title: "Programming a solution to a problem that contains loops (part 2)",
    duration: "Week 2",
    summary: "Use sequencing correctly and understand how to write code in Scratch",
    keyPoints: [
      "Code = Exact commands that a device will read",
      "Command = A single instruction",
      "Error = Mistake in an algorithm or program",
      "Notation = An agreed set of symbols/words for algorithms",
      "Programming = Writing code that a computer can execute",
      "Repeat = Loop/repetition in Scratch",
      "Scratch = Visual programming language",
      "Sprite = Characters/objects in Scratch",
    ],
    teachingExplanation:
      "There are technical differences between an algorithm and code. An algorithm follows any notation that has been agreed with the reader, but code is EXACTLY what the device will read. For example, Scratch won't read 'clockwise turn', it needs 'right turn 90 degrees'. In Scratch, we use 'repeats' instead of 'loops'.",
    visualImages: [
      {
        src: "/images/04.png",
        caption: "What will happen when you click run? The robot will move five times and collect the gems.",
      },
      {
        src: "/images/05.png",
        caption:
          "Scratch program with repeats and waits - this rotates and moves the sprite with pauses between actions",
      },
      {
        src: "/images/06.png",
        caption: "Activity: What shape does this create? Can you change it to make a triangle?",
      },
      {
        src: "/images/07.png",
        caption: "Motion blocks in Scratch - discuss with a partner how they work",
      },
    ],
    example: {
      title: "Understanding Scratch Code",
      code: [
        "Algorithm notation (what humans write):",
        "Turn clockwise",
        "Loop 10",
        "    Move forward",
        "",
        "Scratch code (what computer reads):",
        "when [green flag] clicked    ← Starts the program",
        "repeat (10)                   ← 'repeat' is Scratch's word for loop",
        "    wait (1) seconds          ← Adds pause",
        "    turn ↻ (15) degrees       ← Exact rotation amount",
        "    move (10) steps           ← Exact movement",
        "go to x: (0) y: (0)          ← Returns sprite to center",
        "",
        "✅ Key difference: Code must be EXACT for the computer!",
      ],
    },
    activity: {
      title: "Scratch Activities",
      steps: [
        "Activity 1: Use Scratch to check if the program works as expected. Debug any errors.",
        "Activity 2: What shape does the Scratch program create? Challenge: Can you change the code to create a triangle?",
        "Discuss with partner: How does the motion block work? Do you need to include it every time?",
      ],
    },
    examTip: "Remember: Scratch uses 'repeat' not 'loop'. Always include exact numbers for movements and turns.",
    remember: "💡 I can use sequencing correctly and understand how to write code that devices can read",
  },
  5: {
    title: "Creating a 'Frogger'-style game",
    duration: "Week 2",
    summary: "Learn about simple arcade games and start designing your own Frogger-style game",
    keyPoints: [
      "IF... THEN... = Conditional blocks for interaction",
      "Interact = When objects affect each other",
      "Loop = Repetition of code",
      "Movement = Changing sprite position",
      "Repeat blocks = Scratch's way of creating loops",
      "Sprite = Game characters/objects",
      "String = Sequence of characters (text messages)",
    ],
    teachingExplanation:
      "In this game, you are a frog and your goal is to get home to the other side of the screen without hitting any obstacles, many of which are moving. You'll need to plan: background, character sprite, sprite movement, additional objects (cars/obstacles), and character interaction (what happens when frog touches obstacles).",
    visualImages: [
      {
        src: "/images/08.png",
        caption: "Classic Frogger game - the frog needs to avoid cars and reach the other side safely",
      },
      {
        src: "/images/09.png",
        caption:
          "Finding Frogger games in Scratch - search for 'frogger' and explore different versions to understand gameplay",
      },
      {
        src: "/images/10.png",
        caption: "IF... THEN... blocks and strings - use these to display messages when the frog touches obstacles",
      },
      {
        src: "/images/11.png",
        caption: "Planning your game: background, character sprite, sprite movement, objects, and interactions",
      },
      {
        src: "/images/12.png",
        caption: "Give feedback to your partner about their work - what works well and what could improve",
      },
    ],
    example: {
      title: "Frogger Game Brief",
      code: [
        "Game Requirements:",
        "✓ Background - create or use preset backgrounds",
        "✓ Character sprite - frog sprite (can edit your own)",
        "✓ Sprite movement - left/right, up/down",
        "✓ Additional objects - cars/obstacles that repeat movement",
        "✓ Character interaction - frog touches obstacles:",
        "    • Game counter/string messages",
        "    • Sound effects",
        "    • Costume changes",
        "",
        "💡 Tip: Save your project regularly with a sensible filename",
        "💡 Tip: Start with movement value 10, then adjust speed",
      ],
    },
    activity: {
      title: "Design Your Frogger Game",
      steps: [
        "Activity 1: Explore two different Frogger games in Scratch (search 'Scratchteam' for Maze Hunter and Hide and Seek)",
        "Activity 2: Start planning your game - consider background, sprite movement, obstacles, and what happens when they interact",
        "Discuss: Show your partner your progress and give feedback (2 things you like, 1 thing to improve next time)",
      ],
    },
    examTip:
      "When designing a game, break it into parts (decomposition): background, sprites, movement, obstacles, interactions. Test each part as you build.",
    remember:
      "💡 I can turn an idea into a program, design backgrounds and costumes, and understand game design principles",
  },
  6: {
    title: "Creating movement of game objects, including forever loops",
    duration: "Week 3",
    summary: "Add obstacles to your game and set forever loops to create continuous movement",
    keyPoints: ["Forever loop = Code that runs continuously until program stops", "Key words: forever loop"],
    teachingExplanation:
      "The aim is to have completed the programming for the obstacles in your game by the end of this lesson. To include obstacles, you need to add sprites. For a car to move smoothly across the stage, use a forever loop. An alien spaceship might move in steps to make it harder for the player.",
    visualImages: [
      {
        src: "/images/13.png",
        caption:
          "Adding obstacles: Click 'choose a sprite' and select cars or draw your own. List two Scratch blocks needed to control character movement.",
      },
      {
        src: "/images/14.png",
        caption:
          "Forever loop code - sprite moves across stage continuously. Change y-axis value for sprite position and change x by value for speed.",
      },
      {
        src: "/images/15.png",
        caption: "Activity 2: Explore what a forever loop does. Add obstacle sprites on a forever loop.",
      },
      {
        src: "/images/16.png",
        caption: "Complete Frogger game with moving obstacles - program three sprites separately for three cars",
      },
    ],
    example: {
      title: "Forever Loop for Moving Obstacles",
      code: [
        "when [green flag] clicked",
        "forever",
        "    show",
        "    go to x: (230) y: (-130)",
        "    repeat (60)",
        "        change x by (-8)",
        "    hide",
        "",
        "💡 Key points:",
        "• Change y-axis value to position sprite where you want it",
        "• Decrease 'change x by' to slow down sprite",
        "• Increase to speed up (harder difficulty)",
        "• Program each sprite separately (repeat 3 times for 3 cars)",
      ],
    },
    activity: {
      title: "Add Moving Obstacles",
      steps: [
        "Activity 1: List two different Scratch blocks needed to control character movement",
        "Activity 2: As a class, explore what a forever loop does. Add obstacle sprite to your game on a forever loop",
        "Additional tasks: Flip sprite so it turns around, set car locations when game starts, add reset button, resize/recolor sprites",
        "Discuss: Review your game with partner and set three targets for next lesson",
      ],
    },
    examTip:
      "Forever loops run continuously. Use them for automated movement like obstacles. Remember to program each sprite separately!",
    remember: "💡 I can add obstacles to my game on forever loops and know how to program multiple sprites",
  },
  7: {
    title: "Using IF... THEN... in a game to add interaction",
    duration: "Week 3",
    summary: "Add code to tell your program what to do if your sprite touches an obstacle or reaches the destination",
    keyPoints: [
      "Condition = A check that must be met for code to run",
      "Decompose = Break large problems into smaller parts",
      "IF... THEN... = Conditional block for selection",
      "Input = Data going into a program (keyboard, mouse)",
      "Interaction = When sprites/objects affect each other",
      "Output = What program displays (messages, sounds, costume changes)",
      "Sensing block = Detects conditions (touching, reaching edge)",
      "String = Text messages displayed to user",
    ],
    teachingExplanation:
      "By the end of this lesson you should be able to program your conditions to display different messages depending on what the user does. You just need to decompose the tasks into smaller manageable blocks. Use IF... THEN... commands for selection - when sprites collide, this is considered an interaction.",
    visualImages: [
      {
        src: "/images/17.png",
        caption:
          "Discuss with partner: In games you've played, what happens when characters collide? Write down three examples.",
      },
      {
        src: "/images/18.png",
        caption:
          "Set a loop condition with forever and if...then blocks to keep checking for collisions throughout the game",
      },
      {
        src: "/images/19.png",
        caption:
          "Sensing and output blocks - when frog touches car: switch costume, play sound, wait, then reset position",
      },
      {
        src: "/images/20.png",
        caption:
          "Activities: Write down conditions you've used, debug your code, set finish line condition for winning",
      },
    ],
    example: {
      title: "Adding Collision Detection",
      code: [
        "Step 1: Set loop condition to keep checking",
        "when [green flag] clicked",
        "forever",
        "    if [condition] then",
        "        [actions]",
        "",
        "Step 2: Use sensing block",
        "if <touching [Sprite 1] ?> then",
        "    [what happens when they collide]",
        "",
        "Step 3: Add outputs",
        "switch costume to [Frog Splat]",
        "play sound [Splat Noise] until done",
        "wait (3) seconds",
        "go to x: (-167) y: (7)    ← Reset to start position",
        "",
        "💡 What happens when frog touches car:",
        "• Game stops",
        "• Sprite costume changes",
        "• 'Splat' sound effect plays",
        "• Game resets after short time",
      ],
    },
    activity: {
      title: "Add Interactions and Conditions",
      steps: [
        "Activity 1: Write down the condition checks you have used so far in your game",
        "Activity 2: Debug your new code and check for errors. Common error: conditions haven't been set for all obstacles",
        "Challenge: Set a condition for when user gets the frog to destination - display 'Well done!' text string and play sound",
        "Discuss: Work in pairs to test each other's work. Give feedback about what works well and what could improve",
      ],
    },
    examTip:
      "IF... THEN... is for SELECTION. Input (keyboard presses) → Output (costume changes, sounds, messages). Always test conditions!",
    remember:
      "💡 I can use conditional checks in my game and understand how to break down problems into smaller manageable parts",
  },
  8: {
    title: "Variables - Storing Changing Data",
    duration: "Week 4",
    summary: "Use variables to track score, lives, and other changing values in your game",
    keyPoints: [
      "Variable = storage location with a NAME and VALUE",
      "Value can CHANGE during the program",
      "Common examples: score, lives, time, level",
      "Operations: set variable to X, change variable by Y",
    ],
    teachingExplanation:
      "Think of a variable like a labeled box. The label is the NAME (like 'Score'), and what's inside is the VALUE (like 5). During the game, you can change what's in the box: add points, subtract lives, etc. The name stays the same but the contents change!",
    example: {
      title: "Creating and Using a Score Variable",
      code: [
        "STEP 1: Create variable called 'Score'",
        "",
        "STEP 2: Initialize at game start",
        "🏴 when [green flag] clicked",
        "set [Score] to (0)                    ← Starts at zero",
        "",
        "STEP 3: Change during game",
        "IF touching [target] THEN",
        "    change [Score] by (1)             ← Add 1 point",
        "    go to x: (0) y: (-170)",
        "END IF",
        "",
        "IF touching [car] THEN",
        "    change [Score] by (-1)            ← Subtract 1 point (penalty)",
        "END IF",
        "",
        "Variable NAME: Score (never changes)",
        "Variable VALUE: 0, 1, 2, 3... (changes during game)",
      ],
    },
    activity:
      "Add a 'Score' variable to your game. Set it to 0 when game starts. Change it by +1 when frog reaches target, change it by -1 when frog hits car. Add another variable called 'Lives' starting at 3!",
    examTip: "Variables ALWAYS have a name and value. Value changes, name doesn't. Common in scoreboards!",
    remember: "📊 EXAM KEY POINT: Variable = storage with NAME and VALUE. Value can change during program!",
  },
  9: {
    title: "Testing & Debugging Your Program",
    duration: "Week 4",
    summary: "Learn systematic testing methods and how to find and fix bugs",
    keyPoints: [
      "Alpha testing = programmer tests their own program (you!)",
      "Beta testing = other users test the program (classmates)",
      "Debugging = finding and fixing errors (bugs) in code",
      "Test plan: what to test, expected result, actual result",
    ],
    teachingExplanation:
      "Testing is like being a detective! You create a test plan: 'What should happen when I press up arrow? Frog should move up 10 steps'. Then test it: 'Does it actually move up?'. If not, you found a BUG! Then debug - find the error in your code and fix it. Always test EVERYTHING!",
    example: {
      title: "Test Plan Example",
      code: [
        "TEST PLAN FOR FROGGER:",
        "",
        "Test 1: Frog Movement",
        "Action: Press up arrow",
        "Expected: Frog moves up 10 steps",
        "Actual: Frog moves up 10 steps ✅",
        "Status: PASS",
        "",
        "Test 2: Car Movement",
        "Action: Click green flag",
        "Expected: All 3 cars move continuously and bounce at edges",
        "Actual: Only 2 cars move, car 3 doesn't move ❌",
        "Bug Found: Car 3 missing forever loop",
        "Fix: Add forever loop to car 3 sprite",
        "Status: FIXED ✅",
        "",
        "Test 3: Collision Detection",
        "Action: Make frog touch car",
        "Expected: Game stops, shows 'Game Over'",
        "Actual: Works correctly ✅",
        "Status: PASS",
      ],
    },
    activity:
      "Create a test plan with 5 tests for your game. Test each feature: movement, collision, scoring, reset. Write expected vs actual results. Find bugs and fix them. Then swap games with a partner for beta testing!",
    examTip: "Testing questions ask about expected vs actual. Debugging = finding and fixing errors (bugs).",
    remember: "🐛 EXAM KEY POINT: Alpha = you test, Beta = others test, Debugging = fixing errors",
  },
  10: {
    title: "Documentation & Final Review",
    duration: "Week 5",
    summary: "Complete your project with user guide and review all programming concepts",
    keyPoints: [
      "User guide = simple instructions for playing the game",
      "Include: objective, controls, how to score, how to win",
      "Review all concepts: algorithm, sequence, loops, selection, variables",
      "Reflect on learning and be proud of your achievement!",
    ],
    teachingExplanation:
      "A user guide helps others understand your game! Keep it simple and clear. Imagine explaining to someone who has never played before. What are the controls? What's the goal? How do you win? Use screenshots to help illustrate!",
    example: {
      title: "User Guide Template",
      code: [
        "MY FROGGER GAME - USER GUIDE",
        "",
        "🎯 OBJECTIVE:",
        "Get your frog safely across the road to reach the target!",
        "",
        "🎮 CONTROLS:",
        "↑ Up arrow = Move up",
        "↓ Down arrow = Move down",
        "← Left arrow = Move left",
        "→ Right arrow = Move right",
        "",
        "⭐ SCORING:",
        "Reach target = +1 point",
        "Hit by car = -1 point (and reset to start)",
        "",
        "🏆 HOW TO WIN:",
        "Reach 10 points to win the game!",
        "",
        "💡 TIP: Watch the car patterns and time your moves!",
      ],
    },
    activity:
      "Write a user guide for your game. Include objective, controls, scoring, and how to win. Add a screenshot showing the game. Play other students' games and give feedback on their user guides!",
    examTip: "User guide questions: focus on what player needs to know - controls, objective, how to score",
    remember: "🎯 FINAL REVIEW: You've learned algorithms, loops, selection, variables, testing - YOU'RE READY!",
  },
}

export function LessonContent({
  lessonNumber,
  isCompleted,
  onToggle,
  isActive,
  onSelect,
}: {
  lessonNumber: number
  isCompleted: boolean
  onToggle: () => void
  isActive: boolean
  onSelect: () => void
}) {
  const [expanded, setExpanded] = useState(false)
  const lesson = lessonData[lessonNumber as keyof typeof lessonData]

  return (
    <Card className={`overflow-hidden transition-all ${isActive ? "ring-2 ring-blue-500" : ""}`}>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <button onClick={onSelect} className="flex items-center gap-3 flex-1 text-left">
            <button
              onClick={(e) => {
                e.stopPropagation()
                onToggle()
              }}
              className="flex-shrink-0"
            >
              {isCompleted ? (
                <CheckCircle2 className="w-6 h-6 text-green-600" />
              ) : (
                <Circle className="w-6 h-6 text-gray-300" />
              )}
            </button>
            <div className="flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-semibold text-balance">
                  Lesson {lessonNumber}: {lesson.title}
                </h3>
                <Badge variant="secondary" className="text-xs">
                  {lesson.duration}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mt-1 text-pretty">{lesson.summary}</p>
            </div>
          </button>
          <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)}>
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </Button>
        </div>

        {expanded && (
          <div className="mt-4 space-y-4 border-t pt-4">
            {/* Teaching Explanation */}
            <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
              <h4 className="font-semibold mb-2 text-blue-900">📖 Teaching Explanation</h4>
              <p className="text-sm text-blue-800 text-pretty leading-relaxed">{lesson.teachingExplanation}</p>
            </div>

            {/* Key Points */}
            <div>
              <h4 className="font-semibold mb-2 text-purple-600">🔑 Key Words & Concepts</h4>
              <ul className="space-y-2">
                {lesson.keyPoints.map((point, idx) => (
                  <li key={idx} className="text-sm pl-4 border-l-2 border-purple-200 py-1 text-pretty leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Images from Lesson Slides */}
            {lesson.visualImages && (
              <div className="space-y-4">
                <h4 className="font-semibold text-orange-600">📸 Visual Examples from Your Lessons</h4>
                {lesson.visualImages.map((img, idx) => (
                  <div key={idx} className="bg-yellow-50 rounded-lg border-2 border-yellow-300 overflow-hidden">
                    <img
                      src={typeof img === "string" ? img : img.src}
                      alt={`Lesson ${lessonNumber} visual example ${idx + 1}`}
                      className="w-full h-auto"
                    />
                    {typeof img === "object" && img.caption && (
                      <div className="p-3 bg-yellow-100 border-t border-yellow-300">
                        <p className="text-sm text-yellow-900 text-pretty leading-relaxed">{img.caption}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Code Example */}
            <div className="bg-gray-50 rounded-lg border-2 border-gray-300 overflow-hidden">
              <div className="bg-gray-700 text-white px-4 py-2 font-semibold text-sm">{lesson.example.title}</div>
              <div className="font-mono text-sm leading-relaxed bg-white p-4 space-y-1 overflow-x-auto">
                {lesson.example.code.map((line, idx) => (
                  <div
                    key={idx}
                    className={`${
                      line.startsWith("✅") || line.includes("CORRECT")
                        ? "text-green-700 font-semibold"
                        : line.startsWith("❌") || line.includes("WRONG") || line.includes("INEFFICIENT")
                          ? "text-red-600 font-semibold"
                          : line.startsWith("//") ||
                              line.startsWith("Step") ||
                              line.includes("EXAM") ||
                              line.startsWith("💡")
                            ? "text-blue-600 font-semibold"
                            : line.startsWith("    ")
                              ? "text-purple-700 pl-8"
                              : "text-gray-800"
                    }`}
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {line || "\u00A0"}
                  </div>
                ))}
              </div>
            </div>

            {/* Activity */}
            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
              <h4 className="font-semibold mb-2 text-green-800 flex items-center gap-2">
                <span>✏️</span> Activities to Practice
              </h4>
              {typeof lesson.activity === "string" ? (
                <p className="text-sm text-green-900 text-pretty leading-relaxed">{lesson.activity}</p>
              ) : (
                <div className="text-sm text-green-900 space-y-2">
                  {lesson.activity.title && <p className="font-semibold text-pretty">{lesson.activity.title}</p>}
                  {lesson.activity.steps && Array.isArray(lesson.activity.steps) && (
                    <ul className="space-y-2">
                      {lesson.activity.steps.map((step, idx) => (
                        <li key={idx} className="text-pretty leading-relaxed pl-3 border-l-2 border-green-400">
                          {step}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>

            {/* Exam Tip */}
            {lesson.examTip && (
              <div className="bg-amber-50 border-2 border-amber-300 rounded-lg p-4">
                <h4 className="font-semibold mb-2 text-amber-900 flex items-center gap-2">
                  <span>💡</span> Exam Tip
                </h4>
                <p className="text-sm text-amber-900 text-pretty leading-relaxed">{lesson.examTip}</p>
              </div>
            )}

            {/* Remember for Exam */}
            <div className="bg-red-50 border-2 border-red-400 rounded-lg p-3">
              <p className="text-sm font-bold text-red-900 text-center text-balance leading-relaxed">
                {lesson.remember}
              </p>
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}
