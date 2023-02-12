import { classNames } from 'shared/lib/classNames/classNames';

type LoaderProps = {
    className?: string;
}

export const Loader = ({ className }: LoaderProps) => (
  <div className={classNames('lds-default', {}, [className])}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
);
