import { useState } from "react";
import { useDispatch } from "react-redux";

export const Contact = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-3">
          <table className="table table-borderless">
            <tbody>
              <tr className="text-center">
                <td>
                  <strong>Enter Contact Details</strong>
                </td>
              </tr>
              <tr className="text-start">
                <td>
                  Present Address :
                  <textarea className="form-control"></textarea>
                </td>
              </tr>
              <tr className="text-start">
                <td>
                  Permanent Address :
                  <textarea className="form-control"></textarea>
                </td>
              </tr>
              <tr className="text-center">
                <td>
                  <button className="btn btn-secondary rounded">
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
