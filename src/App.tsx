import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalImg from "./assets/goals.jpg";
import { useState } from "react";

interface CourseGoals {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoals[]>([]);

  function addGoalHandler() {
    setGoals((prevGoal) => {
      const goal: CourseGoals = {
        id: Math.random(),
        title: "React + TS",
        description:
          "Try react with typescript to make the applications more robust!",
      };

      return [...prevGoal, goal];
    });
  }

  return (
    <main>
      <Header image={{ src: goalImg, alt: "React + TS" }}>
        <h1>React + TS</h1>
      </Header>
      <button onClick={addGoalHandler}>Add Goal</button>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </main>
  );
}
