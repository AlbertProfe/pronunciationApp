
# PronunciationApp v0.1

## Project Description

PronunciationApp is an application designed to help users improve their English pronunciation. The app uses a combination of modern technologies such as React, Material-UI, and Axios to provide a smooth and attractive user experience.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Material-UI (MUI)**: React component library for design and styles.
- **Axios**: HTTP client for making API requests.
- **Postman Mock Server**: Mock server for testing and development without a real backend.
- **Hooks**: For state management and side effects in React.

## Installation

To install and run the project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/pronunciationApp.git
    cd pronunciationApp
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm run dev
    ```

4. **Open the application** in your browser:
    ```
    http://localhost:3000
    ```

## Project Structure

- **`src/App.jsx`**: Main component of the application.
- **`src/Cards.jsx`**: Component that displays word cards with their pronunciation.
- **`src/Header.jsx`**: Component that displays the welcome section and user profile.
- **`src/data-api.js`**: Module that handles API requests.
- **`src/index.css`**: Global styles for the application.
- **`src/BoxAnimation.css`**: CSS animations for components.

## Using Material-UI

To use Material-UI in the project, the following packages have been installed:

```bash
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material @fontsource/roboto
```

### Example of Using a Material-UI Component

```jsx
import React from 'react';
import Button from '@mui/material/Button';

function App() {
  return (
     <Button variant="contained" color="primary">
        Hello World
     </Button>
  );
}

export default App;
```

## Using Axios for Data Fetching

The project uses Axios to make HTTP requests to a Postman mock server. Here is an example of how to make a request:

```jsx
import axios from "axios";

const BASE_URL = "https://c7a98a5b-adbe-4893-ac26-6ea827cccc21.mock.pstmn.io/";

export const fetchWords = async () => {
  try {
     const response = await axios.get(`${BASE_URL}/list`);
     return response.data.words;
  } catch (error) {
     console.error("Error fetching words:", error);
     throw error;
  }
};
```

## Data Flow

1. **Postman Mock Server**: Simulates an API endpoint, providing predefined responses.
2. **Axios**: Makes an HTTP GET request to the mock server.
3. **useEffect**: Triggers the Axios request when the component mounts.
4. **useState**: Stores the fetched data in the component's state.
5. **words.map()**: Iterates over the array of words stored in the state.
6. **Render**: Displays each word as a Material-UI Card component in the user interface.

## Example of Rendering Cards

```jsx
import React, { useState, useEffect } from 'react';
import { fetchWords } from './data-api';
import { Card, CardContent, Typography, Container, Grid } from '@mui/material';

export default function WordList() {
  const [words, setWords] = useState([]);

  useEffect(() => {
     const getWords = async () => {
        try {
          const data = await fetchWords();
          setWords(data);
        } catch (error) {
          console.error('Failed to fetch words:', error);
        }
     };

     getWords();
  }, []);

  return (
     <Container maxWidth="md">
        <Grid container spacing={2}>
          {words.map((word) => (
             <Grid item xs={12} sm={6} md={4} key={word.id}>
                <Card>
                  <CardContent>
                     <Typography variant="h6" component="div">
                        {word.word}
                     </Typography>
                     <Typography variant="body2" color="text.secondary">
                        Pronunciation: {word.pronunciation}
                     </Typography>
                  </CardContent>
                </Card>
             </Grid>
          ))}
        </Grid>
     </Container>
  );
}
```

## More info.

This document provides an overview of the project, its structure, and tech used. For more details, see the specific files in the repository.
```

```
This document was made with the help of DeepSeek.

