import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateType, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { Story } from '@storybook/react';

const defaultAsyncReducer: DeepPartial<ReducersMapObject<StateType>> = {
  loginForm: loginReducer,
  profile: profileReducer,
};

export const StoreDecorator = (
  state: DeepPartial<StateType>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateType>>,
) => (StoryComponent: Story) => (
  <StoreProvider initialState={state}>
    <StoryComponent />
  </StoreProvider>
);
