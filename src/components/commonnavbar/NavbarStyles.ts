 

export const navbarStyles = {
    root: {
    background: 'white',
    },
    toolBar: {
    display: "flex",
    justifyContent: "space-around",
    },
    toolBarInnerChild: {
    display: "flex",
    alignItems: "center",
    },
    mbNavCom: {
    display: { xs: "none", md: "none" }
    },
    
    logo: {
    display: { xs: "none", sm: "flex" },
    width: "45x",
    height: "45px"
    },
    
    homeIcon: {
    color: "#666666",
    fontSize: { xs: "25px", lg: "25px", },
    "&:hover": {
    color: "black"
    }
    },
    profileMbIcon: {
    display: { xs: 'flex', sm: "none" },
    color: "#666666",
    fontSize: { xs: "25px", lg: "25px", },
    "&:hover": {
    color: "black"
    }
    },
    chatIcon: {
    marginLeft: "10px",
    color: "#666666",
    fontSize: { xs: "25px", lg: "25px", },
    "&:hover": {
    color: "black"
    }
    },
    iconsContainer: {
    display: { xs: "none", sm: "flex" },
    width: { sm: "100%", md: "100%", lg: "45%" },
    justifyContent: "center",
    gap: "25px",
    },
    mbIconsContainer: {
    display: { xs: "flex", sm: "none" },
    width: { xs: "100%", lg: "45%" },
    justifyContent: "flex-end",
    },
    
    linkinnerContainer: {
    cursor: "pointer",
    "&:hover": {
    color: "black",
    }
    },
    linkinnerContainerText: {
    width: "10ch",
    fontSize: "12px",
    display: { xs: "none", md: "flex" },
    justifyContent: "center",
    },
    
    }