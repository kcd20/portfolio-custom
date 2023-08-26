import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import React from "react";

import theme from "../config/theme";

const classes = {
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: theme.spacing(10),
    height: "100vh",
  },
  leftContent: {
    backgroundColor: theme.palette.navy,
    borderRadius: "12px",
    padding: theme.spacing(3),
    border: `5px solid ${theme.palette.gold}`,
    height: "min-content",
  },
  title: {
    marginBottom: theme.spacing(6),
    color: theme.palette.gold,
  },
  formWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(3),
  },
  formField: {
    "& label, label.Mui-focused": {
      color: theme.palette.gold,
    },
    "& .MuiOutlinedInput-root": {
      color: theme.palette.gold,
      "& fieldset": {
        borderColor: theme.palette.gold,
      },
      "&:hover fieldset": { borderColor: theme.palette.gold },
      "&.Mui-focused fieldset": { borderColor: theme.palette.gold },
    },
  },
};

const Contact = () => {
  return (
    <Box sx={classes.root}>
      <Box sx={classes.leftContent}>
        <Typography sx={classes.title} variant="h2">
          Contact
        </Typography>
        <Box component="form" sx={classes.formWrapper}>
          <label>
            <TextField
              required
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              inputProps={{ style: { color: "red" } }}
              fullWidth
              sx={classes.formField}
            />
          </label>

          <label>
            <TextField
              required
              id="outlined-basic"
              label="Last Name"
              variant="outlined"
              fullWidth
              sx={classes.formField}
            />
          </label>

          <label>
            <TextField
              required
              id="outlined-basic"
              label="Email Address"
              variant="outlined"
              fullWidth
              sx={classes.formField}
            />
          </label>

          <label>
            <TextField
              required
              id="outlined-basic"
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              sx={classes.formField}
            />
          </label>
        </Box>
      </Box>

      <Box>Image</Box>
    </Box>
  );
};

export default Contact;
