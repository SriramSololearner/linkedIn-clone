import { Box, Button, Divider, Typography } from "@mui/material";
import globalstyles from "../../global";
import signinStyles from "./signinStyles";
import signinoic1 from "../../Assets/signinpic1.svg";
import signinpic2 from "../../Assets/signinpic2.png";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import google from "../../Assets/google.jpeg";
import { useState } from "react";
import { useFormik } from "formik";
import userSchema from "../../schema/schema";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../../firestore/fireStore";
import { signInWithPopup } from "firebase/auth";
import SigninNavbar from "../../components/signinnavbar/signinNavbar";
import { useNavigate } from "react-router-dom";

interface Istate {
  errorMsg: "";
}

export default function SigninPage() {
  const [errorMsg, setErrorMsg] = useState<Istate["errorMsg"]>("");
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
      const res = await signInWithEmailAndPassword(
        auth,
        formik.values.email,
        formik.values.password
      )
        .then((userCredential) => {
          const user = userCredential.user;
          if (user.email) {
            navigate(`/home`);
          }
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorMessage);
          alert(errorCode);
        });
    },
  });
  const handleGmail = async () => {
    const res = await signInWithPopup(auth, provider);
    const user = res.user;
  };
  return (
    <Box sx={{ ...globalstyles.generalcolumn }}>
      <SigninNavbar />
      <Box sx={signinStyles.body}>
        <Box sx={signinStyles.formcon}>
          <form onSubmit={formik.handleSubmit}>
            <Typography sx={signinStyles.title}>
              Welcome to your professional community
            </Typography>
            <Typography sx={signinStyles.labeltext}>
              Email or Phone number
            </Typography>
            <TextField
              variant="outlined"
              sx={signinStyles.textinput}
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.errors.email && formik.touched.email ? (
              <Typography sx={signinStyles.error}>
                {formik.errors.email}
              </Typography>
            ) : null}
            <Typography sx={signinStyles.labeltext}>Password</Typography>
            <TextField
              name="password"
              type={show ? "text" : "password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              variant="outlined"
              sx={signinStyles.textinput}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {show ? (
                      <Typography sx={signinStyles.show} onClick={handleShow}>
                        Show
                      </Typography>
                    ) : (
                      <Typography sx={signinStyles.show} onClick={handleShow}>
                        Hide
                      </Typography>
                    )}
                  </InputAdornment>
                ),
              }}
            />
            {formik.errors.password && formik.touched.password ? (
              <Typography sx={signinStyles.error}>
                {formik.errors.password}
              </Typography>
            ) : null}
            <Typography sx={signinStyles.text}>Forgot Password?</Typography>
            <Typography sx={signinStyles.btncon}>
              <Button sx={signinStyles.btn} type="submit">
                Sign in
              </Button>
            </Typography>
          </form>
          <Divider sx={signinStyles.divider}>
            <Typography>or</Typography>
          </Divider>
          <Typography sx={signinStyles.declaration}>
            By clicking Continue, you agree to LinkedIn’s{" "}
            <Typography component="span">User Agreement</Typography>,
            <Typography component="span">Privacy Policy</Typography>, and{" "}
            <Typography component="span"> Cookie Policy</Typography>.
          </Typography>
          <Typography sx={signinStyles.btncon} onClick={handleGmail}>
            <Button sx={signinStyles.btn1}>
              <Typography
                component="img"
                src={google}
                sx={signinStyles.googleimg}
              />
              Continue with Google
            </Button>
          </Typography>
          <Typography sx={signinStyles.btncon}>
            <Button sx={signinStyles.btn2}>New to Linkedin ? join now</Button>
          </Typography>
        </Box>
        <Box sx={signinStyles.imgcon}>
          <Box component="img" src={signinoic1} sx={signinStyles.img}></Box>
        </Box>
        <Box sx={signinStyles.imgcon1}>
          <Box component="img" src={signinpic2} sx={signinStyles.img}></Box>
        </Box>
      </Box>
    </Box>
  );
}
