import { DynamicModuleLoader, ReducersListType } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { EditableProfileCard, fetchProfileData, profileReducer } from 'features/EditableProfileCard';
import { Page } from 'widgets/Page/ui/Page';
import { useParams } from 'react-router-dom';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const reducers: ReducersListType = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    if (id) {
      dispatch(fetchProfileData(id));
    }
  });
  return (
    <DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount>
      <Page>
        <EditableProfileCard />
      </Page>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
