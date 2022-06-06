import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
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
        }
        
        button:hover{
            background-color: #a1a6a8;
            outline: 0;
        }
        
        button:nth-child(-n+3) {
            background-color: #38393e;
        }
        
        
        button:nth-child(-n+3):hover{
            background-color: #58595f;
            
        } 
        
        button:last-child, 
          button:nth-child(4n-4) {  
            background-color: #fe9e0e;
          }
        
          button:last-child:hover, 
          button:nth-child(4n-4):hover{
              background: 	rgba(254,158,14, 0.7);
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
