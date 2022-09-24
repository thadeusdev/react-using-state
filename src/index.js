import React,  {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Header({isOn}){
  return <h1>{isOn ? "It's on" : "It's Off"}</h1>
}
function App() {
  // a variable that changes! we want to use state.
  // let isOn = true
  // array destructuring!
  const [isOn, setIsOn] = useState(true)
  const [count, setCount] = useState(0)
  console.log({isOn, setIsOn})
  
  function handleClick(event) {
    setIsOn(!isOn)
  }

  function handleCountClick(){
    setCount(count + 1)
  }
  
  return (
    <div>
      <Header isOn={isOn} />
      <button onClick={handleClick}>{isOn ? "On" : "Off"}</button>
      <button onClick={handleCountClick}>Clicks: {count}</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
