import React, {useState} from "react";


export default function About() {
    const [myStyle, setMyStyle]=useState({
        color:'white',
        backgroundColor:'#121212'
        
         }
    )
    const [btntxt, setBtnText]=useState("Dark Mode")
   
   const toggleStyle =()=>{
        if(myStyle.color=='white'){
            setMyStyle(
                {
                    color:'#121212',
                backgroundColor:'white'
                }
            )
            setBtnText("Dark mode")

        }
        else{
            setMyStyle({
                color:'white',
                backgroundColor:'#121212' })
                setBtnText("Light mode")
        }
    }

  return (
   <>
    <div className="card" style={myStyle}>
     
      <div className="card-body">
        <h5 className="card-title">About Me</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="/" className="btn btn-primary">
          Go somewhere
        </a>
      </div>

     
    </div>
     <div className="container">
     <button className="btn btn-outline-primary my-4" onClick={toggleStyle}>{btntxt}</button>
     </div>
   </>
  );
}
