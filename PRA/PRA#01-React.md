# PRA#01-React: Components Frontend Development

## CIFO La Violeta - FullStack IFCD0210-25 MF01

In this practical exercise, you will develop a React frontend application, focusing on component creation, data fetching, and rendering. You'll be working with user data and implementing various React concepts.

## Objectives

Create a React frontend application that demonstrates proficiency in component creation, data management, and UI rendering.

### Project Base

- Frontend Repository: [PronunciationApp Frontend](https://github.com/AlbertProfe/pronunciationApp/tree/frontend-react/frontend)[1]
- React Branch: [frontend-react](https://github.com/AlbertProfe/pronunciationApp/tree/frontend-react)[2]
- React Documentation: [Describing the UI](https://react.dev/learn/describing-the-ui)[3]
- Postman Mock Server:  [endpoint](https://a387bb02-2aa0-41a6-b8f7-9cc5247b9d5f.mock.pstmn.io/words)[4]

### Postman Server Mock

The provided URL `https://a387bb02-2aa0-41a6-b8f7-9cc5247b9d5f.mock.pstmn.io/words` is an example of a **mock server endpoint URL** created in Postman[1][2]. 

> This URL represents a simulated API endpoint that can be used for development and testing purposes before the actual backend is ready[4].

Key characteristics of this mock server URL:

- Unique identifier: `a387bb02-2aa0-41a6-b8f7-9cc5247b9d5f`
- Domain: `mock.pstmn.io`
- Endpoint path: `/words`

When using this mock server URL, developers can:

- Simulate API responses
- Test frontend interactions
- Develop without waiting for backend completion
- Generate controlled, predefined responses

To use this mock server endpoint, simply send HTTP requests to the URL, and Postman will return the predefined mock data based on the saved examples in your collection.

### Tasks

Summary of tasks:

- [ ]  Set up Postman mock server

- [ ]  Implement axios function for data fetching

- [ ]  Create user JSON structure

- [ ]  Develop user component with avatar

- [ ]  Add difficulty levels to words and implement filtering

- [ ]  Implement synonyms rendering for words

### Tasks description

1. **Set up `Postman mock server`**
   
   - Create a <mark>Postman mock server</mark> with your own URL endpoint.
   - Design the mock responses to match the required data structure for users and words.

2. **Implement `axios` function for data fetching**
   
   - Create a separate *decouple*d file for the `axios` function.
   - Implement a decoupled axios function to import data from your mock server.
   - Ensure the function *handles errors and returns the fetched data.*

3. **Create `user` JSON structure**
   
   - Design a user JSON structure with a maximum of 10 fields.
   
   - Include various data types: string, boolean, int, and date.
   
   - Add this fake data to your <mark>Postman mock server</mark>
   
   - Example structure:
     
     ```json
     {
       "id": "1",
       "name": "John Doe",
       "age": 30,
       "isActive": true,
       "joinDate": "2023-01-15",
       "email": "john@example.com",
       "avatar": {"imageId": "IOjWm71", "imageName": "John_Doe" }
     }
     ```

4. **Develop user component with avatar**
   
   - Create a new component in `App.jsx` to display user data.
   - Implement an avatar for the user, following the example from the React documentation.
   - Render the user data fetched from the mock server.

5. **Add difficulty levels to words and implement filtering**
   
   - Extend the word data structure to include a difficulty level field (3 levels).
   - Implement a filter function to show only the easiest words.
   - Use the React concept of rendering lists as shown in the documentation.

6. **Implement synonyms rendering for words**
   
   - Add a new field "`synonyms`" as an array to the word data structure.
   - Render the synonyms for each word in the UI.
   - Ensure proper handling of words with no synonyms.

## Advanced Customization (Optional)

To take your React Card component to the next level, consider implementing these advanced features:

### CSS Enhancements

1. Add a gradient background to your card:

```css
.card {
  background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
}
```

2. Implement a transient effect on hover:

```css
.card {
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}
```

### Animation Libraries

Incorporate animations using popular libraries like Framer Motion or React Spring:

```jsx
import { motion } from 'framer-motion';

const AnimatedCard = () => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    {/* Card content */}
  </motion.div>
);
```

### Enhanced Card Features

Improve your card by adding UI controls as shown in the Material-UI documentation[1]:

```jsx
import { Card, CardMedia, IconButton, Typography } from '@mui/material';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

const EnhancedCard = () => (
  <Card>
    <CardMedia
      component="img"
      height="140"
      image="/path-to-image.jpg"
      alt="Album cover"
    />
    <Typography variant="h5" component="div">
      Live From Space
    </Typography>
    <Typography variant="subtitle1" color="text.secondary" component="div">
      Mac Miller
    </Typography>
    <IconButton aria-label="previous">
      <SkipPreviousIcon />
    </IconButton>
    <IconButton aria-label="play/pause">
      <PlayArrowIcon />
    </IconButton>
    <IconButton aria-label="next">
      <SkipNextIcon />
    </IconButton>
  </Card>
);
```

These enhancements will create a more interactive and visually appealing card component[1].

Citations:
[1] https://mui.com/material-ui/react-card/

### Submission Guidelines

- Fork the existing [PronunciationApp](https://github.com/AlbertProfe/pronunciationApp) repository and clone it to your local environment.
- Create a new branch named `PRA01-YourName` from the `frontend-react` branch.
- Commit your changes with clear, descriptive messages.
- Push your branch to your forked repository.
- Create a pull request to the AlbertProfe repository with a summary of your changes, titled:
  - `PRA#01_React-YourName-Compo9nentsFrontendDevelopment`

Good luck with your implementation! Remember to focus on creating reusable components and maintaining a clean, efficient codebase.

Citations:
[1] https://github.com/AlbertProfe/pronunciationApp/tree/frontend-react/frontend
[2] https://github.com/AlbertProfe/pronunciationApp/tree/frontend-react
[3] https://react.de
