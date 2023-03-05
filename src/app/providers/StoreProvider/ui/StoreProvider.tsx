import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateType } from 'app/providers/StoreProvider';
import { useNavigate } from 'react-router-dom';
import { ReducerListType } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

type StoreProviderProps = {
    children?: ReactNode;
    initialState?: DeepPartial<StateType>;
    asyncReducers?: ReducerListType
}

export const StoreProvider = ({ children, initialState, asyncReducers }: StoreProviderProps) => {
  const navigate = useNavigate();

  const store = createReduxStore(
      initialState as StateType,
      asyncReducers as ReducersMapObject<StateType>,
      navigate,
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
