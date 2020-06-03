import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { connect } from 'react-redux';
import { useHistory } from "react-router-dom";

import * as actions from '../../redux/actions/index';

import axios from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        BlueBox Ecommerce
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function signin(email, password, onLogin) {
  var bodyFormData = new FormData();

  bodyFormData.set("grant_type", "password");
  bodyFormData.append("client_id", "live-test");
  bodyFormData.append("username", email);
  bodyFormData.append("password", password);
  bodyFormData.append("client_secret", "abcde");

  axios
    .post("/oauth/token", bodyFormData)
    .then((response) => {
      onLogin(response.data.access_token);
      return true;
    })
    .catch(function (error) {
      console.log("Error Cought");
      if (error.response) {
        alert(error.response.data.error_description);
      } else if (error.request) {
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
      }
      return false;
    });
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login= (props)=> {
  const history = useHistory();
  const [credentials, setCredentials] = useState({});
  const classes = useStyles();

  const onChangeHandler = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const buttonOnClickHandler = (e) => {
    e.preventDefault();

    if (credentials.email === undefined || credentials.password === undefined) {
      return console.log("nothing entered");
    }
  
    // props.onLogin(1234);

    let success = signin(credentials.email, credentials.password, props.onLogin);
    if(success){
      history.push("/");}
      else{
        setCredentials({
          ...credentials,
          password: "",
        });
      }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={onChangeHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={onChangeHandler}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={buttonOnClickHandler}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="forgotpassword" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
  }

  const mapDispatchToProps = dispatch => {
    return{
        onLogin: (access_token) => dispatch(actions.loginSuccess(access_token))
    }
}

export default connect(null,mapDispatchToProps)(Login);
