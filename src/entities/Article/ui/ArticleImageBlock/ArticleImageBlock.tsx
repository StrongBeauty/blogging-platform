import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { TextAlign, Text } from 'shared/ui/Text/Text';
import { ArticleImageBlockType } from '../../model/types/article';
import style from './ArticleImageBlock.module.scss';

type ArticleImageBlockPropsType = {
  block: ArticleImageBlockType;
  className?: string;
}

export const ArticleImageBlock = memo(({ block, className }: ArticleImageBlockPropsType) => (
  <div className={classNames(style.article_block, {}, [className])}>
    <img src={block.src} alt={block.title} className={style.img} />
    {block.title && (
      <Text text={block.title} align={TextAlign.center} />
    )}
  </div>
));
