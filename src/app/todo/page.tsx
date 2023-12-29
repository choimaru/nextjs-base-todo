import { fetchTodo } from '../lib/data';

import TodoInput from './todo-input';
import TodoList from './todo-list';
import TodoMore from './todo-more';

export default async function Page() {
  const todos = await fetchTodo();

  return (
    <main>
      <TodoInput />
      <TodoList todos={todos} />
      <TodoMore />
    </main>
  );
}
