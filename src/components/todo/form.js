import React from "react";
import useForm from "../../hooks/form.js";

/**
 * A component for the input form for item creation
 * @param {*} props 
 */
const TodoForm = props => {
  const { handleChange, handleSubmit } = useForm(props.handleSubmit);

  return (
    <>
      <h3>Add Item</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>To Do Item</span>
          <input
            name="text"
            placeholder="Add To Do List Item"
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Difficulty Rating</span>
          <input
            type="range"
            min="1"
            max="5"
            name="difficulty"
            onChange={handleChange}
          />
        </label>
        <label>
          <span>Assigned To</span>
          <input
            type="text"
            name="assignee"
            placeholder="Assigned To"
            onChange={handleChange}
          />
        </label>
        <button>Add Item</button>
      </form>
    </>
  );
};

export default TodoForm;
