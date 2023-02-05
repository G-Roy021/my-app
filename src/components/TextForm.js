import PropTypes from "prop-types";
import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    // console.log("button clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    // console.log("Changed");
    setText(event.target.value);
  };

  const handleloClick = () => {
    let newlowText = text.toLowerCase();
    setText(newlowText);
    props.showAlert("Converted to lower Text", "success")
  };
  const clickClr = () => {
    setText("")
  };

  

  return (
    <>
      <div>
        <div className="mb-3 my-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            {props.textarea}
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            onChange={handleOnChange}
            rows="3"
            placeholder="Enter Message"
            
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          convert to Upper{" "}
        </button>
        <button className="btn btn-outline-primary m-2" onClick={handleloClick}>
          conver to lower
        </button>
        <button className="btn btn-outline-danger ml-1" onClick={clickClr}>
          clear
        </button>
      </div>

      <div className="container my-4">
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.08 * text.split(" ").length} Minutes</p>
        <h1>Text Summary</h1>
        <p>{text.length>0?text:"enter text the text area to preview"}</p>
      </div>
    </>
  );
}

// TextForm.propTypes = {
//   textarea: PropTypes.string.isRequired
// }
