import {
    StyledControlPanel,
    StyledControllerWrapper,
    StyledShowHistoryLabel,
    ShowHistorySwitcher,
    StyledSlider
} from "./styled";

const ControlPanel = ({isHistoryShown, setIsHistoryShown}) => {

    function handleClick() {
        isHistoryShown ? setIsHistoryShown(false) : setIsHistoryShown(true);
        console.log(isHistoryShown)
    }

    return (
      <StyledControlPanel>
          <StyledControllerWrapper>
              <StyledShowHistoryLabel>Show history?</StyledShowHistoryLabel>
              <ShowHistorySwitcher className="switch">
                  <input type="checkbox"/>
                      <StyledSlider
                          onClick={() => handleClick()}
                          className="slider">
                      </StyledSlider>
              </ShowHistorySwitcher>
          </StyledControllerWrapper>
      </StyledControlPanel>
    )
}

export default ControlPanel;
