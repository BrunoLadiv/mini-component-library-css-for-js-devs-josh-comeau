import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  ...rest
}) => {
  return (
    <Wrapper>
      <IconWrapper>
        <Icon id={icon}/>
      </IconWrapper>
      
      <StyleInput {...rest} type="text" />
      <VisuallyHidden>{label}</VisuallyHidden>
    </Wrapper>
  );
};

const IconWrapper = styled.div`
  position: absolute;
`
const Wrapper = styled.label`
  position: relative;

`
const StyleInput = styled.input`
  height: 1.6rem;
  border: none;
  border-bottom: 1px solid black;
  padding-left: 29px;
  color: ${COLORS.gray700};
  font-weight: 700;
  outline-offset: 3px;
  &::placeholder{
    color: ${COLORS.gray500};
    font-weight: 400;
  }
  `

export default IconInput;
