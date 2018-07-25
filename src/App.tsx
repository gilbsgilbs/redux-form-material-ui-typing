import * as React from 'react';
import {Provider} from 'react-redux';
import * as Redux from 'redux';
import {reducer as formReducer} from 'redux-form';

import './App.css';
import Form from './Form';

import logo from './logo.svg';

const reducer = Redux.combineReducers({
  form: formReducer,
});

class App extends React.Component {
  private store: Redux.Store = Redux.createStore(reducer, {});

  public render() {
    return (
      <Provider store={this.store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
              <Form />
          </p>
        </div>
      </Provider>
    );
  }
}

export default App;
