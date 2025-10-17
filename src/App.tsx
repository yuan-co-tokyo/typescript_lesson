import { FormEvent, useMemo, useRef, useState } from 'react';
import './App.css';
import { addTask, removeCompleted, toggleTask, TodoItem } from './features/todo/todoUtils';

function App(): JSX.Element {
  const [tasks, setTasks] = useState<TodoItem[]>([]);
  const [draft, setDraft] = useState('');
  const idRef = useRef(0);

  const completedCount = useMemo(
    () => tasks.filter((task) => task.completed).length,
    [tasks]
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextId = () => {
      idRef.current += 1;
      return idRef.current.toString();
    };
    setTasks((prev) => addTask(prev, draft, nextId));
    setDraft('');
  };

  const handleToggle = (id: string) => {
    setTasks((prev) => toggleTask(prev, id));
  };

  const handleClearCompleted = () => {
    setTasks((prev) => removeCompleted(prev));
  };

  const isDraftEmpty = draft.trim().length === 0;

  return (
    <div className="app">
      <h1 className="app__title">シンプルToDo</h1>
      <form className="todo-form" onSubmit={handleSubmit}>
        <label className="todo-form__label" htmlFor="new-task">
          {/* 入力項目の説明 */}
          タスクを追加
        </label>
        <div className="todo-form__controls">
          <input
            id="new-task"
            className="todo-form__input"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="例: 牛乳を買う"
          />
          <button className="todo-form__button" type="submit" disabled={isDraftEmpty}>
            追加
          </button>
        </div>
      </form>
      <section className="todo-list">
        {tasks.length === 0 ? (
          <p className="todo-list__empty">まだタスクがありません。</p>
        ) : (
          <ul className="todo-list__items">
            {tasks.map((task) => (
              <li key={task.id} className={`todo-list__item${task.completed ? ' todo-list__item--done' : ''}`}>
                <label className="todo-list__task">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggle(task.id)}
                  />
                  <span>{task.text}</span>
                </label>
              </li>
            ))}
          </ul>
        )}
      </section>
      <div className="todo-actions">
        <span className="todo-actions__summary">完了: {completedCount} / {tasks.length}</span>
        <button
          className="todo-actions__clear"
          type="button"
          onClick={handleClearCompleted}
          disabled={completedCount === 0}
        >
          完了したタスクを削除
        </button>
      </div>
    </div>
  );
}

export default App;
