import { DynamicModuleLoader, ReducerListType } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { EditableProfileCard, fetchProfileData, profileReducer } from 'features/EditableProfileCard';

const reducers: ReducerListType = {
  profile: profileReducer,
};

const ProfilePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount>
      <EditableProfileCard />
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
