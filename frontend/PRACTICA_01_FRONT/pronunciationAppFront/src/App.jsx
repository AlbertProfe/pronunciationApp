
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from '/src/Users.jsx';
import './App.css';
import Home from '/src/Home.jsx';
import  Layout from '/src/Layout.jsx';
import  Users from '/src/Users.jsx';
import Words from '/src/Words.jsx';


export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="words" element={<Words />} />
          <Route path="Users" element={<Users />} />
       
        </Route>
      </Routes>
    </BrowserRouter>
      );
};