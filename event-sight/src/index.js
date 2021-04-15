import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from "redux-thunk";

//importing reducers
import userReducer from "./store/reducers/userReducer";
import EventReducer from "./store/reducers/eventReducer";
import OCReducer from "./store/reducers/OCreducer";


const rootReducer = combineReducers({
  user : userReducer,
  event : EventReducer,
  OC : OCReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
    </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);

