import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import './styles/index.scss';
import {AboutPageLazy, MainPageLazy} from "./pages/LazyPages";
import {useTheme} from "./theme/useTheme";

export const App = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>theme</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageLazy/>}></Route>
                    <Route path={'/'} element={<MainPageLazy/>}></Route>
                </Routes>
            </Suspense>
        </div>
    )
}