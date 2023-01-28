import React,{useState} from "react";
import Header from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote){
        setNotes(prevNotes =>{
            return [...prevNotes, newNote]
        })
        console.log(notes)
    }
  
  return (
    <div>

      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index)=>{
        return(
            <Note 
                key = {index}
                id = {index}
                title = {noteItem.title}
                content = {noteItem.note}
            />
        ) 
      })};
      <Footer />

    </div>
  );
}

export default App;


