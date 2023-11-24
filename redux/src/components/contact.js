import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const [presentaddr, setPresentaddr] = useState("");
  const [permanentaddr, setPermanentaddr] = useState("");

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const save = () => {
    let dispatchdata = {
      type: "contact",
      data: [presentaddr, permanentaddr],
    };

    dispatch(dispatchdata);
    
    navigate("../education");
  };

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
                  <textarea
                    className="form-control"
                    onChange={(obj) => setPresentaddr(obj.target.value)}
                    value={presentaddr}
                  ></textarea>
                </td>
              </tr>
              <tr className="text-start">
                <td>
                  Permanent Address :
                  <textarea
                    className="form-control"
                    onChange={(obj) => setPermanentaddr(obj.target.value)}
                    value={permanentaddr}
                  ></textarea>
                </td>
              </tr>
              <tr className="text-center">
                <td>
                  <button className="btn btn-secondary rounded" onClick={save}>
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
