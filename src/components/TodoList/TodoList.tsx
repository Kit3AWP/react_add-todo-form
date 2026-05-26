export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
  user: User;
}
interface TodoListProps {
  todos: Todo[];
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <section className="TodoList">
      {todos.map(todo => (
        <article data-id={todo.id} key={todo.id}>
          <h2>{todo.title}</h2>
          <a href={todo.user.email}>{todo.user.name}</a>
        </article>
      ))}
    </section>
  );
};
