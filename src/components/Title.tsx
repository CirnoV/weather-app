import React from 'react';
import styled from 'styled-components';

const StyledH4 = styled.h4`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
`;

const Title: React.FC = ({ children }) => (
  <StyledH4>{children}</StyledH4>
)

export default Title;