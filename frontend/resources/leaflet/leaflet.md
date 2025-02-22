# pronunciatonApp-v0.2 leaflet map

> React Leaflet provides bindings between React and Leaflet. It **does not replace Leaflet**, but leverages it to abstract Leaflet layers as React components. 



## Reference

- [React components for Leaflet maps](https://react-leaflet.js.org/)
- [pronunciationApp v0.2 frontend test-leaflet #16c0b25](https://github.com/AlbertProfe/pronunciationApp/tree/16c0b25b7b0d765847db5e982a76dc5624524b3b/frontend/pronunciationAppFront)
- [React-Leaflet 101: Bringing Interactive Maps to Your React Projects](https://medium.com/sopra-steria-norge/react-leaflet-a-short-intro-with-animations-4fa8f8c5eb1c)

## Installation

To use this component, make sure you have installed the necessary dependencies:

```bash
npm install react-leaflet leaflet @material-ui/core
npm install @mui/material @mui/styles @emotion/react @emotion/styled
```

Also, ensure that you've imported the Leaflet CSS in your main CSS file or component:

```jsx
import 'leaflet/dist/leaflet.css;
```

Upgrade React to version 19: update your `package.json` to use <mark>React 19</mark>, then run:

```bash
npm install
```

#### package.json

```json
{
  ....
  },
  "dependencies": {
    "@emotion/react": "^11.14.0",
    "@emotion/styled": "^11.14.0",
    "@fontsource/roboto": "^5.1.1",
    "@mui/icons-material": "^6.4.0",
    "@mui/material": "^6.4.1",
    "@mui/styles": "^6.4.1",
    "axios": "^1.7.9",
    "leaflet": "^1.9.4",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-leaflet": "^5.0.0",
    "react-router-dom": "^7.1.3"
  },
  "devDependencies": {
    ....
  }
}
```

## Theme

Remember to wrap your app with Material-UI's ThemeProvider for proper styling

```jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import "./App.css";
import Home from "./Home.jsx";
import Layout from "./Layout";
import NoPage from "./NoPage";
import Practice from "./Practice";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="practice" element={<Practice />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
```

## Component example

Here's a component `./frontend/pronunciationAppFront/src/BcnMap.jsx` that combines <mark>React Leaflet and Material-UI</mark>:

```jsx
import { Paper, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const useStyles = makeStyles((theme) => ({
  mapContainer: {
    height: "400px",
    width: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const MapComponent = () => {
  const classes = useStyles();
  const position = [41.3851, 2.1734]; // Barcelona coordinates

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6" gutterBottom>
        Barcelona Central HQ
      </Typography>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className={classes.mapContainer}
      >
        <TileLayer
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            Barcelona center. <br /> Plaça Urquinaona.
          </Popup>
        </Marker>
      </MapContainer>
    </Paper>
  );
};

export default MapComponent;
```
