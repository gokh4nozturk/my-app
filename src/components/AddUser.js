import React, { Component } from 'react';

class AddUser extends Component {
  render() {
    return (
      <div className="col mb-4">
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
      </div>
    );
  }
}
export default AddUser;
