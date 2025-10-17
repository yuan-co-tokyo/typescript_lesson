import { addTask, removeCompleted, toggleTask, TodoItem } from '../features/todo/todoUtils';

describe('todoUtils', () => {
  const baseTasks: TodoItem[] = [
    { id: '1', text: '学習', completed: false },
    { id: '2', text: '買い物', completed: true }
  ];

  test('addTask trims text and appends new task', () => {
    const tasks = addTask(baseTasks, ' 新しいタスク ', () => '3');
    expect(tasks).toHaveLength(3);
    expect(tasks[2]).toEqual({ id: '3', text: '新しいタスク', completed: false });
  });

  test('addTask ignores empty text', () => {
    const tasks = addTask(baseTasks, '   ', () => '3');
    expect(tasks).toEqual(baseTasks);
  });

  test('toggleTask flips completion flag of matched task', () => {
    const tasks = toggleTask(baseTasks, '1');
    expect(tasks[0].completed).toBe(true);
    expect(tasks[1].completed).toBe(true);
  });

  test('removeCompleted drops completed tasks only', () => {
    const tasks = removeCompleted(baseTasks);
    expect(tasks).toHaveLength(1);
    expect(tasks[0].id).toBe('1');
  });
});
