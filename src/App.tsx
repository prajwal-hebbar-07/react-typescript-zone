import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalImg from "./assets/goals.jpg";

export default function App() {
  return (
    <main>
      <Header image={{ src: goalImg, alt: "React + TS" }}>
        <h1>React + TS</h1>
      </Header>
      <CourseGoal title="React + TS">
        <p>Try react with typescript to make the applications more robust!</p>
      </CourseGoal>
    </main>
  );
}
