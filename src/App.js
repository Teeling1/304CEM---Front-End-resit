import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav';
import Home from './areas/home';
import Login from './areas/login';
import ListQuizzes from './areas/listQuizzes';
import ManageQuestions from './areas/manageQuestions';
import ManageAnswers from './areas/manageAnswers';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Typography } from "@material-ui/core";

class App extends Component {
  constructor(props) {
    super(props);
  }
  routes() {
    return (
      <React.Fragment>
        <Route path="/" exact render={() => <Home/>}/>
        <Route path="/login" exact render={() => <Login/>}/>
        <Route path="/list" exact render={() => <ListQuizzes/>}/>
        <Route path="/manage-questions" exact render={() => <ManageQuestions/>}/>
        <Route path="/manage-answers" exact render={() => <ManageAnswers/>}/>
      </React.Fragment>
    );
  }
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <main>
            {this.routes()}
          </main>
          <footer className="footer">
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              <a href="">Feedback</a>
            </Typography>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
              Quiz Maker by Zack Teeling
            </Typography>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
