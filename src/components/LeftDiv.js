import { useContext, useEffect, useState } from "react";
import Context from './context';

function LeftDiv() {
    const [inputjson, setinputjson] = useState("");
    const a = useContext(Context);

function submitjson(){
a.setjsondata([...JSON.parse(inputjson)]);

}





    return(
        <div className="leftdiv">
        <textarea 
        placeholder="enter your json here"
        className="textarea"
        value={inputjson}
        onChange={(e)=> {
            setinputjson(e.target.value);
        }}
        ></textarea>
        <button onClick={submitjson}>Submit</button>
        </div>
    )
}

export default LeftDiv;