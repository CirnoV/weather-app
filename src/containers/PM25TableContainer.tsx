import React from 'react';
import { connect } from 'react-redux';
import PM25Table from '../components/PM25Table';
import { RootState } from '../modules';

interface OwnProps {}
interface StateProps {
  uri: string;
  pm10: string | number;
  pm25: string | number;
}
interface DispatchProps {}
type PM25TableContainerProps = OwnProps & StateProps & DispatchProps;

const PM25TableContainer: React.FC<PM25TableContainerProps> = ({
  uri,
  pm10,
  pm25,
}) => {
  return <PM25Table pm10={pm10} pm25={pm25} uri={uri}/>;
}

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  ({ weather: { weather, position } }) => {
    weather = weather.slice(0, position);
    if(weather.length <= 0) {
      return {
        uri: '',
        pm10: 'NULL',
        pm25: 'NULL',
      }
    }
    const {출처, pm10, pm25} = weather[weather.length - 1].미세먼지;
    return {
      uri: 출처,
      pm10,
      pm25,
    }
  }
)(PM25TableContainer);