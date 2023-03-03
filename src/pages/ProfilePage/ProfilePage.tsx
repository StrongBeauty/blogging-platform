import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerListType } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

const reducers: ReducerListType = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { t } = useTranslation();

  return (
    <DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount>
      <div>{t('pages.profile')}</div>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
