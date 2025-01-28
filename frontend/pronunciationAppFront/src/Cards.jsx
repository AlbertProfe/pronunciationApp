import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
  Button 
} from "@mui/material";

import { fetchWords } from "./data-api.js";

export default function WordList() {
  const [words, setWords] = useState([]);
  const [filteredWords, setFilteredWords] = useState([]);
  const [level, setLevel] = useState("ALL");

  useEffect(() => {
    const getWords = async () => {
      try {
        const data = await fetchWords();
        setWords(data);
        setFilteredWords(data); // Mostrar todas las palabras al inicio
      } catch (error) {
        console.error("Failed to fetch words:", error);
      }
    };

    getWords();
  }, []);

  // Maneja el filtro según la dificultad seleccionada
  const handleFilter = (level) => {
    setLevel(level);
    if (level === "ALL") {
      setFilteredWords(words);
    } else {
      const filtered = words.filter((word) => word.level === level);
      setFilteredWords(filtered);
    }
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ color: "#F0F4F8" }}
        >
          Word Filter
        </Typography>

        {/* Botones para filtrar */}
        <div className="flex gap-2 mb-4">
          <Button onClick={() => handleFilter("ALL")} variant="outline">
            All
          </Button>
          <Button onClick={() => handleFilter("🟢 EASY")} variant="outline">
            Easy 🟢
          </Button>
          <Button onClick={() => handleFilter("🟠 MEDIUM")} variant="outline">
            Medium 🟠
          </Button>
          <Button onClick={() => handleFilter("🔴 HARD")} variant="outline">
            Hard 🔴
          </Button>
        </div>

        {/* Lista de palabras */}
        <Grid container spacing={2}>
          {filteredWords.map((word) => (
            <Grid item xs={12} sm={6} md={4} key={word.id}>
              <Card
                sx={{
                  backgroundColor: "rgba(240, 244, 248, 0.1)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 6px 8px rgba(0, 0, 0, 0.15)",
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ color: "#F0F4F8" }}
                  >
                    {word.word}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#B0B8C1" }}>
                    Pronunciation: {word.pronunciation} <br />
                    Phonetic: {word.phonetic} <br />
                    Theme: {word.theme} <br />
                    Level: {word.level}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
