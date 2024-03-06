
const joinpageStyles = {
  paper: {
    width:{sm:'40%',md:'36%',lg:'32%'},
    padding: "20px 22px",
  },
  body: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F3F2F0",
  },
  body1: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F3F2F0",
    height: "100vh",
    flexDirection: "column",
  },
  subcon: {
    width: { xs:'96%',sm: "99%", lg: "80%" },
    display: "flex",
    gap: { sm: "10px", lg: "15px" },
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 0px",
    flexDirection: { xs: "column" },
  },
  linkedintitle: {
    width: "100%",
    textAlign: "start",
    color: "#0A66C2",
    fontWeight: "600",
    fontSize: { xs: "20px", sm: "30px" },
    span: {
      background: "#0A66C2",
      fontSize: { xs: "20px", sm: "30px" },
      color: "white",
      padding: "0px 5px",
      fontWeight: "600",
      borderRadius: "5px",
    },
  },
  formcon: {
    width: { xs: "100%", sm: "40%" },
  },
  subtitle: {
    marginBottom: "10px",
    fontSize: "30px",
    fontWeight: "400",
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;",
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
    fontSize: "13px",
    fontWeight: "500",
  color:'grey',
    span: {
      fontSize: "14px",
      color: "#0A66C2",
      fontWeight: "500",
   
    },
    margin: "10px 0px",
    width: "100%",
    textAlign: "center",
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
  continue:{
fontSize:'13px',
fontWeight:'600',
textTransform: "math-auto",
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
      height: "5px",
      padding: '13px 14px',
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
    color: "red",
    fontSize: "12px",
    fontWeight: "600",
  },
  already: {
    width: "100%",
    fontSize: "16px",
    fontweight: "200",
    textAlign: "center",
    marginTop: "30px",
    marginBottom: "20px",
 
    span:{
        color:'#0A66C2',
        fontSize: "17px",
        fontWeight: "600",
        marginLeft:'4px',
      
    }
  },
  help:{
    width: "100%",
    fontSize: "14px",
    fontweight: "200",
    textAlign: "center",
    marginTop: "10px",
    marginBottom: "20px",
    span:{
        color:'#0A66C2',
        fontSize: "15px",
        fontWeight: "600",
        marginLeft:'4px',
    }
  }
};

export default joinpageStyles;
