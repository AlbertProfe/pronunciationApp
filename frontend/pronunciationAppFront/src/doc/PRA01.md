# PRA#01-React Components Frontend Development
## Summary of tasks:

- [X] Set up Postman mock server

- [X] Implement axios function for data fetching

- [X] Create user JSON structure

- [X] Develop user component with avatar

- [X] Add difficulty levels to words and implement filtering

- [X] Implement synonyms rendering for words
---
**Advanced Customization (Optional)**

- [ ] CSS Enhancements.

- [ ] Animation Libraries.

- [ ] Enhanced Cardd Features.

---

1. **Set up Postman mock server**
- Created a mock server in Postman and added the URL as a variable. After that, I fed both GET functions with data from two JSON files (one for each endpoint).

2. **Implement axios function for data fetching**
- Implemented in `data-api.js`.

    ``` bash
    import axios from "axios";

    const BASE_URL = "https://60f262be-ed4d-4787-96fa-f388fe44fb1b.mock.pstmn.io";
    // READ: Fetch all users
    export const fetchUsers = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/users`);
        return response.data.users;
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
    }

    // READ: Fetch all words
    export const fetchWords = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/words`);
        return response.data.words;
    } catch (error) {
        console.error("Error fetching words:", error);
        throw error;
    }
    };
    ```
3. **Create JSON user structure**
- Both Json were made using Chat GPT.

4. **Develop user component with avatar**
- Attempted to add an image from Imgur, but it didn’t work for some reason
    ``` bash
    export default function Users() {
    const [user, setUser] = useState(null);
    const avatarUrl = "https://i.imgur.com/5bU3pLf.jpeg"; // Avatar from imgur
    ```
- ### Render.
    ``` bash
    <Card sx={{ 
        display: "flex", 
        alignItems: "center", 
        p: 1, 
        borderRadius: 3, 
        boxShadow: 3, 
        backgroundColor: "#faebd7",
        width: "auto",
        masWidth: 320,
        }}>
    <Avatar src={avatarUrl} alt="User Avatar" sx={{ width: 64, height: 64, mr: 2 }} />
        <CardContent>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                {user.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {user.email}
            </Typography>
        </CardContent>
    </Card>
    ```                    

5. **Add difficulty levels to words and implement filtering**
- ### Implemented three difficulty levels using colors (Green, Yellow, Red).

    ``` bash
    const getColor = (difficulty) => {
        switch (difficulty) {
        case "easy": return "#4CAF50"; // Green
        case "medium": return "#FFC107"; // Yellow
        case "hard": return "#F44336"; // Red
        default: return "rgba(240, 244, 248, 0.1)";
        }
    };
    
    const filteredWords =
    difficultyFilter === "all"
        ? words
        : words.filter((word) => word.difficulty === difficultyFilter);
    ```
-  ### Render
    ``` bash 
    backgroundImage: `radial-gradient(circle, ${getColor(word.difficulty)} 20%, ${getColor(word.difficulty)}80 60%, ${getColor(word.difficulty)}20 100%)`
    ```

6. **Implement synonyms rendering for words**
- Added a function to render synonyms.
    ``` bash
    const renderSynonyms = (synonyms) => {
    if (!synonyms || synonyms.length === 0) return null;

    return (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
        {synonyms.map((synonym, index) => (
            <Chip
            key={index}
            label={synonym}
            size="small"
            sx={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                color: "#F0F4F8",
            }}
            />
        ))}
        </Box>
    );
    };
    ```
- ### Render
    ``` bash
     <CardContent>
        <Typography variant="h6" component="div" sx={{ color: "#000000" }}>
            {word.word}
        </Typography>
        <Typography variant="h6" component="div" sx={{ color: "#000000" }}>
            {word.difficulty}
        </Typography> 
        <Typography variant="body2" sx={{ color: "#000000" }}>
            Pronunciation: {word.pronunciation}
        </Typography>
            {renderSynonyms(word.synonyms)} 
        </CardContent>
    ```    



## Solving issues
1. **Reinstalling all the dependencies**
    ``` bash
    rm -rf node_modules package-lock.json dist
    npm install
    npm run dev
    ```
