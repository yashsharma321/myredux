import { useState } from "react";
import { useDispatch } from "react-redux";

export const Experience = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-3">
          <table className="table table-borderless">
            <tbody>
              <tr className="text-center">
                <td colSpan="2">
                  <strong>Enter Experience Details</strong>
                </td>
              </tr>
              <tr>
                <td>Total no of company worked:</td>
                <td>
                  <input type="text" className="form-control" />
                </td>
              </tr>
              <tr>
                <td>Total project worked:</td>
                <td>
                  <input type="email" className="form-control" />
                </td>
              </tr>
              <tr>
                <td>Total years of experience:</td>
                <td>
                  <input type="number" className="form-control" />
                </td>
              </tr>
              <tr>
                <td>Your all tech skills: </td>
                <td>
                  <textarea className="form-control"></textarea>
                </td>
              </tr>
              <tr className="text-center">
                <td colSpan="2">
                  <button className="btn btn-info rounded">
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
