
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import { getDataFromLocalStorage } from './utils';
import Router from './router';

export default class App extends Component{

  async  componentWillMount() {
    const user = await getDataFromLocalStorage('@USER_DATA');
    if (user) {
      console.log(user);
    }
    else{
      console.log("no user");
    }
  }

  render() {
    return (
      <Provider store={store.store}>
        <Router />
      </Provider>
    );
  }
}
