/* eslint-disable react/prop-types */
import { Box, IconButton, Typography } from "@mui/material";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useState } from "react";

export function WordSynonyms({ synonyms }) {
  const [index, setIndex] = useState(0);

  function handlePrevious() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  function handleNext() {
    if (index < synonyms.length - 1) {
      setIndex(index + 1);
    }
  }
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <Typography variant="body1" sx={{ color: "white" }}>
        Synonyms
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "start",
          gap: "1rem",
        }}
      >
        <IconButton sx={{visibility: index > 0 ? 'visible' : 'hidden' }} onClick={handlePrevious} aria-label="previous">
            <SkipPreviousIcon sx={{ color: "white" }} />
          </IconButton>
        <Typography
          variant="body1"
          sx={{ color: "#B0B8C1", fontWeight: "bold" }}
        >
          {synonyms[index]}
        </Typography>
          <IconButton sx={{visibility: index < synonyms.length - 1 ? 'visible': 'hidden'}} onClick={handleNext} aria-label="next">
            <SkipNextIcon sx={{ color: "white" }} />
          </IconButton>
      </Box>
    </Box>
  );
}
