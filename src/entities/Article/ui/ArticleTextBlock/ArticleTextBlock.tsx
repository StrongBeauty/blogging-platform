import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { ArticleTextBlockType } from '../../model/types/article';
import style from './ArticleTextBlockt.module.scss';

type ArticleTextBlockPropsType = {
  block: ArticleTextBlockType;
  className?: string;
}

export const ArticleTextBlock = memo(({ block, className }: ArticleTextBlockPropsType) => (
  <div className={classNames(style.article_block, {}, [className])}>
    {block.title && (
      <Text title={block.title} className={style.title} />
    )}
    {block.paragraphs.map((p) => (
      <Text
        key={p}
        text={p}
        className={style.paragraph}
      />
    ))}
  </div>
));
