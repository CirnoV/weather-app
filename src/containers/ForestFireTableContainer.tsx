import React from 'react';
import { connect } from 'react-redux';
import ForestFireTable from '../components/ForestFireTable';
import { RootState } from '../modules';

interface OwnProps {}
interface StateProps {
  uri: string;
  forestFire: number;
}
interface DispatchProps {}
type ForestFireTableContainerProps = OwnProps & StateProps & DispatchProps;

const ForestFireTableContainer: React.FC<ForestFireTableContainerProps> = ({
  uri,
  forestFire
}) => {
  return <ForestFireTable forestFire={forestFire} uri={uri}/>;
}

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  ({ weather: { weather, position } }) => {
    weather = weather.slice(0, position);
    if(weather.length <= 0) {
      return {
        uri: '',
        forestFire: 0,
      }
    }
    const {출처, 현재산불지수} = weather[weather.length - 1].산불지수;
    return {
      uri: 출처,
      forestFire: 현재산불지수,
    }
  }
)(ForestFireTableContainer);