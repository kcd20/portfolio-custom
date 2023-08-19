import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import React from "react";

import theme from "../config/theme";

const classes = {
  navBar: {
    padding: theme.spacing(3),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgb(16, 44, 87)",
    position: "sticky",
    zIndex: theme.zIndex.appBar,
    top: 0,
  },
  navItems: {
    display: "flex",
    gap: theme.spacing(2),
  },
  item: {
    color: "rgb(218, 192, 163)",
  },
};

const Navbar = () => {
  const navItems = ["About", "Works", "Contact"];

  return (
    <Box sx={classes.navBar}>
      <Typography variant="h6" sx={classes.item}>
        MUI
      </Typography>
      <Box sx={classes.navItems}>
        {navItems.map((item) => (
          <Button key={item}>
            <Typography sx={classes.item}>{item}</Typography>
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Navbar;
