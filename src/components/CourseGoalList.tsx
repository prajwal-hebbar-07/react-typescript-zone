import { FC } from "react";
import CourseGoal from "./CourseGoal";

interface CourseGoals {
  title: string;
  description: string;
  id: number;
}

interface CourseGoalListProps {
  goals: CourseGoals[];
}

const CourseGoalList: FC<CourseGoalListProps> = ({ goals }) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal title={goal.title}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
