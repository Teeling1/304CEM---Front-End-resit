import React, {Component} from 'react';
import MaterialTable from 'material-table';


class ManageQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Id', field: 'id' },
        { title: 'Quiz Id', field: 'quiz_id'},
        { title: 'Question', field: 'question' },
        { title: 'Question description', field: 'question_desc' },
        { title: 'Created at', field: 'createdAt' },
      ],
      data: [
      ]
    }
  }

  loadQuestions = async () => {
    const response = await fetch('http://localhost:3005/questions');
    const body = await response.json();
    console.log(body);
    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  deleteQuestion = async (id) => {
    const response = await fetch(`http://localhost:3005/questions/${id}`, {
      method: 'DELETE'
    });
    if (response.status !== 202) {
      throw Error('Failed to delete question')
    }
    return true;
  };

  createQuestion = async (quizId, question, description) => {
    const response = await fetch(`http://localhost:3005/quizzes/${quizId}/questions`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        question: question,
        description: description,
      })
    });
    if (response.status !== 201) {
      throw Error('Failed to create question')
    }
  };

  render () {
    return (
      <React.Fragment>
        <div className="questionsTable">
          <MaterialTable
            title="Manage quiz questions"
            columns={this.state.columns}
            data={this.state.data}
            editable={{
              onRowAdd: newData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      const data = this.state.data;
                      data.push(newData);
                      this.setState({ data }, () => resolve());
                      this.createQuestion(newData.quiz_id, newData.question, newData.question_desc).then(d => console.log(d))
                    }
                    resolve()
                  }, 1000)
                }),
              onRowUpdate: (newData, oldData) =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      const data = this.state.data;
                      const index = data.indexOf(oldData);
                      data[index] = newData;
                      this.setState({ data }, () => resolve());
                    }
                    resolve()
                  }, 1000)
                }),
              onRowDelete: oldData =>
                new Promise((resolve, reject) => {
                  setTimeout(() => {
                    {
                      let data = this.state.data;
                      const index = data.indexOf(oldData);
                      data.splice(index, 1);
                      this.setState({ data }, () => resolve());
                      this.deleteQuestion(oldData.id).then(d => console.log(d));
                    }
                    resolve()
                  }, 1000)
                }),
            }}
          />
        </div>
      </React.Fragment>
    )
  }
  componentDidMount() {
    this.loadQuestions()
      .then(res => this.setState({data: res}));
  }
}

export default ManageQuestions;
