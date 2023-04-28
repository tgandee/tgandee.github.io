import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import TitleCard from "../../components/TitleCard/TitleCard";

const Home = () => {
  return (
    <Box component="main" align="center" sx={{ flexGrow: 1, p: 3 }}>
      
      <TitleCard />

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 4, md: 8 }}>
        <Grid item xs={2} sm={4} md={4}>
          <Typography variant="p" align="left">
            Hello there! I'm Tyler. I am a graduate student at Miami University working towards my MSCS in Computer Science.
            I love solving challengig problems, applying Machine learning to real-world applications, and explaining complicated
            topics in the simplest way possible (K.I.S.S).
          </Typography>
        </Grid>

        <Grid item xs={2} sm={4} md={4}>
          <Typography variant="p" align="left">
            Hello there! I'm Tyler. I am a graduate student at Miami University working towards my MSCS in Computer Science.
            I love solving challengig problems, applying Machine learning to real-world applications, and explaining complicated
            topics in the simplest way possible (K.I.S.S).
          </Typography>
        </Grid>
      </Grid>

    </Box>
  );
};

export default Home;
