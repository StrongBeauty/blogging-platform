import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {AboutPageLazy, MainPageLazy} from "./pages/LazyPages";

export const App = () => {
    return (
        <div>
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