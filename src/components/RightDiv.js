import { useContext, useState } from "react";
import Context from "./context";


function RightDiv() {
    const a = useContext(Context);
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [age, setage] = useState("");
  


    function showalert() {
    
       

         if(firstname||lastname||email||age) {
            alert(`${firstname}\n${lastname}\n${email}\n${age}`);

        }
    }
    return(
        <div className="rightdiv">
        {a.jsondata.map((data)=> {
            return(
                <>

                    {data.type.toLowerCase().split(" ").join("")=="text" && data.label.toLowerCase().split(" ").join("")=="firstname" ? (
                    <div className="rightdivoutput">
                    <label for={data.label}>{data.label}:</label>
                    <input
                    type={data.type}
                    placeholder={data.placeholder}
                    // value={firstname}
                    onChange={(e)=> {
                        if(e.target.value.length>3) {
                            setfirstname(`${data.label}:${e.target.value}`);
                        }
                        
                    }}
                    ></input>
                
                </div>
                ) : (null)}

{data.type.toLowerCase().split(" ").join("")=="text" && data.label.toLowerCase().split(" ").join("")=="lastname" ? (
                    <div className="rightdivoutput">
                    <label for={data.label}>{data.label}:</label>
                    <input
                    type={data.type}
                    placeholder={data.placeholder}
                    // value={firstname}
                    onChange={(e)=> {
                        setlastname(`${data.label}:${e.target.value}`);
                    }}
                    ></input>
                
                </div>
                ) : (null)}

{data.type.toLowerCase().split(" ").join("")=="number" && data.label.toLowerCase().split(" ").join("")=="age" ? (
                    <div className="rightdivoutput">
                    <label for={data.label}>{data.label}:</label>
                    <input
                    type={data.type}
                    placeholder={data.placeholder}
                    // value={input}
                    onChange={(e)=> {
                        setage(`${data.label}:${e.target.value}`);
                    }}
                    ></input>
                
                </div>
                ) : (null)}

{data.type.toLowerCase().split(" ").join("")=="email" && data.label.toLowerCase().split(" ").join("")=="email" ? (
                    <div className="rightdivoutput">
                    <label for={data.label}>{data.label}:</label>
                    <input
                    type={data.type}
                    placeholder={data.placeholder}
                    // value={input}
                    onChange={(e)=> {
                        setemail(`${data.label}:${e.target.value}`);
                    }}
                    ></input>
                
                </div>
                ) : (null)}

{data.type.toLowerCase().split(" ").join("")=="password" && data.label.toLowerCase().split(" ").join("")=="password" ? (
                    <div className="rightdivoutput">
                    <label for={data.label}>{data.label}:</label>
                    <input
                    type={data.type}
                    placeholder={data.placeholder}
                    // value={input}
                    onChange={(e)=> {
                        setpassword(`${data.label}:${e.target.value}`);
                    }}
                    ></input>
                
                </div>
                ) : (null)}


                </>
                
            )
        })}

{a.jsondata.length!==0 ? (<button onClick={showalert}>Submit</button>) : (null)}



        </div>
    )
}

export default RightDiv;