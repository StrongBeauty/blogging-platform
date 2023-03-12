import { useTranslation } from 'react-i18next';
import { Text, TextAlign } from 'shared/components/Text/Text';
import { Input } from 'shared/components/Input/Input';
import { ProfileType } from 'features/EditableProfileCard/modal/types/profile';
import { PageLoader } from 'widgets/PageLoader';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './ProfileCard.module.scss';

type ProfileCardProps = {
    data?: ProfileType;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
}

export const ProfileCard = ({
  data,
  isLoading,
  error,
  readonly,
  onChangeFirstname,
  onChangeLastname,
  onChangeCity,
  onChangeAge,
  onChangeUsername,
  onChangeAvatar,
}: ProfileCardProps) => {
  const { t } = useTranslation();
  if (isLoading) {
    return (
      <div className={classNames(style.block, {}, [style.loading])}>
        <PageLoader />
      </div>
    );
  }

  if (error) {
    return (
      <div className={classNames(style.block, {}, [style.error])}>
        <Text
          theme="error"
          title={t('wrong_message')}
          text={t('reload_message')}
          align={TextAlign.center}
        />
      </div>
    );
  }

  return (
    <div className={style.block}>
      <div className={style.data}>
        {
          data?.avatar
          && <img src={data?.avatar} alt={t('profileData.avatar')} />
        }
        <Input
          value={data?.firstname}
          placeholder={t('profileData.name')}
          className={style.input}
          onChange={onChangeFirstname}
          readonly={readonly}
        />
        <Input
          value={data?.lastname}
          placeholder={t('profileData.lastname')}
          className={style.input}
          onChange={onChangeLastname}
          readonly={readonly}
        />
        <Input
          value={data?.age}
          placeholder={t('profileData.age')}
          className={style.input}
          onChange={onChangeAge}
          readonly={readonly}
        />
        <Input
          value={data?.city}
          placeholder={t('profileData.city')}
          className={style.input}
          onChange={onChangeCity}
          readonly={readonly}
        />
        <Input
          value={data?.username}
          placeholder={t('profileData.username')}
          className={style.input}
          onChange={onChangeUsername}
          readonly={readonly}
        />
        <Input
          value={data?.avatar}
          placeholder={t('profileData.avatar')}
          className={style.input}
          onChange={onChangeAvatar}
          readonly={readonly}
        />
      </div>
    </div>
  );
};
