import React, { Component } from 'react';
import posed from 'react-pose';
import UserConsumer from '../context';
var uniqid = require('uniqid');
const Animation = posed.div({
  visible: {
    opacity: 1,
    applyAtStart: {
      display: 'block',
    },
  },
  hidden: {
    opacity: 0,
    applyAtEnd: {
      display: 'none',
    },
  },
});
class AddUser extends Component {
  state = {
    isVisible: false,
    name: '',
    department: '',
    salary: '',
  };

  changeVisibility = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };
  changeInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addUser = (dispatch, e) => {
    e.preventDefault();
    const { name, department, salary } = this.state;
    const newUser = {
      id: uniqid(),
      name,
      salary,
      department,
    };
    dispatch({ type: 'ADD_USER', payload: newUser });
  };
  render() {
    const { isVisible, name, department, salary } = this.state;
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col mb-4">
              <button
                onClick={this.changeVisibility}
                className="btn btn-dark btn-block mb-4"
              >
                {isVisible ? 'Hide Add User Form' : 'Show Add User Form'}
              </button>
              <Animation pose={isVisible ? 'visible' : 'hidden'}>
                <div className="card">
                  <div className="card-header">
                    <h4>Add User Form</h4>
                  </div>
                  <div className="card-body">
                    <form onSubmit={this.addUser.bind(this, dispatch)}>
                      <div className="form-group">
                        <label htmlFor="kName">Name</label>
                        <input
                          type="text"
                          name="name"
                          id="kName"
                          placeholder="Severus Snipe"
                          className="form-control"
                          value={name}
                          onChange={this.changeInput}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="kSalary">Salary</label>
                        <input
                          type="text"
                          name="salary"
                          id="salary"
                          placeholder="Money Money"
                          className="form-control"
                          value={salary}
                          onChange={this.changeInput}
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="kDepartment">Department</label>
                        <input
                          type="text"
                          name="department"
                          id="kDepartment"
                          placeholder="Enter Department"
                          className="form-control"
                          value={department}
                          onChange={this.changeInput}
                        />
                      </div>
                      <button
                        className="btn btn-danger btn-block"
                        type="submit"
                      >
                        Add User
                      </button>
                    </form>
                  </div>
                </div>
              </Animation>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
export default AddUser;
