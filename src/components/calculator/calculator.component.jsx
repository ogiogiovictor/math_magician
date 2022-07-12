import React, { useState, Fragment } from 'react';
import Screen from '../screen/screen.component';
import Button from '../buttons/buttons.';
import calculate from '../logic/calculate';

import './calculator.style.css';


const Calculator = () => {

    const [state, setState] = useState({total: null, next: null, operation: null});

    const showContent = (content) => {
        setState(() => ({ next: content}));
      }


   const act = (opr) => {
       // console.log(operation)
        setState((state) => (calculate(state, opr)));
      }

      const button = [
        { text: 'AC', type: 'normal' },
        { text: '+/-', type: 'normal' },
        { text: '%', type: 'normal' },
        { text: '÷', type: 'orange' },
        { text: '7', type: 'normal' },
        { text: '8', type: 'normal' },
        { text: '9', type: 'normal' },
        { text: 'x', type: 'orange' },
        { text: '4', type: 'normal' },
        { text: '5', type: 'normal' },
        { text: '6', type: 'normal' },
        { text: '-', type: 'orange' },
        { text: '1', type: 'normal' },
        { text: '2', type: 'normal' },
        { text: '3', type: 'normal' },
        { text: '+', type: 'orange' },
        { text: '0', type: 'normal double' },
        { text: '.', type: 'normal' },
        { text: '=', type: 'orange' }
    ];

        return (
            <Fragment>
            <div className='letsCalculate'>Lets do some calculations</div>
            <div className='cover-area'>
                <Screen info={state.next || state.operation || state.total  } onChange={(e) => showContent(e.target.value)} />

                <div class='calculator-grid'>
                    {button.map(btn => (
                        <Button key={btn.text} text={btn.text} type={btn.type} act={act} />
                    ))}
                </div>
            </div>
            </Fragment>
        )


}


export default Calculator;