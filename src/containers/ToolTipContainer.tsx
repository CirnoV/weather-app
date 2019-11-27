import React from 'react';
import { connect } from 'react-redux';
import { GlobalHotKeys } from 'react-hotkeys';
import ToolTip, { CodeArea } from '../components/ToolTip';
import { RootState } from '../modules';
import { toggle } from '../modules/toolTip';

interface OwnProps {}
type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;
type ToolTipContainerProps = OwnProps & StateProps & DispatchProps;

const ToolTipContainer: React.FC<ToolTipContainerProps> = ({
  toggle,
  hide,
}) => {
  const toggleToolTip = React.useCallback(
    () => toggle(),
    [toggle],
  );

  const handlers = {
    TOGGLE_TOOLTIP: toggleToolTip,
  }
  return (
    <GlobalHotKeys handlers={handlers}>
      {!hide && <>
        {/* <ToolTip>
         현재 작업중. 간헐적으로 오류가 뜰 수 있으니 주의
        </ToolTip> */}
        <ToolTip>
          <CodeArea>
            up / down
          </CodeArea>
          {" 방향키로 상황판 시간대를 이동할 수 이따"}
        </ToolTip>
        <ToolTip>
          {"강우량 미완성. 어떻게 종합하면 좋을지 말해줘"}
        </ToolTip>
        <ToolTip>
          {"습도도 엑셀 함수 돌려서 나오는걸로 알고있는데 확실하지 않아서 안지우고 놔뒀다"}
        </ToolTip>
        <ToolTip>
          {"풍향 / 풍속은 딱 집계했을때 기준이라서 바람 불고 있다가 갑자기 안부는걸로 집계되면 그대로 반영되니 주의. "}
          {"이대로 괜찮으면 상관없지만 집계했을 때 시점에서 몇 분 전까지 바람 관측 있으면 그걸로 나오게 만들수도 있어"}
        </ToolTip>
        <ToolTip>
          {"써보고 버그 제보나 기타 추가해줬으면 하는 기능 있으면 부담없이 말해줘"}
        </ToolTip>
        <ToolTip>
          {"마지막으로 이 글들을 숨기거나 다시 보고싶으면 "}
          <CodeArea>
            h
          </CodeArea>
          {" 를 누르도록"}
        </ToolTip>
      </>}
    </GlobalHotKeys>
  );
};

const mapStateToProps = (state: RootState) => ({
  hide: state.toolTip.hide,
});
const mapDispatchToProps = {
  toggle,
};

export default connect<StateProps, DispatchProps, OwnProps, RootState>(
  mapStateToProps,
  mapDispatchToProps,
)(ToolTipContainer);