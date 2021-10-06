import React from "react";
export const Input = () => {
  return (
    <div>
      <div class="row">
        <div class="col-8">
          <label>Enter Word:</label>
        </div>
        <div class="col-4"></div>
      </div>

      <div class="row">
        <div class="col-8">
          <input
            className="form-control"
            type="text"
            placeholder="Enter Word"
          />
        </div>
        <div class="col-4">
          <button className="btn btn-primary">Check </button>
        </div>
      </div>
      <br />
    </div>
  );
};
