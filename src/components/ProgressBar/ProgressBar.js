/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    height: '8px',
    padding: 0,
    borderRadius: '4px',
  },
  medium: { 
    height: '12px',
    padding: 0,
    borderRadius: '4px'
  },
  large: {
    height: '16px',
    padding: '4px',
    borderRadius: '8px',
  }
}

const StyledProgressBar = styled.progress`
  apperance: none;

  &[value] {
  width: 370px;
  height: ${p => SIZES[p.size].height};
  padding: ${p => SIZES[p.size].padding};
    
  ::-webkit-progress-bar {
    background-color: ${COLORS.transparentGray15};
    border-radius: ${p => SIZES[p.size].borderRadius};
  }

  ::-webkit-progress-value {
    background-color: ${COLORS.primary};
  }

  `;
const ProgressBar = ({ value, size,max }) => {
  return (
    <StyledProgressBar max={max} size={size} value={value}>{value}</StyledProgressBar>
 );
};

export default ProgressBar;
