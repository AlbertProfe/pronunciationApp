import './App.css'
import Cards from "./Cards.jsx"
import Header from "./Header.jsx";
import UserAvatar from './UserAvatar.jsx';

export default function App() {


  return (
    <>
      <UserAvatar />
      
      <h2>Welcome to PronunciationApp</h2>

      <Header />

      <Cards />
    </>
  );
}