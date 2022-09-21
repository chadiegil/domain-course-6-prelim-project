import React from "react";

function Edit({ props }) {
  return (
    <>
      <div className="container  d-flex align-item-center justify-content-center mt-4">
        <div className="form w-50 shadow-lg p-4">
          <h1 className="text-center">Visitor Entry</h1>
          <label htmlFor="lastname">Lastname</label>
          <br />
          <input
            type="text"
            name="lastname"
            className="w-100"
            value={props.id}
          />
          <br />
          <label htmlFor="firstname">Firstname</label>
          <br />
          <input type="text" name="firstname" className="w-100" />
          <br />
          <label htmlFor="purpose">Purpose</label>
          <br />
          <input type="text" name="purpose" className="w-100" />
          <br />
          <label htmlFor="date">Date</label>
          <br />
          <input type="date" name="purpose" className="w-100" />
          <br />
          <button className="btn btn-success btn-sm mt-3 w-100">Update</button>
        </div>
      </div>
    </>
  );
}

export default Edit;
