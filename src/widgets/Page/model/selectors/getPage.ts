import { StateType } from 'app/providers/StoreProvider';
import { createSelector } from '@reduxjs/toolkit';

export const getPageScroll = (state: StateType) => state.page.scroll;

export const getPageScrollByPath = createSelector(
  getPageScroll,
  (state: StateType, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
