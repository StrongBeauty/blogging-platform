import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {routeConfig} from "shared/config/route/routeConfig";
import 'app/ui/app.scss';

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            {Object.values(routeConfig).map(({element, path}) => (
                <Routes>
                    <Route
                        key={path}
                        element={
                            <div className='wrapper'>
                                {element}
                            </div>
                        }
                        path={path}
                    />
                </Routes>
            ))}
        </Suspense>
    )
}
