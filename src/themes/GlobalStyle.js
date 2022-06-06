import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        font-family: 'Roboto', sans-serif;
        
        body{
            background-color: black;
        }
        
        h1{
            color: white;
            margin: 20px 15px 0 0;
            font-size: 61px;
            font-weight: 100;
            font-family: sans-serif;
        }
        
        .container{
            margin-top: 66px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
        }
        
        .h1container{
            width: 300px;
            display: flex;
            justify-content: flex-end;
        }
        
        .calculator{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            max-width: 300px;
            grid-gap: 10px;
        
        }
        
        button{
            background-color: #58595f;
            color: white;
            border: none;
            font-size: 24px;
            font-weight: bold;
            height: 66px;
            width: 66px;
            border-radius: 50%;
            transition: all 0.4s ease-in-out;
        }
        
        button:hover{
            cursor: pointer;
        }

        button:focus{
            background-color: #a1a6a8;
            outline: 0;
        }

        
        button:nth-child(-n+3) {
            background-color: #38393e;
        }
        
        button:nth-child(-n+3):focus{
            background-color: #58595f;
            
        } 
        
        button:last-child, 
          button:nth-child(4n-4) {  
            background-color: #fe9e0e;
          }
        
          button:last-child:f, 
          button:nth-child(4n-4):hover{
              cursor: pointer;
          }

          button:last-child:focus, 
          button:nth-child(4n-4):focus {
            background-color: white;
            color: #fe9e0e
          }


        
        
        .double{
            grid-column: 1 /2 span;
            border-radius: 30px;
            width: 142px;
        }
`

export default GlobalStyle;
