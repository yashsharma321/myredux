import { useState } from "react";
import { useDispatch } from "react-redux";

export const Basic = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  let dispatch = useDispatch();
  const save = () => {
    let dispatchdata = {
      type: "basic",
      data: [name, email, mobile],
    };
    dispatch(dispatchdata);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4 offset-4">
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td colSpan="2">
                  <strong>Enter Basic Details</strong>
                </td>
              </tr>
              <tr>
                <td>Name :</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(obj) => setName(obj.target.value)}
                    value={name}
                  />
                </td>
              </tr>
              <tr>
                <td>Email :</td>
                <td>
                  <input
                    type="email"
                    className="form-control"
                    onChange={(obj) => setEmail(obj.target.value)}
                    value={email}
                  />
                </td>
              </tr>
              <tr>
                <td>Phone :</td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    onChange={(obj) => setMobile(obj.target.value)}
                    value={mobile}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button className="btn btn-primary rounded" onClick={save}>
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
