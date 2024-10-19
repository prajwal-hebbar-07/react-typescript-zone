import { type FormEvent } from "react";

const NewGoal = () => {
  function submitHandler(event: FormEvent) {
    event.preventDefault();
  }

  return (
    <form onSubmit={submitHandler}>
      <p>
        <label htmlFor="goal-title">Goal Title</label>
        <input id="goal-title" type="text" />
      </p>
      <p>
        <label htmlFor="goal-desc">Goal Description</label>
        <input id="goal-desc" type="text" />
      </p>
      <button>Add Goal</button>
    </form>
  );
};

export default NewGoal;
