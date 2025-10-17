import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// ヘッダー要素が描画されることを確認
test('Appヘッダーが描画される', () => {
  render(<App />);
  const headerElement = screen.getByRole('banner');
  expect(headerElement).toBeInTheDocument();
});
