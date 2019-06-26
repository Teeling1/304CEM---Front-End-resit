import React, {Component} from 'react';
import { TextField, Typography, Grid, Button, Link } from "@material-ui/core";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="login-div">
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className="login-form" noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus
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
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit-button"
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  Sign Up for Quiz Maker
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

export default Login;
