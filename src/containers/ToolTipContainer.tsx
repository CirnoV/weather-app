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
          {"써보고 버그 제보나 기타 추가해줬으면 하는 기능 있으면 부담없이 말해줘"}
        </ToolTip>
        <ToolTip>
          {"원통 습도 데이터 추가 "}
          <CodeArea>
            (동네예보 - 인제군 북면 데이터)
          </CodeArea>
        </ToolTip>
        <ToolTip>
          해안 AWS 데이터 추가
        </ToolTip>
        <ToolTip>
          {"수동 데이터 추가 "}
          <CodeArea>
            (동네예보 - 고성군 수동면 데이터)
          </CodeArea>
        </ToolTip>
        <ToolTip>
          강우 식별용 아이콘은 AWS에서 제공하는 데이터가 불규칙적이라서 어떻게 만들면 좋을지 조금 더 정확하게 할 필요가 있을 것 같다.
        </ToolTip>
        <ToolTip>
          {"시간 강우량이 추가되었습니다. 잘 작동하는지는 비가 와봐야 알기 때문에 나중에 꼭 말해주기 바람"}
        </ToolTip>
        <ToolTip>
          {"이 글들을 숨기거나 다시 보고싶으면 "}
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