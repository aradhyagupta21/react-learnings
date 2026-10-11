import { createContext, useContext } from "react";

export const TodoContext = createContext({
  // Default values/properties
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      completed: false,
    },
  ],
  // Method blueprints (definitions are implemented later in App.jsx)
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// Custom hook to consume the context easily
export const useTodo = () => {
  return useContext(TodoContext);
};

// Provider component export
export const TodoProvider = TodoContext.Provider;