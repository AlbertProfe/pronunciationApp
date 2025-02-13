import './App.css'
import Cards from "./Cards.jsx"
import UsersList from './users.jsx';
import Header from "./Header.jsx";
import About from './about.jsx'
import layout from './Layout.jsx';
import nopage from './noPage.jsx';
import Practice from './Practice.jsx';
import { Route } from '@mui/icons-material';

export default function App() {

return(
  <BrowserRouter>
  <Routes>
    <Route path="/" element= {<Layout/>}>
    <Route index element={<Home/>} />
    <Route path="practice" element= {<Practive />} />
    <Route path = "about" element = {<About />} />
    <Route path= "*" element= {<noPage/>}/>
    </Route>
    </Routes>
    </BrowserRouter>
);

};