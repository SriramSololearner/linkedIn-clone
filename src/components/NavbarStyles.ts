export const navBar = {
    root: {
        background: 'white',
        position: "sticky",
        top: 1,
        zIndex: "2",
        height: "9vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    toolBar: {
        display: "flex",
        justifyContent: "space-around",
    },
    toolBarInnerChild: {
        display: "flex",
        alignItems: "center",
    },
    toolBarContainer: { display: "flex", },
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
    arrowIcon: {
        color: "grey",
        display: { xs: "none", lg: "flex" }, "&:hover": {
            color: "black"
        }
    },
    menuContainer: { mx: "0px", my: "0px", px: "20px" },
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
        width: { sm: "100%", md: "100%", lg: "43%" },
        justifyContent: "center",
        gap: "8px",
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

    premuimText: {
        width: "15ch",
        fontSize: "12px",
        color: "#a6701e",
        display: { xs: "none", md: "flex" },
        justifyContent: "center",
    },
    bottomNavigation: {
        width: "100%",
        display: { sm: "none" },
        background: "red",
        position: "fixed",
        bottom: "0px",
        zIndex: 5
    }


}
