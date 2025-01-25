import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  Grid2,
} from "@mui/material";
import LevelButton from "../Button.jsx"; // Import LevelButton component
import { fetchWords } from "./data-api.js";

export default function WordList() {
  const [words, setWords] = useState([]);
  const [filter, setFilter] = useState("");

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

  // Function to handle filter change
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // Filter words based on selected difficulty level
  const filteredWords = words.filter((word) =>
    filter ? word.level === filter : true
  );

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
        <LevelButton onFilterChange={handleFilterChange} /> {/* Pass handleFilterChange to LevelButton */}
        <Grid container spacing={2}>
          {filteredWords.map((word) => (
            <Grid item xs={12} sm={6} md={4} key={word.id}>
              <Card
                sx={{
                  background:
                    "linear-gradient(135deg, #f6d365 0%, #fda085 100%)",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 6px rgba(186, 10, 202, 0.56)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 6px 8px rgba(247, 17, 158, 0.64)",
                  },
                }}
              >
                <CardContent>
                  <Typography variant="body2" sx={{ color: "rgb(0, 0, 0)" }}>
                    Theme: {word.theme}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ color: "#F0F4F8" }}
                  >
                    {word.word}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "rgb(0, 0, 0)" }}>
                    <p>Pronunciation: {word.phonetic}</p>
                    <p>
                      Synonyms:{" "}
                      {word.synonym.map((syn, index) => (
                        <span key={index}>
                          {syn}
                          {index < word.synonym.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </p>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};