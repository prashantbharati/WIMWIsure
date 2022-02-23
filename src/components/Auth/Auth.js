import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// import { signin, signup } from "../../actions/auth";
// import { AUTH } from "../../constants/actionTypes";

import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import { GoogleLogin } from "react-google-login";
// import Icon from "./icon";

import useStyles from "./styles";
import Input from "./Input";
// import { signin, signup } from "../../actions/auth";
import axios from "axios";
const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const API = axios.create({
  baseURL: "http://localhost:5000",
});

// API.interceptors.request.use((req) => {
//   if (localStorage.getItem("profile")) {
//     req.headers.Authorization = `Bearer ${
//       JSON.parse(localStorage.getItem("profile")).token
//     }`;
//   }

//   return req;
// });

export const Auth = () => {
  const signIn = (formData) => API.post("/user/signin", formData);
  const signUp = (formData) => API.post("/user/signup", formData);
  const navigate = useNavigate();
  const signin = async (formData, navigate) => {
    try {
      const { data } = await signIn(formData);
      console.log(data, "auth front signin");
      // dispatch({ type: AUTH, data });
      localStorage.setItem("profile", JSON.stringify({ data }));
      navigate("/next");
    } catch (error) {
      console.log(error);
    }
  };

  const signup = async (formData, navigate) => {
    try {
      const { data } = await signUp(formData);

      // dispatch({ type: AUTH, data });
      console.log(data, "signup");
      localStorage.setItem("profile", JSON.stringify({ data }));
      navigate("/next");
    } catch (error) {
      console.log(error);
    }
  };

  const classes = useStyles();
  const [form, setForm] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  // const dispatch = useDispatch();

  // const history = useHistory();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      signup(form, navigate);
    } else {
      signin(form, navigate);
    }
    console.log(form);
  };
  const handleShowPassword = () => setShowPassword(!showPassword);
  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);

    setShowPassword(false);
  };

  // const googleSuccess = async (res) => {
  //   const result = res?.profileObj;
  //   const token = res?.tokenId;

  //   try {
  //     dispatch({ type: AUTH, data: { result, token } });

  //     navigate("/");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const googleError = (error) => {
  //   console.log(error);
  //   alert("Google Sign In was unsuccessful. Try again later");
  // };
  console.log("hii");
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Paper className={classes.paper} elevation={3}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {isSignup ? "Sign up" : "Sign in"}
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {isSignup && (
                <>
                  <Input
                    name="firstName"
                    label="First Name"
                    handleChange={handleChange}
                    autoFocus
                    half
                  />
                  <Input
                    name="lastName"
                    label="Last Name"
                    handleChange={handleChange}
                    half
                  />
                </>
              )}
              <Input
                name="email"
                label="Email Address"
                handleChange={handleChange}
                type="email"
              />
              <Input
                name="password"
                label="Password"
                handleChange={handleChange}
                type={showPassword ? "text" : "password"}
                handleShowPassword={handleShowPassword}
              />
              {isSignup && (
                <Input
                  name="confirmPassword"
                  label="Repeat Password"
                  handleChange={handleChange}
                  type="password"
                />
              )}
            </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {isSignup ? "Sign Up" : "Sign In"}
            </Button>

            {/* <GoogleLogin
            clientId="60463414922-gu6ir0jtslf0qm3crutpl7el1eg9138p.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button
                className={classes.googleButton}
                color="primary"
                fullWidth
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                startIcon={<Icon />}
                variant="contained"
              >
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          /> */}

            <Grid container justify="flex-end">
              <Grid item>
                <Button onClick={switchMode}>
                  {isSignup
                    ? "Already have an account? Sign in"
                    : "Don't have an account? Sign Up"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Auth;
