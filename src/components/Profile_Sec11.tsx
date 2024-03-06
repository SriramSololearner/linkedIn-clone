import { Box, Button, Container, Fade, InputBase, Modal } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GppGoodIcon from "@mui/icons-material/GppGood";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { styles } from "../pages/Styles/ProfilePage";
import icon from "../Assets/download.jpeg";
import { dropdown } from "./Friends";
import { useSelector } from "react-redux";
import { RootState } from "../App/Store";

const Profile_Sec11 = () => {
  const [contactInfo, setContactInfo] = useState(false);
  const [profile, setProfile] = useState(false);
  const [dropDown, setDropDown] = useState(dropdown);
  const [editIntro, setEditIntro] = useState(false);
  const [opento, setOpento] = useState(false);
  const handleOpen_open = () => setOpento(!opento);

  // const { profileUrl } = useSelector((State: RootState) => State.Slider);
  const handleOpenEditIntro = () => setEditIntro(true);
  const handleCloseEditIntro = () => setEditIntro(false);
  const handleOpen = () => setContactInfo(true);
  const handleClose = () => setContactInfo(false);
  const addProfileHandlerOpen = () => {
    setProfile(true);
    setOpento(false);
  };
  const addProfileHandlerClose = () => {
    setProfile(false);
  };

  const handle_profile_dropdown = (itemId: number) => {
    const openItem = dropDown.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          open: !item.open,
        };
      } else {
        return {
          ...item,
          open: false,
        };
      }
    });
    setDropDown(openItem);
  };

  return (
    <Container>
      <Box sx={styles.profile_left_container}>
        <Box sx={styles.profile_left_container1}>
          <Box
            component="img"
            src={require("../Assets/bgimage.jpeg")}
            sx={styles.profile_left_bgimg}
          />
          <EditIcon
            sx={styles.profile_left_sec1_div_edit_icon}
            onClick={handleOpenEditIntro}
          />
          {editIntro && (
            <Modal
              open={editIntro}
              onClose={handleCloseEditIntro}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={styles.profile_left_sec1_contact_popup}>
                <Box sx={styles.profile_popup_top_div}>
                  <Box sx={styles.profile_sec1_popup_username}>Edit Intro</Box>
                  <CloseIcon
                    sx={styles.profile_sec1_popup_icon}
                    onClick={handleCloseEditIntro}
                  />
                </Box>
                <Box>
                  <InputBase
                    multiline
                    defaultValue={
                      " Hello all I'm a enthusiastic software developer!"
                    }
                  />
                </Box>
              </Box>
            </Modal>
          )}

          <CameraAltIcon sx={styles.profile_left_container_cam_icon} />
          <Box
            component="img"
            src={icon}
            sx={styles.profile_left_profile_img}
          />

          <Box sx={styles.profile_left_sec1_div}>
            <Box sx={styles.profile_left_sec1_left_div}>
              <Box sx={styles.profile_left_sec1_name}>
                Rahul Bandugu
                <Box component="span" sx={styles.profile_left_sec1_sub_text}>
                  (He/Him)
                </Box>
              </Box>
              <Box sx={styles.profile_left_sec1_company_name}>
                Extended web app tech
              </Box>
              <Box sx={styles.profile_left_sec1_company_location}>
                Hyderabad, Telangana, India{" "}
                <Box
                  component={"span"}
                  sx={styles.profile_left_sec1_company_location_ext}
                  onClick={handleOpen}
                >
                  Contact info
                </Box>
              </Box>
              {contactInfo && (
                <Modal
                  open={contactInfo}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={styles.profile_left_sec1_contact_popup}>
                    <Box sx={styles.profile_popup_top_div}>
                      <Box sx={styles.profile_sec1_popup_username}>
                        Rahul Bandugu
                      </Box>
                      <CloseIcon
                        sx={styles.profile_sec1_popup_icon}
                        onClick={handleClose}
                      />
                    </Box>

                    <Box sx={styles.profile_sec1_popup_icon_text_parent}>
                      <Box sx={styles.profile_sec1_popup_icon_text_div}>
                        <GppGoodIcon sx={styles.profile_sec1_popup_icon} />
                        <Box sx={styles.profile_sec1_popup_verifiedtext}>
                          Verified Number
                        </Box>
                      </Box>
                      <Box sx={styles.profile_sec1_popup_verified_subtext}>
                        A phone number associated with this account has been
                        verified. You can remove this verification at any time.
                        Learn more about{" "}
                        <Box
                          component="span"
                          sx={styles.profile_sec1_popup_account_link}
                        >
                          account verification.
                        </Box>
                      </Box>
                    </Box>

                    <Box sx={styles.sec1_popup_bottom_div}>
                      <Box sx={styles.profile_sec1_popup_bottom_icon_text_div}>
                        <Box sx={styles.profile_sec1_popup_verifiedtext}>
                          Contact Info
                        </Box>
                        <EditIcon sx={styles.profile_sec1_popup_icon} />
                      </Box>
                      <Box
                        sx={styles.profile_sec1_popup_bottom_icon_div_parent}
                      >
                        <LinkedInIcon sx={styles.profile_sec1_popup_icon} />
                        <Box sx={styles.profile_sec1_popup_bottom_icon_div}>
                          <Box sx={styles.profile_sec1_popup_verifiedtext}>
                            Your Profile
                          </Box>
                          <Box sx={styles.profile_sec1_popup_account_link}>
                            linkedin.com/in/vamsi-kommanapalli-85b935145
                          </Box>
                        </Box>
                      </Box>
                      <Box
                        sx={styles.profile_sec1_popup_bottom_icon_div_parent}
                      >
                        <EmailIcon sx={styles.profile_sec1_popup_icon} />
                        <Box sx={styles.profile_sec1_popup_bottom_icon_div}>
                          <Box sx={styles.profile_sec1_popup_verifiedtext}>
                            Email
                          </Box>
                          <Box sx={styles.profile_sec1_popup_account_link}>
                            vamsi11287@gmail.com
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Modal>
              )}
              <Box sx={styles.profile_left_sec1_contacts}>44 connections</Box>
              <Box sx={styles.profile_sec1_button_div}>
                <Button
                  sx={styles.profile_sec1_button1}
                  onClick={handleOpen_open}
                >
                  Open to
                </Button>
                {opento && (
                  <Box sx={styles.profile_sec1_popup2_div}>
                    <Box>
                      <Box sx={styles.profile_sec1_popup2_title}>Hiring</Box>
                      <Box sx={styles.profile_sec1_popup2_subtitle}>
                        Share that you have hired and attaract that
                      </Box>
                    </Box>
                    <Box>
                      <Box sx={styles.profile_sec1_popup2_title}>
                        Poviding servise
                      </Box>
                      <Box sx={styles.profile_sec1_popup2_subtitle}>
                        Showcase servise you offered so new{" "}
                      </Box>
                    </Box>
                  </Box>
                )}
                <Button
                  sx={styles.profile_sec1_button2}
                  onClick={addProfileHandlerOpen}
                >
                  Add profile section
                </Button>
                {
                  <Modal
                    open={profile}
                    onClose={addProfileHandlerClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={styles.profile_left_sec1_contact_popup}>
                      <Box sx={styles.profile_popup_top_div}>
                        <Box sx={styles.profile_sec1_popup_username}>
                          Add to profile
                        </Box>
                        <CloseIcon
                          sx={styles.profile_sec1_popup_icon}
                          onClick={addProfileHandlerClose}
                        />
                      </Box>
                      <Box sx={styles.profile_sec1_popup_add_profile}>
                        {dropDown.map((item) => (
                          <>
                            <Box
                              sx={styles.profile_sec1_popup_prfile_div}
                              key={item.id}
                              onClick={() => handle_profile_dropdown(item.id)}
                            >
                              <Box>{item.title}</Box>
                              <ArrowDropDownIcon />
                            </Box>
                            {item.open && (
                              <Box
                                sx={styles.profile_sec1_popup_profile_drop_div}
                              >
                                {item.topics.map((topic) => (
                                  <Box
                                    sx={
                                      styles.profile_sec1_popup_profile_drop_topic
                                    }
                                  >
                                    {topic}
                                  </Box>
                                ))}
                              </Box>
                            )}
                          </>
                        ))}
                      </Box>
                    </Box>
                  </Modal>
                }
                <Button sx={styles.profile_sec1_button3}>
                  Add Custom Button
                </Button>
                <Button sx={styles.profile_sec1_button4}>More</Button>
              </Box>
              <Box sx={styles.profile_sec1_card}>
                <EditIcon sx={styles.profile_sec1_edit_icon} />

                <Box sx={styles.profile_sec1_card_title}>Open to work</Box>
                <Box sx={styles.profile_sec1_card_sub_text}>
                  FullStack Developer Role
                </Box>
              </Box>
            </Box>
            <Box sx={styles.profile_left_sec1_right_div}>
              <AccountCircleIcon />
              <Box sx={styles.profile_left_sec1_right_text}>
                Viswanadha Institute of Technology And Management,
                Mindivanipalem Village, Sontyam, Panchayati, Anandapuram(M)
                PIN-531173(CC-52)
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Profile_Sec11;
