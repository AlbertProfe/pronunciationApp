import { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Container,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@mui/material";
import { fetchWords } from "./data-api";

// Custom hook to fetch words and manage state
const useFetchWords = () => {
  const [words, setWords] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWords = async () => {
      try {
        const data = await fetchWords();
        setWords(data);
      } catch (error) {
        setError(error);
        console.error("Failed to fetch words:", error);
      }
    };

    getWords();
  }, []);

  return { words, setWords, error };
};

// LevelButton component to select difficulty level
export default function LevelButton({ onFilterChange }) {
  const { words, setWords, error } = useFetchWords();
  const [level, setLevel] = useState("");

  const handleChange = (event) => {
    const selectedLevel = event.target.value;
    setLevel(selectedLevel);
    onFilterChange(selectedLevel); // Call the onFilterChange prop
  };

  return (
    <Container maxWidth="10%">
      <Box sx={{ my: 4 }}>
        {error && <Typography color="error">Failed to load words</Typography>}
        <FormControl fullWidth>
          <InputLabel id="level-select-label">Select Difficulty</InputLabel>
          <Select
            labelId="level-select-label"
            value={level}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>Select Difficulty</em>
            </MenuItem>
            <MenuItem value="easy">Easy</MenuItem>
            <MenuItem value="medium">Medium</MenuItem>
            <MenuItem value="hard">Hard</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Container>
  );
}