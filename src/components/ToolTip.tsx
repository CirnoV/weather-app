import React from 'react';
import styled from 'styled-components';

const Root = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding-left: 2px;
  color: inherit;
  fill: inherit;
`;

const BulletContainer = styled.div`
  margin-right: 4px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 0;
  flex-shrink: 0;
  min-height: calc((1.5em + 3px) + 3px);
  padding-right: 2px;
`;

const Bullet = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 6px;
  background: currentcolor;
  margin-top: 0.1em;
`;

const TextContainer = styled.div`
  flex: 1 1 0px;
  min-width: 1px;
  display: flex;
  flex-direction: column;
`;

const Flex = styled.div`
  display: flex;
`;

const TextArea = styled.div`
  max-width: 100%;
  width: 100%;
  white-space: pre-wrap;
  word-break: break-word;
  caret-color: rgb(55, 53, 47);
  padding-top: 3px;
  padding-bottom: 3px;
  text-align: left;
`;

export const CodeArea = styled.span`
  font-family:'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
  line-height:normal;
  background:rgba(135,131,120,0.15);
  color:#EB5757;
  border-radius:3px;
  font-size:85%;
  padding:0.2em 0.4em;
`;

const ToolTip: React.FC = ({ children }) => (
  <Root>
    <BulletContainer>
      <Bullet/>
    </BulletContainer>
    <TextContainer>
      <Flex>
        <TextArea>
          {children}
        </TextArea>
      </Flex>
    </TextContainer>
  </Root>
);

export default ToolTip;