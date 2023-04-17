import Display from "./Display/Display";
import Keypad from "./Keypad/Keypad";
import History from "./History/History";
import ControlPanel from "./ControlPanel/ControlPanel";
import {StyledFirstColumn, StyledWrapper, StyledSecondColumn} from "./styled";

const Calculator = () => {
    return (
      <StyledWrapper>
          <StyledFirstColumn>
              <Display/>
              <Keypad/>
          </StyledFirstColumn>
          <StyledSecondColumn>
              <ControlPanel/>
              <History/>
          </StyledSecondColumn>
      </StyledWrapper>
    )
}

export default Calculator;
