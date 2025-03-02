# PronunciationApp v0.1

## Reference Lab

- [Lab#RE06-1: healthyFood Restaurant – albertprofe wiki](https://albertprofe.dev/reactjs/rjslab6-1.html): with AWS workflow CD/CI deploy
- [Lab#RE01-1: API Rest Axios – albertprofe wiki](https://albertprofe.dev/reactjs/rjslab1.html): with Axios

## Postman Mock Data Server

> A **Postman mock server is a simulated API endpoint that mimics the behavior of a real server** without the need for a fully implemented backend. It allows developers to test and prototype APIs by returning predefined responses to requests. 

```js
const BASE_URL = 'https://a387bb02-2aa0-41a6-b8f7-9cc5247b9d5f.mock.pstmn.io';
```

`Mock servers` are created from Postman collections, which contain saved examples of requests and responses. When a request is sent to the mock server, it matches the incoming request to the closest saved example and returns the corresponding response.

- [Configure and use a Postman mock server | Postman Docs](https://learning.postman.com/docs/designing-and-developing-your-api/mocking-data/setting-up-mock/)

These servers can be public or private, with private servers requiring an API key for access. They're useful for API development, testing, and simulating various scenarios without relying on a live backend.

`Mock servers` can also simulate network delays and generate dynamic responses using variables and templates, enhancing the realism of API testing. They're particularly valuable in the early stages of API development, allowing frontend and backend teams to work concurrently without waiting for a fully functional API.

### Fake data words

```json
{ "words" : [ { "id": "8b9248a4e0b64bbccf82e7723a3734279bf9bbc4", "word": "benevolent", "pronunciation": "/bɪˈnɛvələnt/" }, { "id": "3a7bd3e2a07e8c7e9b6e0d2c1f4a5b8d9c0e3f2", "word": "serendipity", "pronunciation": "/ˌserənˈdɪpɪti/" }, { "id": "5c9d7f3e1a2b4d6e8g0h9i7j6k5l4m3n2o1p", "word": "ephemeral", "pronunciation": "/ɪˈfɛmərəl/" }, { "id": "2f4e6d8c0b2a4d6e8f0a2c4e6g8i0k2m4o6q", "word": "ubiquitous", "pronunciation": "/juːˈbɪkwɪtəs/" }, { "id": "7h9j1l3n5p7r9t1v3x5z7b9d1f3h5j7l9n", "word": "mellifluous", "pronunciation": "/məˈlɪfluəs/" }, { "id": "1a3c5e7g9i1k3m5o7q9s1u3w5y7a9c1e3", "word": "eloquent", "pronunciation": "/ˈɛləkwənt/" }, { "id": "4b6d8f0h2j4l6n8p0r2t4v6x8z0b2d4f6", "word": "quintessential", "pronunciation": "/ˌkwɪntɪˈsenʃəl/" }, { "id": "9k1m3o5q7s9u1w3y5a7c9e1g3i5k7m9o", "word": "ethereal", "pronunciation": "/ɪˈθɪəriəl/" }, { "id": "2p4r6t8v0x2z4b6d8f0h2j4l6n8p0r2t", "word": "surreptitious", "pronunciation": "/ˌsʌrəpˈtɪʃəs/" }, { "id": "5u7w9y1a3c5e7g9i1k3m5o7q9s1u3w5", "word": "labyrinthine", "pronunciation": "/ˌlæbəˈrɪnθaɪn/" } ]}
```

## Project

### Tech stack

Draft-sandbox coupled code using:

- `Material UI`,

- `Postam` Mock Data Server API endpoint,

- `Axios` for data fetching,

- `Hooks` for state management

- and rendering the words 
  
  - from the provided API endpoint using `map` js function

This code combines the Material UI components with Axios for data fetching. It uses the `useState` and `useEffect` hooks to manage the state and side effects. The `fetchWords` function makes a GET request to the provided API endpoint to retrieve the word data. The component then renders the fetched words in a responsive grid of Material UI cards.

Remember to install the necessary dependencies:

```bash
npm install @mui/material @emotion/react @emotion/styled axios
```

This setup provides a clean, modern look with Material UI components and efficiently fetches data from the API using Axios.

### Flow

> This flow simulate API interactions without a real backend. 

The mock server returns predefined data, which Axios fetches in the useEffect hook. The fetched data is then stored in state using useState. Finally, the component maps over the state data, rendering each word as a card in the UI, creating a seamless development experience before the actual API is ready.

The flow from a Postman mock server to rendering in React involves these steps:

1. **Postman mock server**: Simulates an API endpoint, providing predefined responses to requests.

2. **Axios**: Makes an HTTP GET request to the mock server URL.

3. **useEffect**: Triggers the Axios request when the component mounts.

4. **useState**: Stores the fetched data in the component's state.

5. **words.map()**: Iterates over the array of words stored in state.

6. **Render**: Displays each word as a Material UI Card component in the UI.

### Code sandbox

```js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Container, 
  Grid 
} from '@mui/material';

const BASE_URL = 'https://a387bb02-2aa0-41a6-b8f7-9cc5247b9d5f.mock.pstmn.io';

const fetchWords = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/words`);
    return response.data.words;
  } catch (error) {
    console.error('Error fetching words:', error);
    throw error;
  }
};

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
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Word List
        </Typography>
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
      </Box>
    </Container>
  );
}
```
