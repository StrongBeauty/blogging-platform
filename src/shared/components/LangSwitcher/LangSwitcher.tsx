import { useTranslation } from 'react-i18next';
import { Button } from 'shared/components/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';

type LangSwitcherProps = {
    className?: string;
    isShort?: boolean;
}

export const LangSwitcher = memo(({ className, isShort }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme="clear"
      className={classNames('', {}, [className])}
      onClick={toggle}
    >
      {t(isShort ? 'short_lan' : 'language')}
    </Button>
  );
});
