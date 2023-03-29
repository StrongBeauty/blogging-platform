import { StateType } from 'app/providers/StoreProvider';

export const getAddCommentFormText = (state: StateType) => state.addCommentForm?.text ?? '';

export const getAddCommentFormError = (state: StateType) => state.addCommentForm?.error;
