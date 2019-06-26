import React, {Component} from 'react';
import MaterialTable from 'material-table';

class ManageAnswers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: 'Id', field: 'id' },
        { title: 'Question Id', field: 'question_id'},
        { title: 'Answer', field: 'answer' },
        { title: 'Created at', field: 'createdAt' },
      ],
      data: [
      ]
    }
  }

  loadAnswers = async () => {
    const response = await fetch('http://localhost:3005/answers');
    const body = await response.json();
    console.log(body);
    if (response.status !== 200) {
      throw Error(body.message)
    }
    return body;
  };

  deleteAnswer = async (id) => {
    const response = await fetch(`http://localhost:3005/answers/${id}`, {
      method: 'DELETE'
    });
    if (response.status !== 202) {
      throw Error('Failed to delete answer')
    }
    return true;
  };

  createAnswer = async (questionId, answer) => {
    const response = await fetch(`http://localhost:3005/questions/${questionId}/answers`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        answer: answer
      })
    });
    if (response.status !== 201) {
      throw Error('Failed to create answer')
    }
  };

  render () {
    return (
      <React.Fragment>
        <div className="questionsTable">
          <MaterialTable
            title="Manage quiz answers"
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
                      this.createAnswer(newData.question_id, newData.answer).then(d => console.log(d))
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
                      this.deleteAnswer(oldData.id).then(d => console.log(d));
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
    this.loadAnswers()
      .then(res => this.setState({data: res}));
  }
}

export default ManageAnswers;
