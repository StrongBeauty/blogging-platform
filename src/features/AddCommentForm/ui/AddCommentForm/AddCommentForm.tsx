import { addCommentFormReducer } from 'features/AddCommentForm/model/slices/addCommentFormSlice';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducersListType } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Button } from 'shared/components/Button';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/components/Input/Input';
import style from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
    className?: string;
    onSendComment: (text: string) => void;
}

const reducers: ReducersListType = {
  addCommentForm: addCommentFormReducer,
};

export const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  return (
    <DynamicModuleLoader reducers={reducers}>
      <div className={classNames(style.block, {}, [className])}>
        <Input
          className={style.input}
          placeholder={t('')}
        />
        <Button
          theme="outline"
        >
          {t('')}
        </Button>
      </div>
    </DynamicModuleLoader>
  );
});
