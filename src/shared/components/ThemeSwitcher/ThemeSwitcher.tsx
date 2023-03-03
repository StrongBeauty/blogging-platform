import { useTheme } from 'shared/contexts/theme/useTheme';
import LightIcon from 'shared/assets/icons/theme_light.svg';
import DarkIcon from 'shared/assets/icons/theme_dark.svg';
import { Button } from 'shared/components/Button';
import { memo } from 'react';

export const ThemeSwitcher = memo(() => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      // toDo
      theme="clear"
      onClick={toggleTheme}
    >
      {theme === 'light' ? <LightIcon /> : <DarkIcon /> }
    </Button>
  );
});
