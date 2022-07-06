import React from 'react';
import Screen from '../screen/screen.component';
import Button from '../buttons/buttons.component';

import './calculator.style.css';

class Calculator extends React.Component {

    
    constructor(props){
        super(props);
    
        this.state = 
              [
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
              ]
    
      }

      render () {
        return (
            <div className='cover-area'>
            <Screen />
            <div class='calculator-grid'>
                { this.state.map(btn => (
               <Button key={btn.text} text={btn.text} type={btn.type} />
            ) )}
            </div>
        </div>
        )


      }

    
}


export default Calculator;