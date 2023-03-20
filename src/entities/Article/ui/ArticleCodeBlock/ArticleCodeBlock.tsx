import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/components/Code/Code';
import style from './ArticleCodeBlockt.module.scss';
import { ArticleCodeBlockType } from '../../model/types/article';

type ArticleCodeBlockPropsType = {
  block: ArticleCodeBlockType;
  className?: string;
}

export const ArticleCodeBlock = memo(({ block, className }: ArticleCodeBlockPropsType) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(style.block, {}, [className])}>
      <Code text={block.code} />
    </div>
  );
});
