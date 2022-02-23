import React from "react";
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

import useStyles from "./styles";
import Input from "./input";

export const Auth = () => {
  const isSignup = true;
  const showPassword = true;
  const classes = useStyles();
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
          <form className={classes.form}>
            <Grid container spacing={2}>
              {isSignup && (
                <>
                  <Input name="firstName" label="First Name" autoFocus half />
                  <Input name="lastName" label="Last Name" half />
                </>
              )}
              <Input name="email" label="Email Address" type="email" />
              <Input
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
              />
              {isSignup && (
                <Input
                  name="confirmPassword"
                  label="Repeat Password"
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

            <Grid container justify="flex-end">
              <Grid item>
                <Button>
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
