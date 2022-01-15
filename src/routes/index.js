import React from "react";
import {Routes, Route} from "react-router-dom";
import App from "../../../../Downloads/Dexter-Website-master 2/src/App";

const AppRouter = () => (
    <Routes>
        <Route path={"/app"} component={App}/>
    </Routes>
);

export default AppRouter;
