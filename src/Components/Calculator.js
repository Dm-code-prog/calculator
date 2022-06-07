import React from 'react';
import CGrid from '../themes/Calculator.styled';

function Calculator(props) {
    const [result, setResult] = React.useState([["", "", ""], 0])
    const [currentIndex, setCurrentIndex] = React.useState(0)

    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7' ,'.', '8', '9']
    const operators = ['+', '-', 'x', '÷']
    const firstValue = result[0][0]
    const operator = result[0][1]
    const secondValue = result[0][2]
    const resultClone = [...result];

    function HandleDoubleClick(){
        if (firstValue.endsWith('_old')){
            setResult([["", "", ""], 0]);
            setCurrentIndex(0);
        }
    }
    function HandleClick(event){
        const value = event.target.value;
        if (operators.includes(value)){
            setCurrentIndex( i => 2)
            resultClone[0][1] = value;
            if (firstValue.endsWith('_old')){
                resultClone[0][0] = firstValue.split('_')[0]
            }
            if (secondValue){
                
            } else {
                setResult(resultClone)
            }
        }
        if (numbers.includes(value)){
            let newValue;
            newValue = `${resultClone[0][currentIndex]}${value}`
            if (firstValue.endsWith('_old')){
                newValue =  value;
            }
            if (newValue === '.'){
                newValue = '0.'
            }
            newValue.length > 8? newValue= `${newValue.slice(0,7)}...`: newValue=newValue;
            resultClone[1] = newValue; 
            resultClone[0][currentIndex] = newValue;
            setResult(resultClone)
        }
        if (value === 'AC'){
            setResult([["", "", ""], 0]);
            setCurrentIndex(0);
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
            setResult([[`${r}_old`, '', ''],rMutated])
            setCurrentIndex(0);
        }

        if (value === '+/−'){
            if (firstValue.endsWith('_old')){
                resultClone[0][0] = firstValue.split('_')[0]
            }
            let unValue = resultClone[0][currentIndex];
            unValue = unValue.startsWith('-')? unValue.substring(1) : `-${unValue}`
            resultClone[0][currentIndex] = unValue;
            resultClone[1] = unValue;
            setResult(resultClone);
        }
}

console.log(result)

    return (
        <CGrid>
            <div className="container">
        <div className="h1container">
            <h1>{result[1]}</h1>
        </div>
        <div className="calculator">
            <button onClick={HandleClick} value='AC'>AC</button>
            <button onClick={HandleClick} value='+/−'>+/−</button>
            <button onClick={HandleClick}></button>
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

            <button onClick={HandleClick} 
            className="double" 
            value='0'
            onDoubleClick={HandleDoubleClick}>0</button>
            <button onClick={HandleClick} value=".">.</button>
            <button onClick={HandleClick} value="=">=</button>
    
        </div>
    </div>
            
        </CGrid>
    );
}

export default Calculator;