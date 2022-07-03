import React,{useState} from "react";


const InputArea = (props)=>{
    const [inputText,setInputText] = useState('');
    const handleChange = (event)=>{
        const newval = event.target.value;
        setInputText(newval);
    }
    return(
        <div className = 'form'>
            <input type = "text" onChange={handleChange} value = {inputText} /> 
            <button onClick={()=>{

            props.onAdd(inputText);
            setInputText("");
            
            }}>
                <span>Add</span>
            </button>
        </div>
    )
}

export default InputArea