import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import { classNames } from 'shared/lib/classNames/classNames';

type LangSwitcherProps = {
    className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
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
            {t('language')}
        </Button>
    );
};
