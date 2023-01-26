import React from "react";
<<<<<<< HEAD
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

export default function App(){
    return(
        <div>
            <Heading/>
            {notes.map((note) => <Note key = {note.key} title = {note.title} content = {note.content} />)}
            <Footer/>
        </div>
        
    )
}

=======

function App() {
  const date = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });

  const [time, setTime] = React.useState(date);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    });
    setTime(newTime);
  }

  setInterval(updateTime, 1000);
  return (
    <div className="container">
      <h1>{time}</h1>
      {/* <button onClick={updateTime}>Get Time</button> */}
    </div>
  );
}

export default App;
>>>>>>> 3b5a95ff8fb4b89ca02097cd2e0eb543d812ae73
