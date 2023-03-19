import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import { StateType } from 'app/providers/StoreProvider/config/StateType';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';

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
