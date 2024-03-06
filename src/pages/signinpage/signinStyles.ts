
const signinStyles = {
  body: {
    width: { xs: "97%", sm: "97%", lg: "80%" },
    margin: "10px 0px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  formcon: {
    width: { xs: "100%", sm: "40%" },
  },
  title: {
    fontSize: "50px",
    fontWeight: "200",
    color: "brown",
    fontFamily:
      "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Fira Sans', Ubuntu, Oxygen, 'Oxygen Sans', Cantarell, 'Droid Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Lucida Grande', Helvetica, Arial, sans-serif",
  },
  labeltext: {
    fontSize: "15px",
    fontWeight: "600",
    opacity: "0.8",
    marginTop: "10px",
  },
  show: {
    color: "#0A66C2",
    fontSize: "16px",
    fontWeight: "600",
    "& .MuiInputAdornment-root": {
      color: "red",
    },
  },
  text: {
    margin: "20px 0px",
    color: "#0A66C2",
    fontSize: "16px",
    fontWeight: "600",
  },
  divider: {
    margin: "10px 0px",
  },
  declaration: {
    fontSize: "14px",
    fontWeight: "500",
    span: {
      fontSize: "14px",
      color: "#0A66C2",
      fontWeight: "500",
    },
  },
  btncon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: "10px 0px",
  },
  btn: {
    margin: "10px 0px",
    padding: "10px 0px",
    width: "100%",
    color: "white",
    backgroundColor: "#0A66C2",
    borderRadius: "25px",
    ":hover": {
      color: "white",
      backgroundColor: "#0A66C2",
    },
  },
  btn1: {
    width: "100%",
    margin: "10px 0px",
    padding: "5px 0px",
    color: "black",
    opacity: "0.9",
    border: "1px solid grey",
    borderRadius: "25px",
    textTransform: "math-auto",
    ":hover": {
      color: "black",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  btn2: {
    margin: "10px 0px",
    padding: "10px 0px",
    width: "100%",
    color: "black",
    opacity: "0.9",
    border: "1px solid grey",
    borderRadius: "25px",
    fontWeight: "600",
    fontSize: "15px",
    ":hover": {
      opacity: "0.9",
      borderRadius: "1px solid grey",
      color: "black",
    },
  },
  textinput: {
    marginTop: "10px",
    input: {
      height: "15px",
    },
    width: "100%",
    backgroundColor: "var(--color-input-container)",
    borderColor: "black",
    color: "var(--color-input-value)",
    borderRadius: "4px",
    borderWidth: "1px",
    borderStyle: "solid",
    fontSize: "16px",
    ".MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      border: "1px solid black",
    },
    fontFamily:
      "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', 'Fira Sans', Ubuntu, Oxygen, 'Oxygen Sans', Cantarell, 'Droid Sans', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Lucida Grande', Helvetica, Arial, sans-serif;",
  },

  imgcon: {
    width: "48%",
    marginRight: { md: "90px" },
    display: {
      xs: "none",
      sm: "block",
      lg: 'none'
    },
  },
  imgcon1: {
    width: "48%",
    marginRight: { md: "90px" },
    display: {
      xs: "none",

      lg: 'block'
    },
  },
  img: {
    width: "100%",
  },

  googleimg: {
    width: "8%",
    marginRight: "5px",
  },
  error: {
    color: 'red',
    fontSize: '12px',
    fontWeight: '600'
  }
};
export default signinStyles;
