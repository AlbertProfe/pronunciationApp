import './App.css'
import Header from "./Header.jsx";
import Cards from "./Cards.jsx";
import UserComponent from "./User.jsx"


function App() {

  return (
    <>
      <h2>Welcome to Meme App</h2>

      <Header />
      <UserComponent />
      <Cards />
    </>
  );
}

export default App
