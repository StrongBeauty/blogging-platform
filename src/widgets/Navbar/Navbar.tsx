import { AppLink } from 'shared/components/AppLink';
import style from './Navbar.module.scss';

export const Navbar = () => (
  <div className={style.navbar}>
    <div className={style.links}>
      <AppLink to="/" theme="secondary" className={style.link}>Main</AppLink>
      <AppLink to="/about" theme="secondary" className={style.link}>About</AppLink>
    </div>
  </div>
);
