import React, { useState } from "react";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (newTodo !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">To do List</h1>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleAddTodo}>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Add a new task"
                aria-label="Add a new task"
                aria-describedby="add-button"
                value={newTodo}
                onChange={(event) => setNewTodo(event.target.value)}
              />
              <button
                className="btn btn-outline-secondary"
                type="submit"
                id="add-button"
              >
                Add
              </button>
            </div>
          </form>
          <ul className="list-group">
            {todos.length > 0 ? (
              todos.map((todo, index) => (
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  {todo}
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => handleDeleteTodo(index)}
                  >
                    X
                  </button>
                </li>
              ))
            ) : (
              <li className="list-group-item text-muted">
               No tasks, add a task
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TodoList;

