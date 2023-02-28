import { Story } from '@storybook/react';
import { ThemeProvider } from 'shared/contexts/theme';

export const ThemeDecorator = (theme: 'light' | 'dark') => (StoryComponent: Story) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  </ThemeProvider>

);
