var hour = new Date().getHours();
export var mode = hour >= 18 || hour <= 6 ? "dark" : "light";

export const darkStyles = {
  palette: {
    mode,
    ...{
      // palette values for dark mode
      flexShrink: 0,
      primary: {
        main: "#101F33",
      },
      divider: "rgba(255, 255, 255, 0.9)",
      background: {
        default: "#101F33",
        paper: {
          background: "rgba(255, 255, 255, 0.9)",
        },
      },
      text: {
        primary: "rgba(255, 255, 255, 0.9)",
        secondary: "rgba(255, 255, 255, 0.7)",
      },
    },
  },
};

export const navbarStyles = {
  drawerOpen: {
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      backgroundColor: "#101F33",
      color: "rgba(255, 255, 255, 0.7)",
    },
    "& .Mui-selected": {
      color: "red",
    },
  },
  drawerClosed: {
    flexShrink: 0,
    "& .MuiDrawer-paper": {
      backgroundColor: "#101F33",
      color: "rgba(255, 255, 255, 0.7)",
    },
    "& .Mui-selected": {
      color: "red",
    },
  },
  icons: {
    color: "rgba(255, 255, 255, 0.7)!important",
    marginLeft: "20px",
  },
  text: {
    "& span": {
      marginLeft: "-10px",
      fontWeight: "600",
      fontSize: "16px",
    },
  },
  contact: {
    backgroundColor: "#101F33",
    color: "rgba(255, 255, 255, 0.7)",
  },
};

export const dialogStyles = {
  "& .MuiDialog-paper": {
    backgroundColor: mode === "dark" ? "#101F33" : "#ffffff",
  },
  button: {
    color: "inherit",
  },
};

export const aboutMeStyles = {
  h1: {
    justifyContent: "center",
  },
  box: {
    alignItems: "center",
  },
};

export const cardStyles = {
  card: {
    height: 500,
    maxWidth: 400,
  },
  img: {
    height: 300,
  },
  variant: "h5",
};
