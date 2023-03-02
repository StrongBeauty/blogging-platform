import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreManagerType } from 'app/providers/StoreProvider';
import { StateKeyType } from 'app/providers/StoreProvider/config/StateTypes';
import { Reducer } from '@reduxjs/toolkit';

export type ReducerListType = {
    [name in StateKeyType]?: Reducer;
}

type ReducerListEntryType = [StateKeyType, Reducer];

type DynamicModuleLoaderType = {
    reducers: ReducerListType;
    isRemoveAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderType> = ({
  children, reducers, isRemoveAfterUnmount,
}) => {
  const store = useStore() as ReduxStoreManagerType;
  const dispatch = useDispatch();
  /* eslint-disable */
  useEffect(() => {
      Object.entries(reducers).forEach(([name, reducer]: ReducerListEntryType) => {
          store.reducerManager.add(name, reducer);
          dispatch({ type: `@INIT ${name} reducer` });
      })


    return () => {
      if (isRemoveAfterUnmount) {
          Object.entries(reducers).forEach(([name, ]: ReducerListEntryType) => {
        store.reducerManager.remove(name);
        dispatch({ type: `@DESTROY ${name} reducer` });
          })
      }
    };
  }, []);
    /* eslint-disable */
  return (
    <>
      {children}
    </>
  );
};
