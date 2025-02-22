# Material React UI

To install Material-UI (now known as MUI) for React using npm, follow these steps:

1. Open your terminal and navigate to your React project directory.

2. Run the following command to install MUI and its peer dependencies:

```bash
npm install @mui/material @emotion/react @emotion/styled
```

3. If you want to use icons, install the icons package:

```bash
npm install @mui/icons-material
```

4. For optimal font loading, install Roboto font:

```bash
npm install @fontsource/roboto
```

After installation, you can import and use MUI components in your React application. Here's a basic example of how to use a MUI component:

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

Remember to import the Roboto font in your main `index.js` or `App.js` file:

```jsx
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
```

This setup will allow you to use MUI components and styles in your React application[1][2][3].

Citations:
[1] https://v3.mui.com/getting-started/installation/
[2] https://v5-0-6.mui.com/getting-started/installation/
[3] https://mui.com/material-ui/getting-started/installation/
[4] https://v4.mui.com/getting-started/installation/
[5] https://www.educative.io/answers/how-to-install-material-ui-v5
[6] https://www.npmjs.com/package/@mui/material
[7] https://v4.mui.com/es/getting-started/installation/
[8] https://www.npmjs.com/package/@material-ui/core
