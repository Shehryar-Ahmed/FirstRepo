import React from "react";

export default function TextForm(props) {

  return (
    <>
      <div className="mb-3">
        <label
          htmlFor="exampleFormControlTextarea1"
          className={`form-label my-3 text-${props.checked.fg}`}
        >
          <h2>Enter Your Text Here:</h2>
        </label>
        <textarea
          className="form-control mx-3"
          id="exampleFormControlTextarea1"
          rows="10"
          value={props.text}
          onChange={props.Changed}
          style={{"backgroundColor" : `${props.checked.tg}`, 'color' : props.checked.tg === 'black'? 'white' : 'black' }}
        ></textarea>
        <button
          type="button"
          className="btn btn-dark my-3 mx-1"
          onClick={props.UpperCase}
        >
          Convert to UpperCase
        </button>
        <button
          type="button"
          className="btn btn-dark my-3 mx-1"
          onClick={props.LowerCase}
        >
          Convert to LowerCase
        </button>
        <button
          type="button"
          className="btn btn-dark my-3 mx-1"
          onClick={props.Clear}
        >
          Clear Text
        </button>
        <p className={`mx-3 text-${props.checked.fg}`}>
          Characters: {props.text.length}
          <br />
          Words: {props.Words}
        </p>
      </div>
    </>
  );
}
