import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";
import style from './AppLink.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

type AppLinkProps = {
    className?: string;
    theme?: string;
} & LinkProps

export const AppLink: FC<AppLinkProps> = ({
                                              className,
                                              theme = 'primary',
                                              to,
                                              children
}) => {
    return(
        <Link
            to={to}
            className={classNames('', {}, [className, style[theme]])}
        >
            {children}
        </Link>
    )
}