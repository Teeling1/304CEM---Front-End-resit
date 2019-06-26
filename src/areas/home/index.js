import React, {Component} from 'react';
import { Container, Typography, Grid, Button } from "@material-ui/core";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="homeContent">
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Quiz Maker
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              The Easiest Online Quiz Maker. Publish your quiz in a matter of minutes. Go ahead Try it now!
            </Typography>
            <div className="homeButtons">
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" href="/list">
                    Start Quiz
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </React.Fragment>
    )
  }
}

export default Home;
