// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {BrowserRouter} from 'react-router-dom';

// ReactDOM.render(
//   // <React.StrictMode>
//     <BrowserRouter><App /></BrowserRouter>,document.getElementById('root')
//   // </React.StrictMode>

// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// import { Store } from './redux/Store';

// ReactDOM.render(
//   <Provider store={Store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
// registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux";
import NotlarReducer from "./NotlarReducer";
import ProfilReducer from './ProfilReducer';
import 'alertifyjs/build/css/alertify.min.css'
import { BrowserRouter } from 'react-router-dom'

const store = createStore(NotlarReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

