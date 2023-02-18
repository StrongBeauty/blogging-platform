import { Loader } from 'shared/components/Loader';
import style from './PageLoader.module.scss';

export const PageLoader = () => (
  <div className={style.block}>
    <Loader />
  </div>
);
