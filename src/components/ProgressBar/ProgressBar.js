/* eslint-disable no-unused-vars */
import React from 'react'
import styled from 'styled-components'

import { COLORS } from '../../constants'
import VisuallyHidden from '../VisuallyHidden'

const ProgressBar = ({ value, size }) => {
  return (
    <Wrapper
      size={size}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <BarWrapper>
        <Bar value={value} size={size} />
      </BarWrapper>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  )
}

const SIZES = {
  small: {
    height: '8px',
  },
  medium: {
    height: '12px',
  },
  large: {
    height: '24px',
  },
}

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  width: 370px;
  border-radius: ${({ size }) => (size === 'large' ? '8px' : '4px')};
  overflow: hidden;
  padding: ${({ size }) => (size === 'large' ? '4px' : '0px')};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`
const Bar = styled.div`
  background-color: ${COLORS.primary};
  height: ${({ size }) => SIZES[size].height};
  width: ${({ value }) => value + '%'};
`

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
`

export default ProgressBar
