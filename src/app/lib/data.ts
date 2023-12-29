export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export async function fetchTodo() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = (await response.json()) as Todo[];
    return todos;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function addTodo(todo: Todo) {
  try {
    // DBに追加する処理
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = (await response.json()) as Todo[];
    console.log(todo);
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to add data.');
  }
}
