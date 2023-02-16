import { screen } from '@testing-library/react';
import { Sidebar } from 'widgets/Sidebar/Sidebar';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';
import userEvent from '@testing-library/user-event';

describe('Sidebar', () => {
  test('render Sidebar', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('render Sidebar', () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle-btn');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    userEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
