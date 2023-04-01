import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Icon } from 'shared/ui/Icon';
import EyeIcon from 'shared/assets/icons/eye.svg';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button';
import { HTMLAttributeAnchorTarget, memo } from 'react';
import { RoutePath } from 'shared/config/route/routeConfig';
import { AppLink } from 'shared/ui/AppLink';
import style from './ArticleListItem.module.scss';
import {
  ArticleBlockStyle, ArticleTextBlockType, ArticleType, ArticleView,
} from '../../model/types/article';
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock';

type ArticleListItemProps = {
  className?: string;
  article: ArticleType;
  view: ArticleView;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo(({
  className, article, view, target,
}: ArticleListItemProps) => {
  const { t } = useTranslation();

  const types = <Text text={article.type.join(', ')} className={style.types} />;
  const views = (
    <>
      <Text text={String(article.views)} className={style.views} />
      <Icon Svg={EyeIcon} />
    </>
  );

  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
      (block) => block.type === ArticleBlockStyle.TEXT,
    ) as ArticleTextBlockType;

    return (
      <div className={classNames(style.block, {}, [className, style[view]])}>
        <Card className={style.card}>
          <div className={style.header}>
            <Avatar size={30} src={article.user.avatar} />
            <Text text={article.user.username} className={style.username} />
            <Text text={article.createdAt} className={style.date} />
          </div>
          <Text title={article.title} className={style.title} />
          {types}
          <img src={article.img} className={style.img} alt={style.title} />
          {textBlock && (
            <ArticleTextBlock block={textBlock} className={style.text_block} />
          )}
          <div className={style.footer}>
            <AppLink target={target} to={RoutePath.article_details + article.id}>
              <Button theme="outline">
                {t('open')}
              </Button>
            </AppLink>
            {views}
          </div>
        </Card>
      </div>
    );
  }

  return (
    <AppLink
      target={target}
      to={RoutePath.article_details + article.id}
      className={classNames(style.block, {}, [className, style[view]])}
    >
      <Card className={style.card}>
        <div className={style.image_wrapper}>
          <img
            src={article.img}
            className={style.img}
            alt={article.title}
          />
          <Text
            text={article.createdAt}
            className={style.date}
          />
        </div>
        <div className={style.info_wrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={style.title} />
      </Card>
    </AppLink>
  );
});
