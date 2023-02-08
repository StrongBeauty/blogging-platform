import style from './Navbar.module.scss';
import {AppLink} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";



export const Navbar = () => {
    return(
        <div className={style.navbar}>
            <div className={style.links}>
                <AppLink to={'/'} theme={'secondary'} className={style.link}>Main</AppLink>
                <AppLink to={'/about'} theme={'secondary'} className={style.link}>About</AppLink>
            </div>
        </div>
    )
}