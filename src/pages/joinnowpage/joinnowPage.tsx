import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import google from "../../Assets/google.jpeg";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { useState } from "react";
import { useFormik } from "formik";
import userSchema from "../../schema/schema";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../../firestore/fireStore";
import { signInWithPopup } from "firebase/auth";
import joinpageStyles from "./jonnowpagestyles";
import JoinnowFooter from "../../components/joinnowfooter/joinnowFooter";
import { useNavigate } from "react-router-dom";
export default function JoinnowPage() {
  const navigate = useNavigate();
  const [show, setShow] = useState<boolean>(true);
  const handleShow = () => {
    setShow(!show);
  };
  const initialValues = {
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: userSchema,
    onSubmit: async (values) => {
      const res = await createUserWithEmailAndPassword(
        auth,
        formik.values.email,
        formik.values.password
      )
        .then((userCredential) => {
          const user = userCredential.user;
          if (user.email) {
            navigate("/");
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
      formik.resetForm();
    },
  });
  const handleGmail = async () => {
    const res = await signInWithPopup(auth, provider);
    const user = res.user;
  };
  const handleHome = () => {
    navigate("/");
  };
  return (
    <Box sx={joinpageStyles.body1}>
      <Box sx={joinpageStyles.body}>
        <Box sx={joinpageStyles.subcon}>
          <Typography sx={joinpageStyles.linkedintitle}>
            Linked<Box component="span">in</Box>
          </Typography>
          <Typography sx={joinpageStyles.subtitle}>
            Make the most of your professional life
          </Typography>
          <Paper sx={joinpageStyles.paper} elevation={3}>
            <form onSubmit={formik.handleSubmit}>
              <Typography sx={joinpageStyles.labeltext}>
                Email or Phone number
              </Typography>
              <TextField
                variant="outlined"
                sx={joinpageStyles.textinput}
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email ? (
                <Typography sx={joinpageStyles.error}>
                  {formik.errors.email}
                </Typography>
              ) : null}
              <Typography sx={joinpageStyles.labeltext}>Password</Typography>
              <TextField
                name="password"
                type={!show ? "text" : "password"}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                variant="outlined"
                sx={joinpageStyles.textinput}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {show ? (
                        <Button sx={joinpageStyles.show} onClick={handleShow}>
                          Show
                        </Button>
                      ) : (
                        <Button sx={joinpageStyles.show} onClick={handleShow}>
                          Hide
                        </Button>
                      )}
                    </InputAdornment>
                  ),
                }}
              />
              {formik.errors.password && formik.touched.password ? (
                <Typography sx={joinpageStyles.error}>
                  {formik.errors.password}
                </Typography>
              ) : null}
              <Typography sx={joinpageStyles.declaration}>
                By clicking Continue, you agree to LinkedIn’s{" "}
                <Typography component="span">User Agreement</Typography>,
                <Typography component="span">Privacy Policy</Typography>, and{" "}
                <Typography component="span"> Cookie Policy</Typography>.
              </Typography>
              <Typography sx={joinpageStyles.btncon}>
                <Button sx={joinpageStyles.btn} type="submit">
                  <Typography sx={joinpageStyles.continue}>Continue</Typography>
                </Button>
              </Typography>
            </form>
            <Divider sx={joinpageStyles.divider}>
              <Typography>or</Typography>
            </Divider>
            <Typography sx={joinpageStyles.btncon} onClick={handleGmail}>
              <Button sx={joinpageStyles.btn1}>
                <Typography
                  component="img"
                  src={google}
                  sx={joinpageStyles.googleimg}
                />
                Continue with Google
              </Button>
            </Typography>
            <Typography sx={joinpageStyles.already}>
              Already on LinkedIn?
              <Typography component="span" onClick={handleHome}>
                Sign in
              </Typography>{" "}
            </Typography>
          </Paper>
          <Typography sx={joinpageStyles.help}>
            Looking to create a page for a business?
            <Typography component="span">Get help</Typography>
          </Typography>
        </Box>
      </Box>
      <JoinnowFooter />
    </Box>
  );
}
