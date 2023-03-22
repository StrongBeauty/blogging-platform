import { DynamicModuleLoader, ReducersListType } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { EditableProfileCard, profileReducer } from 'features/EditableProfileCard';

const reducers: ReducersListType = {
  profile: profileReducer,
};

const ProfilePage = () => (
  <DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount>
    <EditableProfileCard />
  </DynamicModuleLoader>
);

export default ProfilePage;
