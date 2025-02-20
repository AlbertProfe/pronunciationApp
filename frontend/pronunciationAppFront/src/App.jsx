import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About.jsx";
import "./styles/App.css";
import Home from "./pages/Home.jsx";
import Layout from "./layout/Layout.jsx";
import NoPage from "./pages/NoPage.jsx";
import Practice from "./pages/Practice.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Find from "./pages/Find.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="practice" element={<Practice />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="find" element={<Find />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
