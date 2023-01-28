import React, {useState} from "react";

function CreateArea(props) {
    const [inputText, setText] = useState({
        title: "",
        note: ""
    });

    function handleChange(e){
        const {name, value} = e.target;

        setText((prevValue)=> ({...prevValue, [name]: value}));
    }

  return (
    <form >
      <div>
        <input onChange={handleChange} name="title" placeholder="Title" value={inputText.title} />
        <textarea onChange={handleChange} name="note" placeholder="Take a note..." rows="3" value={inputText.note}/>
        <button onClick={(e)=>{
            props.onAdd(inputText);
            setText({title: "", note: ""});
            e.preventDefault();
        }}>Add</button>
      </div>
    </form>
  );
}

export default CreateArea;