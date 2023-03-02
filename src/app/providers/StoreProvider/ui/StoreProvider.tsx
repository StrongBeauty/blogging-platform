import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { DeepPartial } from '@reduxjs/toolkit';
import { StateType } from 'app/providers/StoreProvider';

type StoreProviderProps = {
    children?: ReactNode;
    initialState?: DeepPartial<StateType>;
}
export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
  const store = createReduxStore(initialState as StateType);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
