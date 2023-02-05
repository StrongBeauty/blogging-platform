import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {routeConfig} from "shared/config/app/routeConfig";

export const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            {Object.values(routeConfig).map(({element, path}) => (
                <Routes>
                <Route
                    key={path}
                    element={element}
                    path={path}
                />
            </Routes>
            ))}
        </Suspense>
    )
}
