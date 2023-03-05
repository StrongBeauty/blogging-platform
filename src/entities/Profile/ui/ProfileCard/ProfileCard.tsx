import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileState';
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/components/Text/Text';
import { Button } from 'shared/components/Button/Button';
import { Input } from 'shared/components/Input/Input';
import style from './ProfileCard.module.scss';

export const ProfileCard = () => {
  const { t } = useTranslation();
  const data = useSelector(getProfileData);
  /* const error = useSelector(getProfileError);
  const isLoading = useSelector(getProfileIsLoading); */

  return (
    <div className={style.block}>
      <Text
        className={style.header}
        title={t('profile')}
      />
      <Button
        theme="outline"
        className={style.btn}
      >
        {t('edit')}
      </Button>
      <div className={style.data}>
        <Input
          value={data?.firstname}
          placeholder={t('name')}
          className={style.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t('lastame')}
          className={style.input}
        />
      </div>
    </div>
  );
};
