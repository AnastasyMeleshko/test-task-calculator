import Display from "./Display/Display";
import Keypad from "./Keypad/Keypad";
import History from "./History/History";
import ControlPanel from "./ControlPanel/ControlPanel";
import {StyledWrapper} from "./styled";
import {useState} from "react";

const Calculator = ({currentOperand, operation, previousOperand, dispatch}) => {

    const [isHistoryShown, setIsHistoryShown] = useState(false);

    return (
        <StyledWrapper>
            <Display currentOperand={currentOperand}/>
            <ControlPanel isHistoryShown={isHistoryShown} setIsHistoryShown={setIsHistoryShown}/>
            <Keypad dispatch={dispatch}/>
            {
                isHistoryShown ? <History previousOperand={previousOperand} operation={operation} currentOperand={currentOperand}/> : ""
            }
        </StyledWrapper>
    )
}

export default Calculator;
