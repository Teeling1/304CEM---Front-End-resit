import React from 'react'
import { AppBar, Toolbar, Typography, Link, Button } from "@material-ui/core";

class Nav extends React.Component {
  render() {
    return (
      <AppBar position="static" color="default" elevation={0}>
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            <Link href="/"> Quiz Maker </Link>
          </Typography>
          <nav>
            <Link href="/list" variant="button" color="textPrimary" className="links">
              List of Quizzes
            </Link>
            <Link variant="button" color="textPrimary" href="/manage-questions" className="links">
              Manage Questions
            </Link>
            <Link variant="button" color="textPrimary" href="/manage-answers" className="links">
              Manage Answers
            </Link>
          </nav>
          <Button href="login" color="primary" variant="outlined">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    )
  }
}


export default Nav;
