import React, { useState } from "react";
import "./CSS/Todo.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const TodoList = () => {
  const [inputList, setInputList] = useState("");
  const [Item, setItem] = useState([]);
  const list = (e) => {
    const fruit = e.target.value;
    setInputList(fruit);
  };
  const deleteItem = (index) => {
    const updatedList = Item.filter((ary, i) => i !== index);
    setItem(updatedList);
  };
  const SubmitHandle = () => {
    setItem((preItem) => {
      return [...preItem, inputList];
    });
    setInputList("");
  };

  return (
    <>
      <div className="container">
        <div className="list">
          <div className="heading">
            <h1 className="primary">ToDo List</h1>
          </div>
          <div>
            <input type="text" onChange={list} value={inputList} />
            <button
              className="btn btn-success mt-1"
              onClick={SubmitHandle}
              style={{ border: "1px solid black", color: "white" }}
            >
              Add
            </button>
          </div>
          <div>
            <ul>
              <li>
                {Item.map((value, index) => {
                  return (
                    <>
                      <i
                        className="fa fa-times"
                        style={{ color: "yellow" }}
                        onClick={() => deleteItem(index)}
                      ></i>
                      <li className="value">{value}</li>
                    </>
                  );
                })}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default TodoList;
