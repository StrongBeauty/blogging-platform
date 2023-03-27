import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersListType } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Button } from 'shared/ui/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import { useSelector } from 'react-redux';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import style from './AddCommentForm.module.scss';
import { getAddCommentFormText } from '../../model/selectors/getAddCommentForm';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersListType = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  const dispatch = useAppDispatch();

  const onCommentTextChange = useCallback((value: string) => {
    dispatch(addCommentFormActions.setText(value));
  }, [dispatch]);

  const onSendHandler = useCallback(() => {
    onSendComment(text || '');
    onCommentTextChange('');
  }, [onCommentTextChange, onSendComment, text]);

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(style.block, {}, [className])}>
        <Input
          className={style.input}
          placeholder={t('')}
          value={text}
          onChange={onCommentTextChange}
        />
        <Button
          theme="outline"
          onClick={onSendHandler}
        >
          {t('')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});
export default AddCommentForm;
