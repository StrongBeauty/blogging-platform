import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties } from 'react';
import style from './Sceleton.module.scss';

type SkeletonPropsType = {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton = ({
  className, height, width, border,
}: SkeletonPropsType) => {
  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div
      className={classNames(style.block, {}, [className])}
      style={styles}
    />
  );
};
