import { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import CopyIcon from 'shared/assets/icons/copy.svg';
import { Button } from 'shared/components/Button/Button';
import style from './Code.module.scss';

type CodePropsType = {
    text: string;
    className?: string;
}

export const Code = memo(({ text, className }: CodePropsType) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(style.block, {}, [className])}>
      <Button onClick={onCopy} className={style.copy_btn} theme="clear">
        <CopyIcon className={style.copyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
});
