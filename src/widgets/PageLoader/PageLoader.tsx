import { Loader } from 'widgets/Loader';
import style from './PageLoader.module.scss';

export const PageLoader = () => (
  <div className={style.block}>
    <Loader />
  </div>
);
