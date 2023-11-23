import { HashRouter, Routes, Route } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { PrivateRoutes } from ".";
import { Fragment } from "react";


export const AppRoutes = () => {
    return (

        <HashRouter>
            <Fragment>
                <Routes>
                    <Route exact path="/" element={<Login />} />
                    <Route path="/home" element={<PrivateRoutes />}>
                        <Route exact path="/home" element={<Home />} />
                    </Route>
                </Routes>
            </Fragment>
        </HashRouter>

    );
}
