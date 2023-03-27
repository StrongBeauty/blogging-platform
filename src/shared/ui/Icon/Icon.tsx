import { memo, SVGProps, VFC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './Icon.module.scss';

type IconPropsType = {
    Svg: VFC<SVGProps<SVGSVGElement>>;
    className?: string;
}

export const Icon = memo(({ Svg, className }: IconPropsType) => (
  <Svg className={classNames(style.icon, {}, [className])} />
));
