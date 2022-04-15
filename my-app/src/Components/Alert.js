import React from "react";

export default function Alert(props) {
  let capitalize = (str) => {
    let stri = str;
    return stri[0].toUpperCase() + stri.slice(1);
  };


  
  return (
    props.alert &&
    <>
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
      </div>
    </>
  );
}
