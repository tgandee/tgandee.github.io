import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Collapse,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SchoolIcon from "@mui/icons-material/School";
import { courses } from "./courses";
import ExternalSite from "../../components/ExternalSite/ExternalSite";
import { useState } from "react";
import { mode } from "../../components/styles";
import { vaStyles } from "../../components/styles";
import va1 from "./images/VA_1.png";
import va2 from "./images/VA_2.png";
import va3 from "./images/VA_3.png";
// import { Link } from "react-router-dom";

const Line = () => {
  return (
    <Grid item xs={12}>
      <Divider />
    </Grid>
  );
};

const Education = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Grid container sx={{ p: 3 }} spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" sx={{ pb: 2, pt: 2 }} align="left">
          Education
        </Typography>
        <Typography variant="h5" align="left" sx={{ pt: 1, pb: 1 }}>
          Miami University
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={9} md={9} lg={9}>
            <Typography variant="h6" align="left">
              Master of Science in Computer Science
            </Typography>
            <List sx={{ listStyleType: "disc", pl: 2 }}>
              <ListItem sx={{ display: "list-item" }}>
                Thesis: Improving the Accessibility of Causal Modeling through
                Deep Learning
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>GPA: 4.00</ListItem>
            </List>
          </Grid>
          <Grid item xs={3} md={3} lg={3}>
            <Typography variant="h6" align="right">
              August 2022 - May 2024
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={8} md={8} lg={8}>
            <Typography variant="h6" align="left">
              Bachelor of Science in Computer Science
            </Typography>
          </Grid>

          <Grid item xs={4} md={4} lg={4}>
            <Typography variant="h6" align="right">
              August 2018 - May 2022
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={9} md={8} lg={8}>
            <List sx={{ listStyleType: "disc", pl: 2 }}>
              <ListItem sx={{ display: "list-item" }}>
                Capstone: NAAT Database
              </ListItem>
              <List sx={{ listStyleType: "circle", pl: 4 }}>
                <ListItem sx={{ display: "list-item" }}>
                  Developed closely with the Myaamia Center to inherit a Laravel
                  website for the Nipwaayoni Acquisition & Assessment team
                  (NAAT)
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  Implemented a customized user-management system to meet
                  client's deliverables, including access levels
                </ListItem>
                <ListItem sx={{ display: "list-item" }}>
                  Handled confidential data of human subjects under IRB
                  certification
                </ListItem>
              </List>
            </List>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={5} lg={4}>
            <Typography variant="h6" align="left">
              Courses
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item lg={6}>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <SchoolIcon />
            </ListItemIcon>
            <ListItemText primary="Related Coursework" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {courses.map((item, index) => (
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemText
                    primary={"CSE " + item.id + ": " + item.label}
                  />
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </List>
      </Grid>
    </Grid>
  );
};

const Experience = () => {
  return (
    <Grid container sx={{ p: 3 }} spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" sx={{ pb: 2, pt: 3 }} align="left">
          Experience
        </Typography>
        <Typography variant="h5" align="left" sx={{ pt: 1, pb: 1 }}>
          Quality Gold Inc.
        </Typography>
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={9} md={9} lg={9}>
            <Typography variant="h6" align="left">
              Developer I
            </Typography>
          </Grid>
          <Grid item xs={3} md={3} lg={3}>
            <Typography variant="h6" align="right">
              May 2022 - Present
            </Typography>
          </Grid>
          <Grid item xs={8} md={8} lg={8}>
            <Typography variant="h6" align="left">
              Developer Intern
            </Typography>
          </Grid>
          <Grid item xs={4} md={4} lg={4}>
            <Typography variant="h6" align="right">
              January 2020 - May 2022
            </Typography>
          </Grid>
          <Grid item xs={9} md={9} lg={9}>
            <List sx={{ listStyleType: "disc", pl: 2 }}>
              <ListItem sx={{ display: "list-item" }}>
                Developed and maintained company software, with a front-end in
                COBOL to the back-end in SSMS
              </ListItem>
              <ListItem sx={{ display: "list-item" }}>
                Gained experience with integrating third-party APIs through
                protocols like SOAP and WSDL, and implemented these in SSMS
                through .NET CLRs
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Research = () => {
  const [open, setOpen] = useState(false);
  var [site, setSite] = useState("");

  return (
    <Grid container sx={{ p: 3 }} spacing={2}>
      <Grid item xs={9}>
        <Typography variant="h3" sx={{ pb: 2, pt: 3 }} align="left">
          Research
        </Typography>
        <Typography variant="h5" align="left" sx={{ pt: 1, pb: 1 }}>
          Projects & Publications
        </Typography>
        <List sx={{ listStyleType: "disc", pl: 2 }}>
          <ListItem sx={{ display: "list-item" }}>
            <>In review: Tyler J. Gandee, </>
            <Link
              color={mode === "dark" ? "lightblue" : ""}
              variant="link"
              component={Link}
              onClick={() => {
                setOpen(true);
              }}
              underline="hover"
            >
              Philippe J. Giabbanelli
            </Link>
            . Combining Natural Language Generation and Graph Algorithms to
            Orchestrate Explanations of Causal Maps as Meaningful Paragraphs
            <List sx={{ listStyleType: "circle", pl: 4 }}>
              <ListItem sx={{ display: "list-item" }}>
                This project focuses on converting large causal maps into
                explainable text with the use of fine-tuning an OpenAI GPT model
                to generate a list of sentences (
                <Link
                  color={mode === "dark" ? "lightblue" : ""}
                  variant="link"
                  component={Link}
                  onClick={() => {
                    setSite("https://ieeexplore.ieee.org/document/10015446");
                    setOpen(true);
                  }}
                  underline="hover"
                >
                  Shrestha et al.
                </Link>
                ), then bundling those sentences to generate paragraphs through
                base GPT models, e.g. GPT-3.5 Turbo. We develop network
                traversal algorithms, and run a parameter grid search for bundle
                size (how many sentences per call) and temperature (variability
                of GPT).
              </ListItem>
            </List>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <>In process: Tyler J. Gandee, </>
            <Link
              color={mode === "dark" ? "lightblue" : ""}
              variant="link"
              component={Link}
              onClick={() => {
                setSite(
                  "https://scholar.google.com/citations?hl=en&user=7YilOHoAAAAJ"
                );
                setOpen(true);
              }}
              underline="hover"
            >
              Philippe J. Giabbanelli
            </Link>
            . Comparing Automatic Text Summarization with Graph Simplification
            Algorithms for Explanatory Models
            <List sx={{ listStyleType: "circle", pl: 4 }}>
              <ListItem sx={{ display: "list-item" }}>
                This project expands on our first project by comparing text
                summarization algorithms and models with graph Simplification
                methods. We developed numerous algorithms on how to split large
                texts to fall within character/token limits, and experimented
                with extractive (Natural Language Processing) and abstractive
                (Natural Language Generation) summarization models. We compare
                these methods with graph simplification models, which simplify
                the causal map first, then generate text.
              </ListItem>
            </List>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <>In process: Tyler J. Gandee, Sean Glaze, </>
            <Link
              color={mode === "dark" ? "lightblue" : ""}
              variant="link"
              component={Link}
              onClick={() => {
                setSite(
                  "https://scholar.google.com/citations?hl=en&user=7YilOHoAAAAJ"
                );
                setOpen(true);
              }}
              underline="hover"
            >
              Philippe J. Giabbanelli
            </Link>
            . Designing a Visual Analytics Environment to Combat Information
            Overload of Large Causal Maps
            <List sx={{ listStyleType: "circle", pl: 4 }}>
              <ListItem sx={{ display: "list-item" }}>
                This project is the culmination of our previous works. Given a
                causal map, its detailed textual representation, and its
                corresponding summarization, we develop an application that
                links all apsects together to provide details-on-demand for the
                user. We hope that in this project, along with all our other
                contributions, create a medium to traverse causal maps without
                experiencing information overload. We use OpenAI Embeddings for
                an advanced word search to extract referenced nodes from
                sentences, and provide a DALL-E image to provide a visual
                representation of the text.
              </ListItem>
              <Card sx={vaStyles.card}>
                <CardMedia
                  component="img"
                  sx={vaStyles.img}
                  image={va1}
                  title="Visual Analytics: User clicked on the first summary paragraph."
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    After importing your file, clicking on a summary's paragraph
                    shows the detailed text, a generated image, along with the
                    corresponding causal map.
                  </Typography>
                </CardContent>
              </Card>
              <br></br>
              <Card sx={vaStyles.card}>
                <CardMedia
                  component="img"
                  sx={vaStyles.img}
                  image={va2}
                  title="Visual Analytics: User clicked on the first detailed sentence."
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    The user can then select sentences, of which corresponding
                    nodes will be highlighted, which hides all other nodes and
                    edges.
                  </Typography>
                </CardContent>
              </Card>
              <br></br>
              <Card sx={vaStyles.card}>
                <CardMedia
                  component="img"
                  sx={vaStyles.img}
                  image={va3}
                  title="Visual Analytics: User clicked on the 'Substance abuse' node."
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    The user can also click on specific nodes to get its direct
                    subgraph.
                  </Typography>
                </CardContent>
              </Card>
              <ListItem sx={{ display: "list-item" }}>
                This project is ongoing, and there are many more features we are
                looking into, e.g. an advanced word search with user input, and
                the ability to select multiple nodes and subgraphs.
              </ListItem>
            </List>
          </ListItem>
        </List>
      </Grid>
      <ExternalSite setOpen={setOpen} open={open} site={site} />
    </Grid>
  );
};

const Cv = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container sx={{ p: 3 }} spacing={2}>
        <Grid item xs={12} align="center">
          <Typography variant="h1" sx={{ p: 3 }}>
            Resume / CV
          </Typography>
        </Grid>

        <Line />

        <Education />

        <Line />

        <Experience />

        <Line />

        <Research />
      </Grid>
    </Box>
  );
};

export default Cv;
