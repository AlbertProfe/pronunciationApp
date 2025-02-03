import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
} from "@mui/material";
import { fetchWords } from "./data-api";

export default function WordList() {
  const [words, setWords] = useState([]);

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
        <Grid container spacing={2}>
          {words.map((word) => (
            <Grid item xs={12} sm={6} md={4} key={word.id}>
              <Card
                sx={{
                  backgroundColor: getColor(word.difficulty),
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
                  <Typography 
                    variant="h6"
                    commponen="div"
                    sx={{ color: "#F0F4F8" }}
                  >
                    {word.difficulty}
                  </Typography> 
                  <Typography variant="body2" sx={{ color: "#000000" }}>
                    Pronunciation: {word.pronunciation}
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
