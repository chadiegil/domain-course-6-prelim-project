import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgTrash } from "react-icons/cg";
import { BsPencilSquare } from "react-icons/bs";
import { data } from "../data";

function Form() {
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [purpose, setPurpose] = useState("");
  const [date, setDate] = useState("");

  const [visitors, setVisitors] = useState(data);

  const history = useNavigate();

  const addVisitor = () => {
    const newVisitor = {
      lastname: lastname,
      firstname: firstname,
      purpose: purpose,
      date: date,
    };

    setVisitors((prev) => [...prev, newVisitor]);
    console.log(visitors);
  };

  const handleDelete = (id) => {
    let index = visitors
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    visitors.splice(index, 1);
    history("/");
  };
  const handleEdit = (id) => {
    alert("Edit button is click!");
  };

  return (
    <div className="container m-4 p-2 d-flex justify-content-between">
      <div className="form">
        <h1>Visitor Entry</h1>
        <label htmlFor="lastname">Lastname</label>
        <br />
        <input
          type="text"
          name="lastname"
          onChange={(e) => {
            setLastname(e.target.value);
          }}
          className="w-100"
        />
        <br />
        <label htmlFor="firstname">Firstname</label>
        <br />
        <input
          type="text"
          name="firstname"
          onChange={(e) => {
            setFirstname(e.target.value);
          }}
          className="w-100"
        />
        <br />
        <label htmlFor="purpose">Purpose</label>
        <br />
        <input
          type="text"
          name="purpose"
          onChange={(e) => {
            setPurpose(e.target.value);
          }}
          className="w-100"
        />
        <br />
        <label htmlFor="date">Date</label>
        <br />
        <input
          type="date"
          name="purpose"
          onChange={(e) => {
            setDate(e.target.value);
          }}
          className="w-100"
        />
        <br />
        <button
          onClick={addVisitor}
          className="btn btn-success btn-sm mt-3 w-100"
        >
          Submit
        </button>
      </div>

      <div className="table w-75">
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Lastname</th>
              <th scope="col">Firstname</th>
              <th scope="col">Purpose</th>
              <th scope="col">Date</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {visitors.map((visitor, index) => {
              return (
                <tr key={index}>
                  <td>{visitor.lastname}</td>
                  <td>{visitor.firstname}</td>
                  <td>{visitor.purpose}</td>
                  <td>{visitor.date}</td>
                  <td>
                    <button
                      className="btn btn-sm bg-info m-1 w-100 text-white"
                      onClick={() => handleEdit(visitor.id)}
                    >
                      <BsPencilSquare />
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm bg-danger m-1 w-100 text-white"
                      onClick={() => handleDelete(visitor.id)}
                    >
                      <CgTrash />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Form;
