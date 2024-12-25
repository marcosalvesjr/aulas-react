import { Home } from "../pages/Home";
import { List } from "../pages/List";
import { Login } from "../pages/Login";
import { Routes, Route } from "react-router-dom"


export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/login" element={< Login />} />
            <Route path="/list" element={<List />} />
        </Routes>
    );

}