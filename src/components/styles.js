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
};

export const aboutMeStyles = {
  h1: {
    justifyContent: "center",
  },
  box: {
    alignItems: "center",
  },
};
