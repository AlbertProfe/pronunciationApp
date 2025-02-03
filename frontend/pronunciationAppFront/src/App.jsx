import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './About';
import './App.css';
import Home from './Home.jsx';
import Layout from './Layout';
import NoPage from './NoPage';
import Practice from './Practice';
import Users from './Users.jsx';


export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="practice" element={<Practice />} />
          <Route path="user" element={<Users />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      );
};

