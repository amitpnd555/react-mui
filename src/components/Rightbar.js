import { Box, Card, CardMedia, Typography } from "@mui/material";
import React from "react";

export const Rightbar = () => {
  return (
    <Box bgcolor="lightgrey" flex={2} p={2}>
      <Typography variant="h6" component="h2">
        Latest Photos
      </Typography>
      <Card variant="outlined">
      <CardMedia
        component="img"
        height="194"
        image={require("./tech.jpg")}
        alt="Paella dish"
        
      />
      </Card>
    </Box>
  );
};

export default Rightbar;
