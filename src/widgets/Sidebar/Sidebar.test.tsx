import { render, screen } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
  test('render Sidebar', () => {
    render(<Sidebar />);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
