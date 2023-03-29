import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateType } from 'app/providers/StoreProvider/config/StateType';
import { ReducersMapObject } from '@reduxjs/toolkit';

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateType>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateType>>
}

export const StoreProvider = (props: StoreProviderProps) => {
  const {
    children,
    initialState,
    asyncReducers,
  } = props;

  const store = createReduxStore(
        initialState as StateType,
        asyncReducers as ReducersMapObject<StateType>,
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
