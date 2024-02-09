import React from "react";
import "./add.css";

function Add(props) {
  function handleForm(e) {
    e.preventDefault();
  }

  return (
    <>
      <div className="add">
        <div className="model">
          <span className="close" onClick={() => props.setOpen(false)}>
            X
          </span>
          <h2>Add New {props.action}</h2>
          <form onSubmit={handleForm}>
            {props.columns
              .filter((itm) => itm.field !== "id" && itm.field !== "avatar")
              .map((data) => (
                <div className="item">
                  <label>{data.headerName}</label>
                  <input type={data.type} placeholder={data.field} />
                </div>
              ))}
            <button className="addBtn">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Add;
