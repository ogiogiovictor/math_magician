import React from 'react';
import Screen from '../screen/screen.component';
import Button from '../buttons/buttons.component';
import calculate from '../logic/calculate';

import './calculator.style.css';

class Calculator extends React.Component {


    constructor(props) {
        super(props);


        this.state = {
            total: null,
            next: null,
            operation: null,
        };

    }

    showContent = (content) => {
        this.setState(() => ({ next: content }));
      }


    act = (operation) => {
        console.log(operation)
        this.setState((state) => (calculate(state, operation)));
      }

    render() {
        const { next, total, operation } = this.state;
        
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
            <div className='cover-area'>
                <Screen info={next || total || '0'} opr={operation} tx={total} onChange={(e) => this.showContent(e.target.value)} />

                <div class='calculator-grid'>
                    {button.map(btn => (
                        <Button key={btn.text} text={btn.text} type={btn.type} act={this.act} />
                    ))}
                </div>
            </div>
        )


    }


}


export default Calculator;