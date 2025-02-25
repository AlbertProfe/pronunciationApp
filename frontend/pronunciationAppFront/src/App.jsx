import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About.jsx";
import "./styles/App.css";
import Home from "./pages/Home.jsx";
import Layout from "./layout/Layout.jsx";
import NoPage from "./pages/NoPage.jsx";
import Practice from "./pages/Practice.jsx";
import MyProfile from "./pages/MyProfile.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="practice" element={<Practice />} />
          <Route path="about" element={<About />} />
          <Route path="myprofile" element={<MyProfile />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
