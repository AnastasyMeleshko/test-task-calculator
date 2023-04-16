import CalculatorStyles from "./CalculatorStyles.css";
import Display from "./Display/Display";
import Keypad from "./Keypad/Keypad";
import History from "./History/History";

const Calculator = () => {
    return (
      <>
          <Display/>
          <Keypad/>
          <History/>
      </>
    )
}

export default Calculator;
