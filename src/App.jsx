import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React from "react";

import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Box>
      <Navbar />
      <Container>
        <Hero />
        <Contact />
      </Container>
    </Box>
  );
}

export default App;
