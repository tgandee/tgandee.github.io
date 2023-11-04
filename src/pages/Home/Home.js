import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { Divider, Grid, List, ListItem, ListItemText } from "@mui/material";
import TitleCard from "../../components/TitleCard/TitleCard";

const Home = () => {
  return (
    <Box component="main" align="center" sx={{ flexGrow: 1, p: 3 }}>
      <TitleCard />

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 4, md: 8 }}
        sx={{ p: 5 }}
      >
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h5" align="left">
            Hey there! I'm Tyler. I am a graduate student at Miami University
            working towards my MSCS in Computer Science. I love solving
            challenging problems, applying Machine learning to real-world
            applications, and explaining complicated topics in the simplest way
            possible (K.I.S.S). I am proficient in numerous languages like
            Python, C++, C#, Java, Javascript, SQL, and COBOL! I'm looking for
            work in the industry in ML or Cybersecurity,
            starting no earlier than the summer of 2024.
            <br />
            <br />
            Feel free to browse around, and contact me for any questions or
            feedback you may have!
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Divider />
        </Grid>

        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={12} md={12} lg={12}>
              <Typography variant="h3" align="left">
                Coming Soon
              </Typography>
              <List sx={{ listStyleType: "disc", pl: 2 }}>
                <ListItem sx={{ display: "list-item" }}>
                  <ListItemText>
                    Implement pre-trained machine learning models for simple
                    black-box demonstrations
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <ListItemText>
                    Further implementation of course-related projects
                  </ListItemText>
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  <ListItemText>
                    I love to hear your feedback on thing you would like to see!
                  </ListItemText>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
