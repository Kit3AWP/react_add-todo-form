import './App.scss';

import usersFromServer from './api/users';
import todosFromServer from './api/todos';
import { TodoList } from './components/TodoList';
import { TodoForm } from './components/TodoForm/TodoForm';
import { useState } from 'react';

export const App = () => {
  const [todos, setTodos] = useState(todosFromServer);

  return (
    <div className="App">
      <h1>Add todo form</h1>
      <TodoForm users={usersFromServer} />
      <TodoList todos={todos} />
    </div>
  );
};
