export interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

export const addTask = (
  tasks: TodoItem[],
  text: string,
  idFactory: () => string
): TodoItem[] => {
  const trimmed = text.trim();
  if (trimmed.length === 0) {
    return tasks;
  }
  const newTask: TodoItem = {
    id: idFactory(),
    text: trimmed,
    completed: false
  };
  return [...tasks, newTask];
};

export const toggleTask = (tasks: TodoItem[], id: string): TodoItem[] => {
  return tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
};

export const removeCompleted = (tasks: TodoItem[]): TodoItem[] => {
  return tasks.filter((task) => !task.completed);
};
