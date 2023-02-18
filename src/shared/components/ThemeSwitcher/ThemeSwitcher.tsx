import { useTheme } from 'shared/contexts/theme/useTheme';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button } from 'shared/components/Button';

export const ThemeSwitcher = () => {
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
};
