import React from 'react';
import { connect } from 'react-redux';
import WeatherTable, { WeatherTableData } from '../components/WeatherTable';
import { RootState } from '../modules';
import { parseAWSData } from '../utils/aws';
import { getDateFromTimestamp } from '../utils/common';

interface OwnProps {}
interface StateProps {
  tableData: WeatherTableData;
  visiable: boolean;
}
interface DispatchProps {}
type WeatherTableContainerProps = OwnProps & StateProps & DispatchProps;

const WeatherTableContainer: React.FC<WeatherTableContainerProps> = ({
  tableData,
  visiable
}) => {
  return (visiable ? <WeatherTable tableData={tableData}/> : <div/>);
}

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  ({ weather: { weather, position }}) => {
    weather = weather.slice(0, position);
    if(weather.length <= 0) {
      return {
        visiable: false,
        tableData: [],
      }
    }
    const curWeather = weather[weather.length - 1];
    return {
      visiable: true,
      tableData: parseAWSData(
        curWeather.AWS,
        weather
          .filter(w => getDateFromTimestamp(w.집계시각) === getDateFromTimestamp(curWeather.집계시각))
          .map(w => w.AWS),
      ),
    }
  }
)(WeatherTableContainer);