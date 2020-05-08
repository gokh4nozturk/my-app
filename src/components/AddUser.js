import React, { Component } from 'react';
import posed from 'react-pose';

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
  };
  changeVisibility = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };
  render() {
    const { isVisible } = this.state;
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
              <form>
                <div className="form-group">
                  <label htmlFor="kName">Name</label>
                  <input
                    type="text"
                    name="kName"
                    id="kName"
                    placeholder="Severus Snipe"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="kSalary">Salary</label>
                  <input
                    type="text"
                    name="kSalary"
                    id="kSalary"
                    placeholder="Money Money"
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="kDepartment">Department</label>
                  <input
                    type="text"
                    name="kDepartment"
                    id="kDepartment"
                    placeholder="Enter Department"
                    className="form-control"
                  />
                </div>
                <button className="btn btn-danger btn-block" type="submit">
                  Add User
                </button>
              </form>
            </div>
          </div>
        </Animation>
      </div>
    );
  }
}
export default AddUser;
