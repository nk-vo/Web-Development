import React, { useState } from "react";
import "./App.css";

function App() {
  const [headingText, setHeadingText] = useState("");
  // const [isMouseOver, setMouseOver] = useState(false);
  const [name, setName] = useState("");
  // function handleClick() {
  //   setHeadingText("Submitted");
  // }

  // function handleMouseOver() {
  //   setMouseOver(true);
  // }

  // function handleMouseOut() {
  //   setMouseOver(false);
  // }

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick(event) {
    setHeadingText(name)
    event.preventDefault()
  }
  return (
    // <div className="container">
    //   <h1>{headingText}</h1>
    //   <input
    //     onChange={handleChange}
    //     type="text"
    //     placeholder="What's your name?"
    //   />
    //   <button
    //     style={{ backgroundColor: isMouseOver ? "black" : "white" }}
    //     onClick={handleClick}
    //     onMouseOver={handleMouseOver}
    //     onMouseOut={handleMouseOut}
    //   >
    //     Submit
    //   </button>

    // </div>
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
