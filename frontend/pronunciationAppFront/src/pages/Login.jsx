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
          marginTop: "0px",
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
