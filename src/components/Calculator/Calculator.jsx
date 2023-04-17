import Display from "./Display/Display";
import Keypad from "./Keypad/Keypad";
import History from "./History/History";
import ControlPanel from "./ControlPanel/ControlPanel";
import {StyledWrapper} from "./styled";
import {useState} from "react";

const Calculator = () => {

    const [isHistoryShown, setIsHistoryShown] = useState(false);

    return (
        <StyledWrapper>
            <Display/>
            <ControlPanel isHistoryShown={isHistoryShown} setIsHistoryShown={setIsHistoryShown}/>
            <Keypad/>
            {
                isHistoryShown ? <History/> : ""
            }
        </StyledWrapper>
    )
}

export default Calculator;
