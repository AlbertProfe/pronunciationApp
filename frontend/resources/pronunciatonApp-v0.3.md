# PronunciationApp Frontend v0.3

## References

**Labs**

- [pronunciationApp -test-leaflet #684324f](https://github.com/AlbertProfe/pronunciationApp/tree/684324f309ae643e0d32f9d2d660a9500cd09fe5/frontend/pronunciationAppFront)

**Basic React Register Form**

> Register form using HTML tags for a user with username, email, and password.

- [GitHub - AlbertProfe/basicRegisterForm](https://github.com/AlbertProfe/basicRegisterForm)

**How render cycle woks**

> React's render cycle is a fundamental concept that every React developer
>  should understand. It consists of three main phases: trigger, render, 
> and commit. Let's explore each phase and see how we can observe them 
> using different hooks like `useRef`, `useEffect`, and `useState`.

- https://github.com/AlbertProfe/howRenderCycleWorks

**Reference: exercices react.dev**

- [Setting state triggers renders](https://react.dev/learn/state-as-a-snapshot#setting-state-triggers-renders)

- [Copying objects with the spread syntax](https://react.dev/learn/updating-objects-in-state#copying-objects-with-the-spread-syntax)

- [Using a single event handler for multiple fields](https://react.dev/learn/updating-objects-in-state#using-a-single-event-handler-for-multiple-fields)

## React basic register form

### Summary

This form includes:

1. Three input fields for username, email, and password, each with a corresponding label.
2. State management using `useState` for form data and registration status.
3. A `handleChange` function to update the form data as the user types.
4. A `handleSubmit` function that prevents the default form submission, logs the form data, and sets the registration status to true.
5. Conditional rendering to show a success message after registration.

### Conditional Render

The **conditional rendering** is a fundamental React pattern.

```jsx
if (isRegistered) {
  return <h1>Registration successful! Welcome aboard!</h1>
}
```

This code snippet<mark> is an example of early return conditional rendering</mark>. Here's how it works:

1. **Condition Check**: 
   The `if` statement checks the value of `isRegistered`. This is likely a boolean state variable managed by `useState`.

2. **Early Return**:
   If `isRegistered` is `true`, the function immediately returns the JSX element `<h1>Registration successful! Welcome aboard!</h1>`.

3. **Short-Circuiting the Render**:
   By returning early, this prevents the rest of the component's JSX from being rendered.
   
   1. It's like saying, *"If the user is registered, don't bother with the form, just show the success message."*

4. **Component Behavior**:
   
   - When `isRegistered` is `false`, this condition is skipped, and the component continues to render the registration form.
   - When `isRegistered` becomes `true` (likely after a successful form submission), the component re-renders, hits this condition, and only displays the success message.

This pattern is powerful because it allows you to completely change what a component renders based on its state. It's particularly useful for scenarios like:

- Showing success messages after form submissions
- Displaying loading states while data is being fetched
- Rendering different UIs based on user authentication status

### handleChange and spread operator

> The `handleChange` function is a common pattern used in React for managing form input changes.

1. The function takes an event object `e` as its parameter. This event is automatically passed when the function is called on an input change.

2. It uses object <mark>destructuring</mark> to extract `name` and `value` from `e.target`. In a form input, `name` corresponds to the input's name attribute, and `value` is the current value of the input.

3. The `setFormData` function is called to update the state. It uses a callback function that receives the previous state (`prevData`) as an argument.

4. Inside the callback, a new object is created and returned. This object:
   
   - <mark>Spreads all properties from the previous state</mark> (`...prevData`)
   - Adds or updates a property using **computed property name** syntax `[name]: value`

```jsx
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
```

This approach allows a single function to handle changes for multiple form inputs, updating the corresponding state property based on the input's name.

> The use of spread operator (`...`) ensures that all other form data remains intact while only updating the changed field. This is particularly useful for forms with multiple inputs, as it allows you to manage all form data in a single state object.

By using the input's name as the key, this function can dynamically update the correct property in the state object, making it versatile for handling various form inputs without needing separate handlers for each field.

### Code

```jsx
import { useState } from "react";

export default function RegisterForm() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  if (isRegistered) {
    return <h4>Registration successful! Welcome aboard!</h4>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted with:", formData);
    setIsRegistered(true);
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <br />
          <input
            type="text"
            id="username"
            name="username"
            placeholder="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>{" "}
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}
```

## MUI React Register Form

### Home

> This component serves as a simple home page with conditional rendering based on the user's login status, providing options to log in, register, or log out.

1. Inside the component `Home`:
   
   - It uses the `useNavigate` hook for navigation.
   - It manages state for user validation and username.
   - It defines functions to handle navigation to register and login pages, and to handle logout.

2. The component's UI:
   
   - Displays a welcome message and a `Header` component.
   - If the user is validated (logged in):
     - Shows a greeting with the username
     - Provides a <mark>logout</mark> button
   - If the user is not validated (logged out):
     - Offers login and register buttons

3. The UI is styled using Material-UI components like `Box`, `Typography`, and `Button`.

`./frontend/pronunciationAppFront/src/pages/Home.jsx`

```jsx
import { useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import { Button, Box, Typography } from "@mui/material";
import { useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [isValidated, setIsValidated] = useState(true);
  const [username, setUsername] = useState("albertprofe");

  const handleRegisterClick = () => {
    navigate("/register");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    setIsValidated(false);
  };

  return (
    <>
      <h2>Welcome to PronunciationApp</h2>
      <Header />
      <Box sx={{ textAlign: "center", mt: 4 }}>
        {isValidated ? (
          <Box>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Hello @{username}
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Box>
        ) : (
          <Box sx={{ mt: 3 }}>
            <Button
              variant="contained"
              onClick={handleLoginClick}
              color="primary"
              sx={{ mr: 2 }}
            >
              Login
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleRegisterClick}
            >
              Register
            </Button>
          </Box>
        )}
      </Box>
    </>
  );
}
```

### Login

React component for a login form using Material-UI (MUI):

1. It creates a custom<mark> dark theme for MUI components.</mark>

2. The `LoginForm` component:
   
   - Uses `useState` to manage form data (email and password) and validation errors.
   - Implements form validation for email and password fields.
   - Handles form submission and input changes.

3. The UI consists of:
   
   - A styled form container
   - Email and password input fields
   - A submit button

4. The form uses <mark>MUI components</mark> like `TextField` and `Button`, styled according to the custom theme.

5. It includes basic error handling and display for invalid inputs.

`frontend/pronunciationAppFront/src/pages/Login.jsx`

```jsx
import { useState } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";

// Create a custom theme to match the main CSS
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#4b6cb7",
    },
    background: {
      default: "transparent",
      paper: "rgba(255, 255, 255, 0.05)",
    },
    text: {
      primary: "#F0F4F8",
    },
  },
  typography: {
    fontFamily: "Inter, system-ui, Avenir, Helvetica, Arial, sans-serif",
    h5: {
      fontSize: "2em",
      lineHeight: 1.1,
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "rgba(255, 255, 255, 0.3)",
            },
            "&:hover fieldset": {
              borderColor: "rgba(255, 255, 255, 0.5)",
            },
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          letterSpacing: "0.5px",
        },
      },
    },
  },
});

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      email: "",
      password: "",
    };

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit logic here
      console.log("Login successful:", formData);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{
          marginTop: "60px",
          maxWidth: "400px",
          mx: "auto",
          p: 3,
          backgroundColor: "background.paper",
          borderRadius: 2,
          boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>

        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          required
        />

        <TextField
          fullWidth
          margin="normal"
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
          required
        />

        <Button fullWidth variant="contained" type="submit" sx={{ mt: 2 }}>
          Login
        </Button>
      </Box>
    </ThemeProvider>
  );
}
```

## JS ES6

**JS 2015 (ES6)** also known as **ECMAScript 6 (ES6)**, **ECMAScript 6 (ES6)** is a significant update to JavaScript, introducing arrow functions, classes, template literals, let and const for variable declaration, enhanced object literals, destructuring, and more modern features for better code organization and readability.

- [JavaScript ES6](https://www.w3schools.com/Js/js_es6.asp)

### Syntax and tools used

```jsx
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
```

The code you provided contains several core key JavaScript concepts: 

1. **Destructuring**
   
   ```javascript
   const { name, value } = e.target;
   ```
   
   This line extracts the 'name' and 'value' properties from the e.target object. It's a shorthand way of writing:javascript
   
   ```javascript
   const name = e.target.name; 
   const value = e.target.value;
   ```
   
   The left-hand side { name, value } is a pattern that matches the structure of the object being destructured (e.target). It tells JavaScript to look for properties named name and value in the object.
   
   ```javascript
   const e = { target: { name: "username", value: "JohnDoe" } };
   const { name, value } = e.target;
   console.log(name); // Output: "username"
   console.log(value); // Output: "JohnDoe"
   ```

2. **Spread operator (...)**
   
   ```javascript
   ...prevData
   ```
   
   The spread operator is used to create a copy of all the properties from the prevData object. It's used here to maintain all the existing form data while updating only the changed field.
   
   ```javascript
    const prevData = { firstName: "John", lastName: "Smith" }; // Initial state
   
    const newData = {
      ...prevData, // Spread all existing properties:  firstName: "John", lastName: "Smith"
      [name]: value, // Update the new state
    };
   ```

3. **Computed property name**
   
      This syntax allows using the value of 'name' as the property name, dynamically updating the correct form field
   
   ```javascript
      const prevData = { firstName: "John", lastName: "Smith" }; // Initial state
   const name = "lastName"; // The property we want to update
   const value = "Doe"; // The new value for the property
   
   const newData = {
     ...prevData, // Spread all existing properties
     [name]: value, // Update the 'lastName' property
   };
   
   console.log(newData); 
   // Output: { firstName: "John", lastName: "Doe" }
   ```

4. **Combining or Overwriting Properties**
   You can combine or overwrite properties when creating a new object. If multiple objects are spread, properties from later objects overwrite those from earlier ones
   
   ```javascript
      const updatedData = { ...prevData, lastName: "Doe" };
   console.log(updatedData);
   // Output: { firstName: "John", lastName: "Doe" }
   ```

5. **Literal Object: Curly Braces {}**
    Curly braces are required because they define an object literal in JavaScript. Without them, the spread operator would not work correctly for objects.
   
   ```javascript
     const prevData = { firstName: "John", lastName: "Smith" };
   
     // Using spread operator to copy properties into a new object
     const newData = { ...prevData };
   
     console.log(newData);
     // Output: { firstName: "John", lastName: "Smith" }
   ```

6. **Implicit Return vs. Non-Implicit (Explicit) Return in JavaScript**
    An implicit return occurs when a function automatically returns the result of a single expression without requiring the return keyword. This is possible with arrow functions in JavaScript. Implicit returns make code more concise and are often used for simple, one-liner functions.
   
   ```javascript
     const add = (a, b) => {
         const sum = a + b; // Additional logic
         return sum; // Explicitly returning the value
     };
     console.log(add(2, 3)); // Output: 5
   ```

7. **Syntax Element Parentheses**
   Parentheses around parameters are required in some cases (e.g., multiple parameters), while parentheses around expressions are purely optional for grouping or readability purposes
   
   ```javascript
    const square = x => x * x;
    console.log(square(3)); // Output: 9
   
    const square = (x) => (x * x);
    console.log(square(3)); // Output: 9
   ```
   
   ### Cheatsheet
   
   | Symbol    | Use Case                  | Example                                                   |
   | --------- | ------------------------- | --------------------------------------------------------- |
   | `{}`      | Object destructuring      | `const { name, age } = obj;`                              |
   | `[]`      | Array destructuring       | `const [first, second] = arr;`                            |
   | `()`      | Function parameters       | `const func = ({ name }) => console.log(name);`           |
   | No Symbol | Invalid for destructuring | `const name, age = obj;` (This will throw a syntax error) |
   
   | Syntax Element         | `x => x * x`                      | `(x) => (x * x)`             |
   | ---------------------- | --------------------------------- | ---------------------------- |
   | Parameter Parentheses  | Omitted (valid for single params) | Explicitly included          |
   | Expression Parentheses | Not used                          | Used for grouping (optional) |
   | Return Behavior        | Implicit return                   | Implicit return              |
   
   | Feature     | Implicit Return                             | Explicit Return                             |
   | ----------- | ------------------------------------------- | ------------------------------------------- |
   | Syntax      | No `return` keyword or curly braces needed. | Requires `return` keyword and curly braces. |
   | Use Case    | Simple one-liner expressions.               | More complex logic or multiline functions.  |
   | Example     | `const square = x => x * x;`                | `const square = x => { return x * x; };`    |
   | Readability | Concise and clean for short code.           | Better for clarity in complex logic.        |
