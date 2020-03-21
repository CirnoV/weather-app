import {
  createReducer,
  createAction,
  ActionType,
} from 'typesafe-actions';

import { AWS } from '../utils/aws';
import { updateKey } from '../utils/common';

const UPDATE = 'weather/UPDATE';
const REFRESH = 'weather/REFRESH';
const MOVE = 'weather/MOVE';

export interface WeatherData {
  집계시각: number;
  AWS: AWS[];
  산불지수: {
    출처: string;
    현재산불지수: number;
  };
  미세먼지: {
    출처: string;
    pm10: string | number;
    pm25: string | number;
  };
}

export interface WeatherState {
  position: number;
  weather: WeatherData[];
};

export type WeatherMoveType = 'next' | 'prev';

export const update = createAction(UPDATE)<WeatherData>();
export const refresh = createAction(REFRESH)<WeatherData[]>();
export const move = createAction(MOVE)<WeatherMoveType>();

const weatherActions = {
  update,
  refresh,
  move,
}

const initialState: WeatherState = {
  position: 1,
  weather: [{
    AWS: [],
    집계시각: 0,
    산불지수: {
      출처: '',
      현재산불지수: 0,
    },
    미세먼지: {
      출처: '',
      pm10: 'NULL',
      pm25: 'NULL',
    }
  }],
};

type RootAction = ActionType<typeof weatherActions>;

const weather = createReducer<WeatherState, RootAction>(initialState, {
  [UPDATE]: (state, action) => {
    return { 
      weather: [...state.weather, action.payload],
      position: state.position + 1
    };
  },
  [REFRESH]: (state, action) => {
    const { weather: oldWeather } = state;
    const { payload: newWeather } = action;
    if (newWeather.length <= 0) return state;
    const oldDate = new Date(oldWeather[oldWeather.length - 1].집계시각);
    const newDate = new Date(newWeather[newWeather.length - 1].집계시각);
    // 시간대가 바뀌었을 때만 position 초기화
    if (oldDate.getDate() !== newDate.getDate() || oldDate.getHours() !== newDate.getHours()) {
      return {
        ...state,
        weather: newWeather,
        position: newWeather.length
      };
    }
    return {
      ...state,
      weather: newWeather,
    };
  },
  [MOVE]: (state, action) => {
    let position = state.position;
    if (action.payload === 'next') {
      position = position + 1;
    } else {
      position = position - 1;
    }
    if (position < 1) {
      position = 1;
    }
    if (position > state.weather.length) {
      position = state.weather.length;
    }
    return updateKey(state, 'position', position);
  }
});

export default weather;