import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

import theme from "../config/theme";

const classes = {
  root: {
    height: "100vh",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: theme.spacing(10),
  },
  leftContent: {},
  text: {
    color: theme.palette.navy,
  },
};

const Hero = () => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.leftContent}>
        <Typography sx={classes.text} variant="h3" fontWeight={500}>
          Hi, I&apos;m Cheng Da
        </Typography>
        <Typography sx={classes.text} variant="h1" fontWeight={900}>
          Front-End
        </Typography>
        <Typography sx={classes.text} variant="h1" fontWeight={900}>
          Developer
        </Typography>
      </Box>

      <Box>Right Content</Box>
    </Box>
  );
};

export default Hero;
