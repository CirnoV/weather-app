import React from 'react';
import { connect } from 'react-redux';
import Title from '../components/Title';
import { RootState } from '../modules';

interface OwnProps {}
interface StateProps {
  date: Date;
}
interface DispatchProps {}
type TitleContainerProps = OwnProps & StateProps & DispatchProps;

const TitleContainer: React.FC<TitleContainerProps> = ({
  date
}) => {
  return <Title>{date.toString()}</Title>;
}

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  ({ weather: { weather, position } }) => {
    weather = weather.slice(0, position);
    if (weather.length <= 0) {
      return {
        date: new Date(),
      };
    }
    
    return {
      date: new Date(weather[weather.length - 1].집계시각),
    }
  }
)(TitleContainer);