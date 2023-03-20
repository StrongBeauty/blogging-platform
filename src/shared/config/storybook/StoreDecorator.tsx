import { StateType, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { Story } from '@storybook/react';
import { ReducerListType } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'features/EditableProfileCard';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';

const defaultAsyncReducer: ReducerListType = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateType>,
  asyncReducers?: ReducerListType,
) => (StoryComponent: Story) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducer, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);
