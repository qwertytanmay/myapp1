import React, { useState } from "react"
const App = () => {
    const [input, setInput] = useState("");
    const [display, setDisplay] = useState("");

 const whileTyping = (event) => {
    event.preventDefault();
    setInput(event.target.value)
 }
 const final = () => {
    setDisplay(input)
 }
return(
    <>
        <input id="input" onChange={whileTyping}></input>
        <p id="text">{display}</p>
        <button id="button" onClick={final}>Click me</button>
    </>
)
}

export default App;
