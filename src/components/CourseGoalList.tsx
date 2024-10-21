import { type FC } from "react";

import { type CourseGoal as CGoal } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";

interface CourseGoalListProps {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
}

const CourseGoalList: FC<CourseGoalListProps> = ({ goals, onDeleteGoal }) => {
  let warningBox;

  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">You don't have any goals. Add some goals!</InfoBox>
    );
  }

  if (goals.length >= 3) {
    warningBox = (
      <InfoBox mode="warning">
        You are adding too many goals. Rethink the plan.
      </InfoBox>
    );
  }

  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
