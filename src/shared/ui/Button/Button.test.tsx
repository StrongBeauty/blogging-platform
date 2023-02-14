import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('render Button', () => {
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('check clear theme', () => {
    render(<Button theme="clear">test</Button>);
    expect(screen.getByText('test')).toHaveClass('clear');
    // screen.debug();
  });
});

// jest --config=jest.config.ts --testNamePattern=Sidebar
