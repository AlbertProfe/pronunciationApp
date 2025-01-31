import { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
  Button,
  Tabs,
  Tab,
} from "@mui/material";

import { fetchWords } from "./data-api.js";

// Componente de la pestaña
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function WordList() {
  const [words, setWords] = useState([]);
  const [filteredWords, setFilteredWords] = useState([]);
  const [level, setLevel] = useState("ALL");
  const [tabValue, setTabValue] = useState(0); // Estado para manejar las pestañas

  useEffect(() => {
    const getWords = async () => {
      try {
        const data = await fetchWords();
        setWords(data);
        setFilteredWords(data); 
      } catch (error) {
        console.error("Failed to fetch words:", error);
      }
    };

    getWords();
  }, []);

  // filtro de la dificultad 
  const handleFilter = (level) => {
    setLevel(level);
    if (level === "ALL") {
      setFilteredWords(words);
    } else {
      const filtered = words.filter((word) => word.level === level);
      setFilteredWords(filtered);
    }
  };

  // cambio de pestaña
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ color: "#fffff" }}
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
                    sx={{ color: "#fffff" }}
                  >
                    {word.word}
                  </Typography>
                  <Tabs
                    value={tabValue}
                    onChange={handleTabChange}
                    aria-label="word details tabs"
                  >
                    <Tab label="Details" />
                    <Tab label="Synonyms" />
                  </Tabs>
                  <TabPanel value={tabValue} index={0}>
                    <Typography variant="body2" sx={{ color: "#fffff" }}>
                      Pronunciation: {word.pronunciation} <br />
                      Phonetic: {word.phonetic} <br />
                      Theme: {word.theme} <br />
                      Level: {word.level}
                    </Typography>
                  </TabPanel>
                  <TabPanel value={tabValue} index={1}>
                    <Typography variant="body2" sx={{ color: "#FFFFF" }}>
                      Synonyms: {word.synonym}
                    </Typography>
                  </TabPanel>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}