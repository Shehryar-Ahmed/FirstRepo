import "./App.css";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);

function App() {
  let [alert, setAlert] = useState(null);

  let [checked, setChecked] = useState({
    stat: false,
    bg: "secondary",
    fg: "dark",
    tg: "white",
  });

  let [text, setText] = useState("");

  let showAlert = (msg, type) => {
    setAlert({ msg: msg, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

//   let [checked, setChecked] = useState({
//     stat: false,
//     bg: "secondary",
//     fg: "dark",
//     tg: "white",
//   });
  let onchange = (event) => {
    if (checked.stat === true) {
      setChecked({ stat: false, bg: "secondary", fg: "dark", tg: "white" });
      document.body.style.backgroundColor = "white";
      event.target.value = false;
    } else {
      setChecked({ stat: true, bg: "dark", fg: "light", tg: "black" });
      event.target.value = true;
      document.body.style.backgroundColor = "#1a1a1a";
    }
    console.log(checked.stat + checked.bg);
  };

//   let [text, setText] = useState("");
  let Changed = (event) => {
    setText(event.target.value);
  };

  let UpperCase = () => {
    setText(text.toUpperCase());
    showAlert("Converted to Uppercase", "success");
  };

  let LowerCase = () => {
    setText(text.toLowerCase());   
    showAlert("Converted to Lowercase", "success");
  };

  let Clear = () => {
    setText("");
    showAlert("Cleared Text", "success");
  };

  let Words;
  if (text.endsWith(" ") || text === "") {
    Words = text.split(" ").length - 1;
  } else {
    Words = text.split(" ").length;
  }

  return (
    <>
      {/* <Router>
      <Navbar checked = {checked} onchange={onchange}/>
      <Alert alert = {alert}/>
      <Routes>
          <Route path="/about"/>
          <Route path="/" element={<TextForm showAlert={showAlert} checked={checked} text={text} Changed={Changed} UpperCase={UpperCase} LowerCase={LowerCase} Clear={Clear} Words={Words} />}/>
      </Routes>
    </Router>  */}
      <Navbar checked={checked} onchange={onchange} />
      <Alert alert={alert} />
      <TextForm showAlert={showAlert} checked={checked} text={text} Changed={Changed} UpperCase={UpperCase} LowerCase={LowerCase} Clear={Clear} Words={Words} />
    </>
  );
}

export default App;
