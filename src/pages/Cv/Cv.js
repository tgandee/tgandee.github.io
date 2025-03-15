import React from "react";
import {
  Box,
  //  Card,
  //  CardContent,
  //  CardMedia,
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
// import { vaStyles } from "../../components/styles";
// import va1 from "./images/VA_1.png";
// import va2 from "./images/VA_2.png";
// import va3 from "./images/VA_3.png";
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
              <ListItem sx={{ display: "list-item" }}>GPA: 3.97</ListItem>
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
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h5" align="left" sx={{ pt: 1, pb: 1 }}>
          Air Force Research Laboratory
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={9} md={9} lg={9}>
            <Typography variant="h6" align="left">
              Associate Research Computer Scientist
            </Typography>
          </Grid>
          <Grid item xs={3} md={3} lg={3}>
            <Typography variant="h6" align="right">
              August 2024 - Present
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h5" align="left" sx={{ pt: 1, pb: 1 }}>
          Quality Gold Inc.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={9} md={9} lg={9}>
            <Typography variant="h6" align="left">
              Developer I
            </Typography>
          </Grid>
          <Grid item xs={3} md={3} lg={3}>
            <Typography variant="h6" align="right">
              May 2022 - August 2024
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
            <>Tyler J. Gandee, </>
            <Link
              color={mode === "dark" ? "lightblue" : ""}
              variant="link"
              component={Link}
              onClick={() => {
                setSite(
                  "https://scholar.google.com/citations?user=7YilOHoAAAAJ&hl=en&oi=ao"
                );
                setOpen(true);
              }}
              underline="hover"
            >
              Philippe J. Giabbanelli
            </Link>
            <>. </>
            <Link
              color={mode === "dark" ? "lightblue" : ""}
              variant="link"
              component={Link}
              onClick={() => {
                setSite(
                  "https://link.springer.com/chapter/10.1007/978-3-031-75599-6_25"
                );
                setOpen(true);
              }}
              underline="hover"
            >
              Combining Natural Language Generation and Graph Algorithms to
              Explain Causal Maps Through Meaningful Paragraphs
            </Link>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <>Tyler J. Gandee, Sean C. Glaze, and </>
            <Link
              color={mode === "dark" ? "lightblue" : ""}
              variant="link"
              component={Link}
              onClick={() => {
                setSite(
                  "https://scholar.google.com/citations?user=7YilOHoAAAAJ&hl=en&oi=ao"
                );
                setOpen(true);
              }}
              underline="hover"
            >
              Philippe J. Giabbanelli
            </Link>
            <>. </>
            <Link
              color={mode === "dark" ? "lightblue" : ""}
              variant="link"
              component={Link}
              onClick={() => {
                setSite("https://www.mdpi.com/2227-7390/12/13/1946");
                setOpen(true);
              }}
              underline="hover"
            >
              A Visual Analytics Environment for Navigating Large Conceptual
              Models by Leveraging Generative Artificial Intelligence
            </Link>
          </ListItem>
          <ListItem sx={{ display: "list-item" }}>
            <Link
              color={mode === "dark" ? "lightblue" : ""}
              variant="link"
              component={Link}
              onClick={() => {
                setSite(
                  "https://scholar.google.com/citations?user=7YilOHoAAAAJ&hl=en&oi=ao"
                );
                setOpen(true);
              }}
              underline="hover"
            >
              Philippe J. Giabbanelli
            </Link>
            <>, Tyler J. Gandee, </>
            <Link
              color={mode === "dark" ? "lightblue" : ""}
              variant="link"
              component={Link}
              onClick={() => {
                setSite(
                  "https://scholar.google.com/citations?user=1XYgV6kAAAAJ&hl=en"
                );
                setOpen(true);
              }}
              underline="hover"
            >
              Ameeta Agrawal
            </Link>
            <>, and </>
            <Link
              color={mode === "dark" ? "lightblue" : ""}
              variant="link"
              component={Link}
              onClick={() => {
                setSite(
                  "https://scholar.google.com/citations?user=wdvcy7gAAAAJ&hl=en&oi=ao"
                );
                setOpen(true);
              }}
              underline="hover"
            >
              Niyousha Hosseinichimeh
            </Link>
            <>. </>
            <Link
              color={mode === "dark" ? "lightblue" : ""}
              variant="link"
              component={Link}
              onClick={() => {
                setSite(
                  "https://journals.sagepub.com/doi/full/10.1177/15705838241304102"
                );
                setOpen(true);
              }}
              underline="hover"
            >
              Benchmarking and Assessing Transformations Between Text and Causal
              Maps via Large Language Models
            </Link>
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
