import React, {Component} from 'react';
import { Typography, Grid, Button, Card, CardMedia, CardContent, CardActions } from "@material-ui/core";

class ListQuizzes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quizzes: []
    };
  }

  loadQuizzes = async () => {
    const response = await fetch('http://localhost:3005/quizzes');
    const body = await response.json();
    console.log(body);
    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  render() {
    const quizzes = this.state.quizzes.map(quiz => (
      <Grid item key={quiz} xs={12} sm={6} md={4}>
        <Card className="card">
          <CardMedia
            className="cardMedia"
            image="https://source.unsplash.com/random"
            title="Image title"
          />
          <CardContent className="cardContent">
            <Typography gutterBottom variant="h5" component="h2">
              {quiz.title}
            </Typography>
            <Typography>
              Description: {quiz.description}
            </Typography>
            <Typography>
              Type: {quiz.type}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              Start quiz
            </Button>
          </CardActions>
        </Card>
      </Grid>
    ));
    return (
      <React.Fragment>
        <div className="homeContent">
          <Grid container spacing={4}>
            {quizzes}
          </Grid>
        </div>
      </React.Fragment>
    )
  }

  componentDidMount() {
    this.loadQuizzes()
      .then(res => this.setState({quizzes: res}));
  }
}

export default ListQuizzes;
