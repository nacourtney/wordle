import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card } from './Hello';


const messages = ["Card1", "Card2", "Card3", "Card4"];
const card = <Card message="Card2"/>;
const cards = [<Card message="Card3"/>,<Card message="Card4"/>];

function covertStringArrToCardArr(strArr){

  const results = [];

  for(let i = 0; i < strArr.length; i++){
    results.push(<Card message="Card2"/>);
  }

  return results;

}

function App() {
  const [data3, setData3] = React.useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
        <p>{!data3 ? "Loading..." : data3}</p>
        <button
          onClick={
            () => {
              fetch("/api/message", {
                method: "GET",
                headers: {
                  "Accept": "application/json",
                  "Content-Type": "application/json"
                }
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log(data);

                  const results = [];

                  for(let i = 0; i < data.messages.length; i++){
                    results.push(<Card message={data.messages[i]}/>);
                  }
                                  
                  setData3(results);
                }) 
            }
          }
        > 
          Click Me
        </button>
        <Card message={"Card1"}/>
        { card }
        { cards }
      </header>
    </div>
  );
}

export default App;