import React, { Component } from 'react';

const UserContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter((user) => action.payload !== user.id),
      };

    default:
      return state;
  }
};

export class UserProvider extends Component {
  state = {
    users: [
      {
        id: 1,
        name: 'Gökhan Öztürk',
        salary: '6000',
        department: 'Bilişim',
      },
      {
        id: 2,
        name: 'Yakup Öztürk',
        salary: '7000',
        department: 'Pazarlama',
      },
      {
        id: 3,
        name: 'Halime Öztürk',
        salary: '8000',
        department: 'İnsan Kaynakları',
      },
      {
        id: 4,
        name: 'Fadime Öztürk',
        salary: '8000',
        department: 'İnsan Kaynakları',
      },
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
const UserConsumer = UserContext.Consumer;

export default UserConsumer;
