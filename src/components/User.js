import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserConsumer from '../context';

class User extends Component {
  state = {
    isVisible: false,
  };
  static defaultProps = {
    name: 'No info',
    salary: 'No info',
    department: 'No info',
  };
  onClickEvent = (e) => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };
  onDeleteEvent = (dispatch, e) => {
    const { id } = this.props;
    //Consumer Dispatch
    dispatch({ type: 'DELETE_USER', payload: id });
  };

  render() {
    // Destructing
    const { name, department, salary } = this.props;
    const { isVisible } = this.state;
    return (
      <UserConsumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="col mb-4">
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h4 onClick={this.onClickEvent} style={{ cursor: 'pointer' }}>
                    {name}
                  </h4>
                  <svg
                    onClick={this.onDeleteEvent.bind(this, dispatch)}
                    style={{ cursor: 'pointer' }}
                    class="bi bi-trash"
                    width="1.3em"
                    height="1.3em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z" />
                    <path
                      fill-rule="evenodd"
                      d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                {isVisible ? (
                  <div className="card-body">
                    <p className="card-text">Departmant : {department}</p>
                    <p className="card-text">Salary : {salary}</p>
                  </div>
                ) : null}
              </div>
            </div>
          );
        }}
      </UserConsumer>
    );
  }
}
User.propTypes = {
  name: PropTypes.string.isRequired,
  salary: PropTypes.string.isRequired,
  department: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default User;
