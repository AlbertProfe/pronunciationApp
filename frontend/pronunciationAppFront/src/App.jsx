import './App.css'
import Cards from "./Cards.jsx"
import UsersList from './users.jsx';
import Header from "./Header.jsx";

function App() {


  return (
    <>
      <UsersList />
      <h2>Welcome to PronunciationApp</h2>

      <Header />
      

      <Cards />
      
    </>
  );
}

export default App
