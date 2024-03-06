// import { Box, Container, Divider, Stack, Typography } from "@mui/material";
// import { message, network } from "../pages/Styles/networkPageStyles";

// import PeopleCards from "../components/PeopleCards";
// import Network from "../components/Network";
// import defaultProPic from "../Assets/defaulProPic.png";

// import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
// import LaunchIcon from "@mui/icons-material/Launch";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

// import SearchIcon from "@mui/icons-material/Search";
// import TuneIcon from "@mui/icons-material/Tune";

// const MyNetwork = () => {
//   return (
//     <Box sx={network.parentCont}>
//       <Container maxWidth="lg">
//         <Box sx={network.mainCont}>
//           <Network />
//           {/* <PeopleCards /> */}
//         </Box>
//       </Container>
//       <Box sx={message.mainCont}>
//         <Stack
//           direction={"row"}
//           alignItems={"center"}
//           justifyContent={"space-between"}
//           p={0.5}
//         >
//           <Stack direction={"row"} alignItems={"center"}>
//             <Box
//               component={"img"}
//               src={defaultProPic}
//               sx={message.accountimg}
//             />
//             <Typography>Messaging</Typography>
//           </Stack>
//           <Stack direction={"row"} alignItems={"center"} spacing={2}>
//             <MoreHorizIcon sx={message.topTabIcons} />
//             <LaunchIcon sx={message.topTabEditIcons} />
//             <KeyboardArrowDownIcon sx={message.topTabIcons} />
//           </Stack>
//         </Stack>
//         <Divider sx={message.divider} />
//         <Stack p={1}>
//           <Box sx={message.searchCont}>
//             <SearchIcon sx={message.inputSearchIcon} />
//             <Box
//               component={"input"}
//               sx={message.inputField}
//               placeholder="Search messages"
//             ></Box>
//             <TuneIcon sx={message.inputTuneIcon} />
//           </Box>
//         </Stack>
//       </Box>
//     </Box>
//   );
// };

// export default MyNetwork;

import React from "react";
import { Navbar } from "../components/Navbar";

const MyNetwork = () => {
  return (
    <>
      <Navbar />
      <div>mynetwork</div>
    </>
  );
};

export default MyNetwork;
