import { combineReducers } from 'redux';
import weather, { WeatherState } from './weather';
import toolTip, { toolTipState } from './toolTip';

export type RootState = {
  weather: WeatherState;
  toolTip: toolTipState;
}

const rootReducer = combineReducers({
  weather,
  toolTip,
});

export default rootReducer;