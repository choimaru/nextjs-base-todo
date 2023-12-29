'use client';

import { useState } from 'react';

import { Todo, addTodo } from '../lib/data';

type Props = {
  addList: (newTodo: Todo) => void;
};

export default function TodoInput() {
  const [task, setTask] = useState('');

  const handleClick = async () => {
    const newTodo: Todo = { userId: 1, id: 6, title: task, completed: false };
    await addTodo(newTodo);
  };

  return (
    <div>
      <div>
        TODOを入力：
        <input
          type='text'
          className='border'
          value={task}
          onChange={(event) => setTask(event.target.value)}
        />
      </div>
      <div>
        <button className='border' onClick={handleClick}>
          追加
        </button>
      </div>
    </div>
  );
}
