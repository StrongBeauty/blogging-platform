import { DynamicModuleLoader, ReducerListType } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { EditableProfileCard, profileReducer } from 'features/EditableProfileCard';

const reducers: ReducerListType = {
  profile: profileReducer,
};

const ProfilePage = () => (
  <DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount>
    <EditableProfileCard />
  </DynamicModuleLoader>
);

export default ProfilePage;
