import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './modules';
import axios from 'axios';

import { GlobalHotKeys } from 'react-hotkeys';

import './custom.scss';
import { refresh, WeatherData } from './modules/weather';

const store = createStore(rootReducer, composeWithDevTools());

async function autoRefresh() {
  const response = await axios.get('http://code.icicle.moe:8080');
  const weatherData: WeatherData[] = response.data;
  store.dispatch(refresh(weatherData));
}
autoRefresh();
window.setTimeout(autoRefresh, 60000);

const keyMap = {
  NEXT: 'up',
  PREV: 'down',
  TOGGLE_TOOLTIP: 'h',
}

ReactDOM.render(
  <Provider store={store}>
    <GlobalHotKeys keyMap={keyMap}>
      <App />
    </GlobalHotKeys>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
