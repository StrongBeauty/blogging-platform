import './app.scss';
import {Suspense} from "react";
import {useTheme} from "shared/config/theme/useTheme";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar/ui/Sidebar/Sidebar";

export const App = () => {
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className='content'>
                <Sidebar />
                <AppRouter/>
            </div>
        </div>
    )
}