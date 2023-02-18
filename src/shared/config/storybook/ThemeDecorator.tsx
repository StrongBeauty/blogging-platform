import { Story } from '@storybook/react';

export const ThemeDecorator = (theme: 'light' | 'dark') => (StoryComponent: Story) => (
  <div className={`app ${theme}`}>
    <StoryComponent />
  </div>
);
