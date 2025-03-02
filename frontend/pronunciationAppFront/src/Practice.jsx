import  { useEffect, useState } from "react";
import { fetchWords } from "./data-api";
import Cards from "./Cards";

export default function Practice() {
  const [words, setWords] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWords(); 
        setWords(data); 
      } catch (error) {
        console.error("Error fetching words:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Practice</h1>
      <Cards words={words} /> {}
    </div>
  );
}
