import { Todo } from '../lib/data';

export default function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <div>
      <ul>
        {todos.map((todo: Todo) => {
          return (
            <li key={todo.id}>
              {todo.id}:{todo.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
