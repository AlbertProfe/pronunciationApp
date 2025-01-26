import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { fetchWords } from "./data-api";
import { filterByLevel } from "./utils";
import { AnimatedCard } from "./AnimatedCard";

export default function WordList() {
  const [words, setWords] = useState([]);
  const [level, setLevel] = useState(1);

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

  function handleLevel(event) {
    setLevel(event.target.value);
  }

  if (!words || words.length === 0) return <h2>Loading...</h2>;

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

        <Typography variant="label">Select a level:</Typography>
        <FormControl fullWidth>
          <Select
            value={level}
            label="Level"
            onChange={handleLevel}
            sx={{ backgroundColor: "white" }}
          >
            <MenuItem value={1}>Rookie</MenuItem>
            <MenuItem value={2}>Pro</MenuItem>
            <MenuItem value={3}>Legend</MenuItem>
          </Select>
        </FormControl>
        <Grid container spacing={2}>
          {filterByLevel(words, level).map((word) => (
            <Grid item xs={12} sm={6} md={4} key={word.id}>
              <AnimatedCard>
                <Card
                  sx={{
                    background:
                      "linear-gradient(45deg,rgb(16, 59, 215) 30%,rgb(31, 78, 139) 90%)",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "0.3s",
                    "&:hover": {
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
                      Pronunciation: {word.pronunciation}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#B0B8C1" }}>
                      level: {word.level}
                    </Typography>
                    {word.synonyms && (
                      <Typography variant="body2" sx={{ color: "#B0B8C1" }}>
                        Synonyms: {word.synonyms.join(", ")}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </AnimatedCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
