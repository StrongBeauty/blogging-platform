import { FC, useEffect } from 'react';
import { useStore } from 'react-redux';
import { ReduxStoreManagerType, StateTypeKey } from 'app/providers/StoreProvider/config/StateType';
import { Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

export type ReducersListType = {
    [name in StateTypeKey]?: Reducer;
}

interface DynamicModuleLoaderProps {
    reducers: ReducersListType;
    isRemoveAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const {
    children,
    reducers,
    isRemoveAfterUnmount = true,
  } = props;

  const store = useStore() as ReduxStoreManagerType;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();
    Object.entries(reducers).forEach(([name, reducer]) => {
      const mounted = mountedReducers[name as StateTypeKey];
      if (!mounted) {
        store.reducerManager.add(name as StateTypeKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (isRemoveAfterUnmount) {
        Object.entries(reducers).forEach(([name, _]) => {
          store.reducerManager.remove(name as StateTypeKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line
    }, []);

  return (
  // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {children}
    </>
  );
};
