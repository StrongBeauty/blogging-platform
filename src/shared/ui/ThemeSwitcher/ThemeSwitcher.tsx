import { useTheme } from 'shared/config/theme/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button } from 'shared/ui/Button';

type ThemeSwitcherProps = {
    className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      // toDo
      theme="clear"
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
    >
      {theme === 'light' ? <LightIcon /> : <DarkIcon />}
    </Button>
  );
};
