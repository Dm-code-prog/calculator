import React from 'react';
import CGrid from '../themes/Calculator.styled';
import {Ctx} from '../App'

function Calculator(props) {
    const [result, setResult] = React.useContext(Ctx)
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7' ,'.', '8', '9']
    const operators = ['+', '-', 'x', '÷']

    function round(num){
        if (num.Length > 8){
            return num.slice(0, 8)
        } return num
    }

    function HandleClick(event){

        const value = event.target.value;
        const firstValue = result[0][0]
        const operator = result[0][1]
        const secondValue = result[0][2]


        let currentValue;
        let currentIndex = 0;

        if (numbers.includes(value)){
           if (operator === null){
               firstValue === null || firstValue.endsWith('_old')? currentValue="":currentValue=firstValue;
                currentIndex = 0
           } else {
                secondValue === null? currentValue="":currentValue=secondValue
                currentIndex = 2
              }
            currentValue.Length > 8? currentValue = currentValue.slice(0, 8): currentValue = currentValue
            const array = [...result[0]];
            let finalString = `${currentValue}${value}`
            finalString.length > 8? finalString = finalString.slice(0, 8): finalString = finalString

            if (currentValue.length < 1 && value === '.'){
                array[currentIndex] = '0.'
            } else {
                array[currentIndex] = finalString
            }

            setResult([array, array[currentIndex]])
        }

        if (operators.includes(value)){
            if (firstValue !== null){
                if (firstValue.endsWith('_old')){
                    const firstValueMutated = firstValue.split('_')[0]
                    setResult([[firstValueMutated, value, null], firstValueMutated])
                } else {
                setResult([[firstValue, value, secondValue], firstValue])
                }
            }
        }
        if (value === '='){
            let r = 0
            const intFirst = parseFloat(firstValue)
            const intSecond = parseFloat(secondValue)
        switch (operator){
            case '+': r = intFirst + intSecond
                break;
            case '-': r = intFirst - intSecond
                break;
            case 'x': r = intFirst * intSecond
                break;
            case '÷': r = intFirst / intSecond
                break;
        }
        r = r.toString();
        const rMutated = r.length > 8? r.slice(0,8): r;
            setResult([[`${r}_old`, null, null],rMutated])
        }
        if (value === 'AC'){
            setResult([[null, null, null], 0])
        }
}

    return (
        <CGrid>
            <div className="container">
        <div className="h1container">
            <h1>{result[1]}</h1>
        </div>
        <div className="calculator">
            <button onClick={HandleClick} value='AC'>AC</button>
            <button  onClick={HandleClick} value='+/−'></button>
            <button></button>
            <button onClick={HandleClick} value='÷'>÷</button>
    
            <button onClick={HandleClick} value='7'>7</button>
            <button onClick={HandleClick} value='8'>8</button>
            <button onClick={HandleClick} value='9'>9</button>
            <button onClick={HandleClick} value='x'>x</button>

            <button onClick={HandleClick} value='4'>4</button>
            <button onClick={HandleClick} value='5'>5</button>
            <button onClick={HandleClick} value='6'>6</button>
            <button onClick={HandleClick} value='-'>-</button>

            <button onClick={HandleClick} value='1'>1</button>
            <button onClick={HandleClick} value='2'>2</button>
            <button onClick={HandleClick} value='3'>3</button>
            <button onClick={HandleClick} value='+'>+</button>

            <button onClick={HandleClick} className="double">0</button>
            <button onClick={HandleClick} value=".">.</button>
            <button onClick={HandleClick} value="=">=</button>
    
        </div>
    </div>
            
        </CGrid>
    );
}

export default Calculator;