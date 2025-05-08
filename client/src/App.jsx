import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "theme";
import axios from "axios";

function App() {

    const mode = useSelector((state) => state.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    const isAuth = Boolean(useSelector((state) => state.token));

    const API = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
      });

    return <div className="app">
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Routes>
                    <Route path="/" element={isAuth ? <Navigate to="/home" /> : <LoginPage />} />
                    <Route path = "/home" element={isAuth ? <HomePage /> : <Navigate to="/" />} />
                    <Route path = "/profile/:userId" element={isAuth ? <ProfilePage /> : <Navigate to="/" />} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    </div>;
}

export default App;