import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Collapse,
  Typography,
  Container,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  IconButton,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { fetchWords } from "../middleware/words-data-api";

export default function WordList() {
  const [words, setWords] = useState([]);
  const [expandedStates, setExpandedStates] = useState([]);
  const [currentLevel, setCurrentLevel] = useState("");

  useEffect(() => {
    const getWords = async () => {
      try {
        const data = await fetchWords();
        setWords(data);
        setExpandedStates(Array(data.length).fill(false));
      } catch (error) {
        console.error("Failed to fetch words:", error);
      }
    };

    getWords();
  }, []);

  const handleExpandClick = (index) => {
    setExpandedStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const handleChangeCurrentLevel = (e) => {
    setCurrentLevel(e.target.value);
    setExpandedStates(Array(words.length).fill(false));
  };

  const getColorLevel = (level) => {
    switch (+level) {
      case 1:
        return "#00FF00";
      case 2:
        return "#FFA500";
      case 3:
        return "#FF0000";
      default:
        return "#222222";
    }
  };

  // TODO: Improve InputLabel display
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
        <FormControl fullWidth margin="normal">
          <InputLabel id="level-label">Level</InputLabel>
          <Select
            labelId="level-label"
            id="level-select"
            value={currentLevel}
            label="Age"
            onChange={handleChangeCurrentLevel}
            sx={{
              color: getColorLevel(currentLevel),
              backgroundColor: "#F0F4F8",
            }}
          >
            <MenuItem value={"1"}>Level 1</MenuItem>
            <MenuItem value={"2"}>Level 2</MenuItem>
            <MenuItem value={"3"}>Level 3</MenuItem>
            <MenuItem value={"All"}>All levels</MenuItem>
          </Select>
          <FormHelperText sx={{ color: "#F0F4F8" }}>
            Select your level!
          </FormHelperText>
        </FormControl>
        <Grid container spacing={2}>
          {words
            .filter((word) => {
              return currentLevel === "All" || word.level === +currentLevel;
            })
            .map((word, index) => (
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
                      {word.wordName}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "#B0B8C1" }}>
                      Pronunciation: {word.phoneticSpelling}
                    </Typography>
                  </CardContent>
                  {word.synonyms.length != 0 && (
                    <>
                      <CardActions
                        disableSpacing
                        sx={{ justifyContent: "center" }}
                      >
                        <Box sx={{ display: "flex" }}>
                          <Typography sx={{ color: "#F0F4F8" }}>
                            Synonyms
                          </Typography>
                          <IconButton onClick={() => handleExpandClick(index)}>
                            <ArrowDropDownIcon
                              sx={{
                                position: "relative",
                                top: "-8px",
                                color: "#F0F4F8",
                              }}
                            />
                          </IconButton>
                        </Box>
                      </CardActions>
                      <Collapse in={expandedStates[index]}>
                        {word.synonyms.map((synonym) => (
                          <Typography
                            key={synonym + word.id}
                            variant="body2"
                            sx={{ color: "#B0B8C1" }}
                            mb={1}
                          >
                            {synonym}
                          </Typography>
                        ))}
                      </Collapse>
                    </>
                  )}
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </Container>
  );
}
