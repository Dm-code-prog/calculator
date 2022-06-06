import React from 'react';
import CGrid from '../themes/Calculator.styled';
import {Ctx} from '../App'



function Calculator(props) {
    const [result, setResult] = React.useContext(Ctx)

    function ImprovedHandleClick(value){

        function round(num){
            const numArray = num.toString().split('')
            const toModify =  numArray.length > 8;
            console.log(numArray)
            if (!toModify){
                return num
            } else {
                return num.toString().split('').slice(0, 8).join('')
            }
        }
    

        const res = result[1]
        let first = result[0][0]
        const operator = result[0][1]
        const second = result[0][2]

        const isNumber = [0,1,2,3,4,5,6,7,8,9,'.'].includes(value)
        const isOperator = ['+','-','*','x', '÷'].includes(value)
        const isOperatorEmpty = operator === null;
        const eq = value === '='
        const isAC = value === 'AC'
        const isForbiddenZero = (first === 0 || first === '0')
        const isOld = typeof first === 'string' && first.endsWith('_old')

        if (isNumber && isOperatorEmpty){

            
            if (first !== null && !isOld && !isForbiddenZero){
                const n1 = `${first}${value}`
                setResult (
                    [[n1, null, null], round(n1)]
                )
            } else {
                if (value === '.'){
                    setResult (
                        [[`0${value}`, null, null], `0${round(value)}`]
                    )
                } else {
                setResult (
                    [[value, null, null], round(value)]
                )
            }
        }
        } 

        if (isNumber && !isOperatorEmpty){
            if (second !== null){
                const n2 = `${second}${value}`
                setResult (
                    [[first, operator, n2], round(n2)]
                )
            } else {
                setResult (
                    [[first, operator, value], round(value)]
                )
            }


    }

    if (first !== null && second === null) {
        if (isOperator){

            if (isOld){
                setResult(
                [[first.split('_')[0], value, null], round(first.split('_')[0])]
                )
            } else {
                setResult(
                    [[first, value, null], round(first)]
                )
            }
        }
    }

    if (eq){
        let r = 0
        const intFirst = parseFloat(first)
        const intSecond = parseInt(second)
        switch (operator){
            case '+':
                r = intFirst + intSecond
                break;
            case '-':
                r = intFirst - intSecond
                break;
            case 'x':
                r = intFirst * intSecond
                break;
            case '÷':
                r = intFirst / intSecond
                break;
        }
        setResult(
            [[`${r}_old`, null, null], round(r)]
        )
    }

    if (isAC){
        setResult(
            [[null, null, null], 0]
        )
    }
}
    console.log(result)


    return (
        <CGrid>
            <div class="container">
        <div class="h1container">
            <h1>{result[1]}</h1>
        </div>
        <div class="calculator">
            <button onClick={()=>ImprovedHandleClick('AC')}>AC</button>
            <button></button>
            <button></button>
            <button onClick={()=>ImprovedHandleClick('÷')}>÷</button>
    
            <button onClick={()=>ImprovedHandleClick(7)}>7</button>
            <button onClick={()=>ImprovedHandleClick(8)}>8</button>
            <button onClick={()=>ImprovedHandleClick(9)}>9</button>
            <button onClick={()=>ImprovedHandleClick('x')}>x</button>

            <button onClick={()=>ImprovedHandleClick(4)}>4</button>
            <button onClick={()=>ImprovedHandleClick(5)}>5</button>
            <button onClick={()=>ImprovedHandleClick(6)}>6</button>
            <button onClick={()=>ImprovedHandleClick('-')}>-</button>

            <button onClick={()=>ImprovedHandleClick(1)}>1</button>
            <button onClick={()=>ImprovedHandleClick(2)}>2</button>
            <button onClick={()=>ImprovedHandleClick(3)}>3</button>
            <button onClick={()=>ImprovedHandleClick('+')}>+</button>

            <button onClick={()=>ImprovedHandleClick(0)} class="double">0</button>
            <button onClick={()=>ImprovedHandleClick('.')}>.</button>
            <button onClick={()=>ImprovedHandleClick('=')}>=</button>
    
        </div>
    </div>
            
        </CGrid>
    );
}

export default Calculator;