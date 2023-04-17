import styled from 'styled-components';

export const StyledControlPanel = styled.div`
  height: 94px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #000;
`;

export const StyledControllerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;


export const StyledShowHistoryLabel = styled.p`
  font-size: 1.2rem;
`;

export const ShowHistorySwitcher = styled.label`
  display: inline-block;
  width: 60px;
  height: 20px;
  margin: 4px;
  transform: translateY(50%);
  position: relative;

  & input {
    display: none;
  }

  & input:checked + .slider:before {
    transform: translateX(10px);
    background-color: limeGreen;
  }

  & input:checked + .slider {
    box-shadow: 0 0 0 2px limeGreen, 0 0 8px limeGreen;
  }

`;

export const StyledSlider = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  border-radius: 30px;
  box-shadow: 0 0 0 2px #d93c3c, 0 0 4px #d93c3c;
  cursor: pointer;
  border: 4px solid transparent;
  overflow: hidden;
  transition: 0.2s;

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background-color: #d93c3c;
    border-radius: 30px;
    transform: translateX(-66px);
    transition: 0.2s;
  }
`;
