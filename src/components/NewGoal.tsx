import { useRef, type FC, type FormEvent } from "react";

interface NewGoalProps {
  onAddGoal: (goalTitle: string, goalDescription: string) => void;
}

const NewGoal: FC<NewGoalProps> = ({ onAddGoal }) => {
  const goalTitleRef = useRef<HTMLInputElement>(null);
  const goalDescriptionRef = useRef<HTMLInputElement>(null);

  function submitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredGoalTitle = goalTitleRef.current!.value;
    const enteredGoalDescription = goalDescriptionRef.current!.value;

    event.currentTarget.reset();
    onAddGoal(enteredGoalTitle, enteredGoalDescription);
  }

  return (
    <form onSubmit={submitHandler}>
      <p>
        <label htmlFor="goal-title">Goal Title</label>
        <input id="goal-title" type="text" ref={goalTitleRef} />
      </p>
      <p>
        <label htmlFor="goal-desc">Goal Description</label>
        <input id="goal-desc" type="text" ref={goalDescriptionRef} />
      </p>
      <button>Add Goal</button>
    </form>
  );
};

export default NewGoal;
