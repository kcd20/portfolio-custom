import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";

import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import theme from "./config/theme";

const classes = {
  root: {
    padding: theme.spacing(5, 0),
  },
};
const App = () => {
  return (
    <Box>
      <Navbar />
      <Container sx={classes.root}>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </Container>
    </Box>
  );
};

export default App;
