import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
  Chip,
  Stack
} from "@mui/material";
import { fetchWords } from "./data-api";

export default function WordList() {
  const [words, setWords] = useState([]);
  const [difficultyFilter, setDifficultyFilter] = useState("all");
  useEffect(() => {
    const getWords = async () => {
      try {
        const data = await fetchWords();
        setWords(data);
      } catch (error) {
        console.error("Failed to fetch words:", error);
      }
    };

    getWords();
  }, []);

  const getColor = (difficulty) => {
    switch (difficulty) {
      case "easy": return "#4CAF50"; // Green
      case "medium": return "#FFC107"; // Yellow
      case "hard": return "#F44336"; // Red
      default: return "rgba(240, 244, 248, 0.1)";
    }
  };

  
  const filteredWords =
  difficultyFilter === "all"
    ? words
    : words.filter((word) => word.difficulty === difficultyFilter);

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ color: "#F0F4F8" }}
        >
          Word List
        </Typography>

        <Stack direction="row" spacing={1} justifyContent="center" sx={{ mb: 3 }}>
          {["all", "easy", "medium", "hard"].map((level) => (
            <Chip
              key={level}
              label={level.charAt(0).toUpperCase() + level.slice(1)}
              onClick={() => setDifficultyFilter(level)}
              sx={{
                backgroundColor:
                  difficultyFilter === level ? getColor(level) : "rgba(255, 255, 255, 0.1)",
                color: difficultyFilter === level ? "#fff" : "#B0B8C1",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            />
          ))}
        </Stack>

        <Grid container spacing={2}>
          {filteredWords.map((word) => (
            <Grid item xs={12} sm={6} md={4} key={word.id}>
              <Card
                sx={{
                backgroundImage: `radial-gradient(circle, ${getColor(word.difficulty)} 20%, ${getColor(word.difficulty)}80 60%, ${getColor(word.difficulty)}20 100%)`,
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
                <Typography variant="h6" component="div" sx={{ color: "#000000" }}>
                  {word.word}
                </Typography>
                <Typography variant="h6" component="div" sx={{ color: "#000000" }}>
                  {word.difficulty}
                </Typography> 
                <Typography variant="body2" sx={{ color: "#000000" }}>
                  Pronunciation: {word.pronunciation}
                </Typography>
                {word.synonyms?.length > 0 && (
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
                    {word.synonyms.map((synonym, index) => (
                      <Chip
                        key={index}
                        label={synonym}
                        size="small"
                        sx={{
                          backgroundColor: "rgba(255, 255, 255, 0.1)",
                          color: "#F0F4F8",
                        }}
                      />
                    ))}
                    </Box>
                    )}
              </CardContent>
            </Card>
          </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
