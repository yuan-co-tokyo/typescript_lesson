import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('タスクを追加して一覧に表示する', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('例: 牛乳を買う');
    fireEvent.change(input, { target: { value: 'テストタスク' } });
    fireEvent.click(screen.getByRole('button', { name: '追加' }));
    expect(screen.getByText('テストタスク')).toBeInTheDocument();
  });

  test('完了したタスクを削除する', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('例: 牛乳を買う');
    const addButton = screen.getByRole('button', { name: '追加' });

    fireEvent.change(input, { target: { value: '削除対象' } });
    fireEvent.click(addButton);

    fireEvent.click(screen.getByRole('checkbox'));
    fireEvent.click(screen.getByRole('button', { name: '完了したタスクを削除' }));

    expect(screen.queryByText('削除対象')).not.toBeInTheDocument();
  });
});
