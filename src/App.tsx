import { useState } from "react";

import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";
import goalImg from "./assets/goals.jpg";

export interface CourseGoal {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function addGoalHandler(): void {
    setGoals((prevGoals) => {
      const goal: CourseGoal = {
        id: Math.random(),
        title: "React + TS",
        description:
          "Try react with typescript to make the applications more robust!",
      };

      return [...prevGoals, goal];
    });
  }

  function deleteGoalHandler(id: number): void {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalImg, alt: "React + TS" }}>
        <h1>React + TS</h1>
      </Header>
      <NewGoal />
      <CourseGoalList goals={goals} onDeleteGoal={deleteGoalHandler} />
    </main>
  );
}
