import React from "react";
import {
  Card,
  Grid,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography
} from "@mui/material";
import { Box } from "@mui/system";
import TitleCard from "../../components/TitleCard/TitleCard";

const padding = 3;

const AboutMe = () => {
  return (
    <Box component="main" align="center" sx={{ flexGrow: 1, p: padding }}>

      <TitleCard />

      <Grid container spacing={12} padding={padding} align="center">
        <Grid item xs={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>

      <Typography variant="paragraph" component="footer">
        Contact me
      </Typography>
    </Box>
  );
};

export default AboutMe;
