import { useState } from "react";

import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import goalImg from "./assets/goals.jpg";

export interface CourseGoal {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function addGoalHandler() {
    setGoals((prevGoal) => {
      const goal: CourseGoal = {
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
      <CourseGoalList goals={goals} />
    </main>
  );
}
