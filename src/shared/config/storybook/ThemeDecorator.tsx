import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from 'shared/contexts/theme';

export const ThemeDecorator = (theme: Theme.LIGHT | Theme.DARK) => (StoryComponent: Story) => (
  <ThemeProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  </ThemeProvider>

);
