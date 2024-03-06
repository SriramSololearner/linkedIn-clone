import globalstyles from "../../global";

const signinstyles = {
  body: {
    width: { xs: "97%", sm: '97%', lg: '80%' },
    margin: '10px 0px'
  },
  iconcon: {
    between: globalstyles.spacebetween,
  },
  logo: {
    color: "#0A66C2",
    fontWeight: "600",
    fontSize: { xs: '20px', sm: '30px' },
    width: { xs: '40%', sn: '50%' },
    span: {
      background: "#0A66C2",
      fontSize: { xs: '20px', sm: '30px' },
      color: 'white',
      padding: '0px 5px',
      fontWeight: "600",
      borderRadius: '5px'
    }
  },
  naviconcon: {
    width: '25%',
    display: { lg: 'flex', xs: 'none' }
  },
  signincon: {
    width: { xs: '56%', lg: '18%', sm: '28%', md: '20%' },
    marginRight: { md: '90px' },
  },
  iconstext: {
    fontSize: globalstyles.smallFont
  },
  icons: {
    color: 'grey'
  },
  divider: {
    color: 'grey'
  },
  signinbtn: {
    border: '1px solid #0A66C2',
    color: '#0A66C2',
    width: { xs: '75px', sm: '90px' },
    height: { xs: '25px', sm: '38px' },
    padding: '5px',
    fontSize: globalstyles.mediumFont.fontSize,
    fontWeight: '600',
    borderRadius: '25px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  joinNow: {
    "&:hover": {
      cursor: "pointer",
      color: "grey",
    }
  },
  join: globalstyles.mediumFont,


};
export default signinstyles;
