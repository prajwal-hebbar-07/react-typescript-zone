import { type FC } from "react";

import { type CourseGoal as CGoal } from "../App";
import CourseGoal from "./CourseGoal";

interface CourseGoalListProps {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
}

const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDeleteGoal }) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
  );
};

export default CourseGoalList;
