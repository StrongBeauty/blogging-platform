import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties, useMemo } from 'react';
import style from './Avatar.module.scss';

type AvatarProps = {
    className?: string;
    src?: string;
    size?: number;
    alt?: string;
}

export const Avatar = ({
  className, src, size, alt,
}: AvatarProps) => {
//
  const styles = useMemo<CSSProperties>(() => ({
    width: size,
    height: size,
  }), [size]);

  return (
    <img
      src={src}
      style={styles}
      alt={alt}
      className={classNames(style.img, {}, [className])}
    />
  );
};
