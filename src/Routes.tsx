import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from './pages/home';
import { Login } from './pages/Login';

export const RoutesPages  = ()=>{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/home" element={<HomePage />}/>
            </Routes>
        </BrowserRouter>
    )
}