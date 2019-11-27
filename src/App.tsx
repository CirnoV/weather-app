import React from 'react';
import { connect } from 'react-redux';
import { GlobalHotKeys } from 'react-hotkeys';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import WeatherTableContainer from './containers/WeatherTableContainer';
import TitleContainer from './containers/TitleContainer';
import ForestFireTableContainer from './containers/ForestFireTableContainer';
import PM25TableContainer from './containers/PM25TableContainer';
import { RootState } from './modules';
import { move } from './modules/weather';
import ToolTipContainer from './containers/ToolTipContainer';

interface OwnProps {}
interface StateProps {}
type DispatchProps = typeof mapDispatchToProps;
type AppProps = OwnProps & StateProps & DispatchProps;

const App: React.FC<AppProps> = ({ move }) => {
  const nextWeather = React.useCallback(() => {
    move('next');
  }, [move]);
  const prevWeather = React.useCallback(() => {
    move('prev');
  }, [move]);

  const handlers = {
    NEXT: nextWeather,
    PREV: prevWeather,
  };

  return (
    <div className="App">
      <GlobalHotKeys handlers={handlers}>
        <Container>
          <Row>
            <TitleContainer/>
          </Row>
          <Row>
            <WeatherTableContainer/>
            <ForestFireTableContainer/>
            <PM25TableContainer/>
          </Row>
          <Row>
            <ToolTipContainer/>
          </Row>
        </Container>
      </GlobalHotKeys>
    </div>
  );
}

const mapStateToProps = null;
const mapDispatchToProps = {
  move,
};

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  mapStateToProps,
  mapDispatchToProps,
)(App);
