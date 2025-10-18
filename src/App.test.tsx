import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('TypeScript レッスンの見出しが表示される', () => {
  render(<App />);
  const heading = screen.getByRole('heading', { name: 'TypeScript Lesson' });
  expect(heading).toBeInTheDocument();
  const description = screen.getByText('型定義と基本的な構文を学習しましょう。');
  expect(description).toBeInTheDocument();
});
