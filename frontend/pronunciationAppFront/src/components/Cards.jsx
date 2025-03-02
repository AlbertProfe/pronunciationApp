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
import "../assets/styles/Cards.css";

import { fetchWords } from "../middleware/data-api";

// function to set color based on the level of the word
function colorLevelWords(level) {
  switch (level) {
    case 1:
      return 'green';
    case 2:
      return 'yellow';
    case 3:
      return 'orange';
    case 4:
      return 'darkorange';
    case 5:
      return 'red';
    default:
      return 'black';
  }
}

export default function WordList() {
  const [words, setWords] = useState([]);
  const [sortedWords, setSortedWords] = useState(words);

  // arrow function to sort the words array JSON in ascending order based on the level (difficulty)
  const sortByLevel = () => {
    const sorted = [...sortedWords].sort((a, b) => a.level - b.level);
    setSortedWords(sorted);
  };

  useEffect(() => {
    const getWords = async () => {
      try {
        const data = await fetchWords();
        setWords(data);
        setSortedWords(data);
      } catch (error) {
        console.error("Failed to fetch words:", error);
      }
    };

    getWords();
  }, []);

  return (
    <Container className="word-list-container">
      <Box>
        <Box className="title-container">
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ color: "#F0F4F8", textAlign: "left" }}
          >
            Words:
          </Typography>
          <Button variant="outlined" onClick={sortByLevel} className="sort-button">Sort by level</Button>
        </Box>
        <Grid container spacing={2}>
          {sortedWords.map((word) => (
            <Grid item xs={12} sm={6} md={4} key={word.id}>
              <Card className="word-card"
                sx={{
                  // setting the background color of the word card based on the level
                  backgroundColor: colorLevelWords(word.level),
                }}
              >
                <CardContent className="card-content-text">
                  <Typography
                    variant="h6"
                    component="div"
                  >
                    {word.word}
                  </Typography>
                  <Typography variant="body2" className="pronunciation">
                    Pronunciation: {word.pronunciation}
                  </Typography>
                  <Typography variant="body2" className="difficulty">
                    Difficulty: {word.level}
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
