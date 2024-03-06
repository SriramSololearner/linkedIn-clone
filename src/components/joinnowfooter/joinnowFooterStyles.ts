const joinFooterStyles = {
  body: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    pb: "25px"
  },
  subcon: {
    width: { xs: "99%", lg: "80%" },
    display: "flex",
    gap: { sm: "10px", lg: "15px" },
    alignItems: "center",
    justifyContent: "space-evenly",
    padding: { sm: "10px 24px", md: "0px" },
    flexDirection: { xs: "column", md: "row" },
  },
  eachcon: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: { sm: "10px", lg: "15px" },
    width: { xs: "100%", md: "auto" },
  },
  iocntext: {
    fontSize: { sm: "13px", lg: "14px" },
    fontWeight: "900",
    span: {
      fontSize: "15px",
      fontWeight: "900",
      backgroundColor: "#000",
      color: "white",
      marginLeft: "4px",
      marginRight: "10px",
    },
  },
  year: {
    fontSize: "12px",
    opacity: "0.8",
  },
  eachtext: {
    fontSize: { sm: "11px", lg: "13px" },
    fontWeight: "600",
    opacity: "0.8",
    width: { xs: "50%", md: "auto" },
    cursor: "pointer",
    "&:hover": {
      color: "#0a66c2",
      textDecoration: "underline",
    }
  },
  eachtext1: {
    fontSize: { sm: "11px", lg: "13px" },
    fontWeight: "600",
    opacity: "0.8",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
export default joinFooterStyles;
