export const homeStyles = {
  main: {
    width: "100%",
    maxHeight: "fit-content",
    minHeight: "100vh",
    bgcolor: "#f4f2ee",
    position: "relative",
    zIndex: "1",

  },
  sideBar: {
    container: {
      border: "1px solid #e0e0e0",
      bgcolor: "white",
      width: "100%",
      borderRadius: "10px",
      boxSizing: "border-box",
      paddingBottom: "2%",
      marginBottom: "4%",

    },

    uploadBtn: { display: "none" },

    headerImg: {
      width: "100%",
      height: { xs: "150px", md: "80px" },
      bgcolor: "black",
      borderRadius: "10px 10px 0 0",
      position: "relative",
      marginBottom: { xs: "15%", sm: "7.5%", md: "15%" },
      backgroundImage: `url(${"https://static3.bigstockphoto.com/8/3/3/large1500/338605828.jpg"})`,
    },
    profile: {
      width: "70px",
      height: "70px",
      borderRadius: "50%",
      border: "1px solid",
      position: "absolute",
      left: "50%",
      bottom: "0%",
      transform: "translate(-50%,50%)",
      bgcolor: "white",
    },
    divider: { width: "100%" },
    secondaryText: { fontSize: "small", color: "grey", fontWeight: "700" },
    fontWeights: { fontWeight: "700", fontFamily: "Poppins, sans-serif" },
    smallFonts: { fontSize: "small", fontFamily: "Poppins, sans-serif" },
    combiFont: {
      fontWeight: "700",
      fontSize: "small",
      fontFamily: "Poppins, sans-serif",
    },
  },

  footerCont: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    py: 2,
  },
  footerText: {
    color: "#666666",
    fontSize: 12,
    "&:hover": { color: "#1976d2", textDecoration: "underline" },
  },
  footerList: {
    display: "flex",
    flexWrap: "wrap",
    gap: 1,
    alignItems: "center",
    justifyContent: "center",
    px: 7,
    py: 1,
  },
  footerImg: { width: "50px" },
  copyrightCont: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    px: 4,
    gap: 1,
    justifyContent: "center",
  },
  copyrightText: { fontSize: 12 },

  postheader: {
    border: "1px solid #e0e0e0",
    width: "100%",
    bgcolor: "white",
    borderRadius: "10px",
    boxSizing: "border-box",
    p: "2%",
    img: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      border: "1px solid #e0e0e0",
      mr: "10px",
    },
    input: {
      flexGrow: 1,
      borderRadius: "40px",
      border: "1px solid grey",
      px: "2.5%",
      fontWeight: "700",
      fontSize: "medium",
    },
    btn1: {
      color: "grey",
      textTransform: "capitalize",
      fontWeight: "700",
    },
  },

  posts: {

    container: {
      border: "1px solid #e0e0e0",
      width: "100%",
      bgcolor: "white",
      borderRadius: "10px",
      py: "2%",
    },
    postPropfile: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      mr: "10px",
    },
    description: {
      fontSize: "small",
      color: "grey",
      fontWeight: "700",
      width: "95%",
    },
    btns: {
      "&:hover": {
        bgcolor: "#d1d1d1",
      },
      color: "grey",
      textTransform: "capitalize",
    },
    postBtn: {
      my: "6px",
      textTransform: "capitalize",
      alignSelf: "flex-end"
    },
  },
  rightSideBar: {
    container: {
      border: "1px solid #e0e0e0",
      bgcolor: "white",
      width: "100%",
      borderRadius: "10px",
      boxSizing: "border-box",
      padding: "4%",
    },
    listItem: {
      display: "list-item",
      "& .MuiTypography-root": { fontWeight: "700" },
    },
    img: {
      width: "70px",
      height: "70px",
      borderRadius: "50%",
      mr: "10px",
    },
    btn: {
      borderRadius: "40px",
      textTransform: "capitalize",
      fontWeight: "700",
      fontFamily: "Poppins, sans-serif",
    },
  },
};
