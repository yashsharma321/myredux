import { useState } from "react";
import { useDispatch } from "react-redux";

export const Education = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-3">
          <table className="table table-borderless">
            <tbody>
              <tr className="text-center">
                <td colSpan="2">
                  <strong>Enter Education Details</strong>
                </td>
              </tr>
              <tr>
                <td>Highest Qualification : </td>
                <td>
                  <input type="text" className="form-control" />
                </td>
              </tr>
              <tr>
                <td>College / University :</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
              </tr>
              <tr>
                <td>Year of Passout :</td>
                <td>
                  <input type="number" className="form-control" />
                </td>
              </tr>
              <tr>
                <td>Percentage :</td>
                <td>
                  <input type="number" className="form-control" />
                </td>
              </tr>
              <tr className="text-center">
                <td colSpan="2">
                  <button className="btn btn-warning rounded">
                    Save and continue
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
