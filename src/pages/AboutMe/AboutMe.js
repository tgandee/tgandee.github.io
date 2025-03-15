import React from "react";
import {
  Card,
  Divider,
  Grid,
  Grow,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import TitleCard from "../../components/TitleCard/TitleCard";
import cincinnati from "./images/cincinnati.jpg";
import cavies from "./images/cavaliers.jpg";
import miami from "./images/miami.jpg";
import game from "./images/gaming.jpeg";
// import golfImg from "./images/golf.jpg";
import half from "./images/half.jpg";
import camelback from "./images/camelback.jpg";
import { cardStyles } from "../../components/styles";

const padding = 5;

const hometown = (
  <Grid item xs={12} md={6} lg={4}>
    <Card sx={cardStyles.card}>
      <CardMedia
        component="img"
        sx={cardStyles.img}
        image={cincinnati}
        title="Cincinnati"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Hometown
        </Typography>
        <Typography variant="body2" color="text.secondary">
          I have lived in Cincinnati, Ohio my whole life. I currently live about
          30 minutes north of downtown, and attended Lakota West High School
          until I graduated in 2018. I am also currently a software developer in
          Fairfield for Quality Gold Inc.
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

const college = (
  <Grid item xs={12} md={6} lg={4}>
    <Card sx={cardStyles.card}>
      <CardMedia
        component="img"
        sx={cardStyles.img}
        image={miami}
        title="Miami University"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Miami Universtiy
        </Typography>
        <Typography variant="body2" color="text.secondary">
          After graduating, I began my studies at Miami University towards
          Computer Science. I received my B.S. in May 2022, and decided to
          return for my M.S., which I am currently working on. I am also an
          alumnus of the Alpha Theta chapter of Phi Mu Alpha Sinfonia, and
          served as Alumni Relations Officer from 2022-2023.
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

const band = (
  <Grid item xs={12} md={6} lg={4}>
    <Card sx={cardStyles.card}>
      <CardMedia sx={cardStyles.img} image={cavies} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant={cardStyles.variant} component="div">
          Marching Band & Drum Corps
        </Typography>
        <Typography variant="body2" color="text.secondary">
          I started doing marching band my freshman year of high school. In my
          junior year, I was selected as a drum major for the 2016-2017 seasons.
          In 2018, I marched with the Phantom Regiment Drum & Bugle Corps. I
          then marched with The Cavaliers in 2019, where I received the Rookie
          of the Year award, and was drum major from 2020-2021.
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

const games = (
  <Grid item xs={12} md={6} lg={4}>
    <Card sx={cardStyles.card}>
      <CardMedia
        component="img"
        sx={cardStyles.img}
        image={game}
        title="Video Games"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Video Games
        </Typography>
        <Typography variant="body2" color="text.secondary">
          In my free time, I love getting deep into lore-intensive games e.g.
          FromSoftware titles, the Halo series, Bethesda titles, and more.
          Currently, I am playing through Baldur's Gate 3 and Starfield.
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

const golf = (
  <Grid item xs={12} md={6} lg={4}>
    <Card sx={cardStyles.card}>
      <CardMedia
        component="img"
        sx={cardStyles.img}
        image={half}
        title="Running"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Sports/Exercise
        </Typography>
        <Typography variant="body2" color="text.secondary">
          2025 has been a pivotal moment in my habits, with the most significant
          change being my exercise routine. I am currently training for a half
          marathon, with the intention to work towards a full marathon by the
          end of this year.
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

/*
More recently, I have been getting really into Golf. I love the focus
on consistency and the drive to get better every time. While this is
not a extreme form of exercise, it gives me more reason to go outside
and spend time with friends.
*/

const travel = (
  <Grid item xs={12} md={6} lg={4}>
    <Card sx={cardStyles.card}>
      <CardMedia
        component="img"
        sx={cardStyles.img}
        image={camelback}
        title="Traveling"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Traveling
        </Typography>
        <Typography variant="body2" color="text.secondary">
          I will take any opportunity I can to go travel. I have driven through
          most most of the continental states in the U.S., visited 7 countries,
          and visited Puerto Rico and the U.S. Virgin Islands. My goal is the
          30-by-30 challenge: visit 30 national parks by the time I turn 30
          (current count: 6).
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

const AboutMe = () => {
  return (
    <Box component="main" align="center" sx={{ flexGrow: 1, p: 3 }}>
      <TitleCard title={"About Me"} />

      <Box sx={{ pt: padding }}>
        <Typography variant="h3">Who I Am</Typography>
      </Box>

      <Grid container spacing={1} padding={padding} align="center">
        <Grow in={true}>{hometown}</Grow>
        <Grow in={true} {...{ timeout: 1000 }}>
          {college}
        </Grow>
        <Grow in={true} {...{ timeout: 2000 }}>
          {band}
        </Grow>
      </Grid>

      <Divider />

      <Box sx={{ pt: padding }}>
        <Typography variant="h3">Hobbies</Typography>
      </Box>

      <Grid container spacing={1} padding={padding} align="center">
        <Grow in={true} {...{ timeout: 1000 }}>
          {games}
        </Grow>
        <Grow in={true} {...{ timeout: 2000 }}>
          {golf}
        </Grow>
        <Grow in={true} {...{ timeout: 3000 }}>
          {travel}
        </Grow>
      </Grid>
    </Box>
  );
};

export default AboutMe;
