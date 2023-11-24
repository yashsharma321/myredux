import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Education = () => {
  const [highestQualification, setHighestQualification] = useState("");
  const [college, setCollege] = useState("");
  const [passoutyear, setPassoutyear] = useState("");
  const [percentage, setPercentage] = useState("");

  let dispatch = useDispatch();
  let navigate = useNavigate();

  let myobj = {
    highestQualification: highestQualification,
    college: college,
    passoutyear: passoutyear,
    percentage: percentage,
  };

  const save = () => {
    let dispatchdata = { type: "education", data: myobj };
    dispatch(dispatchdata);
    navigate("../experience");
  };
  
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
                  <input
                    type="text"
                    className="form-control"
                    onChange={(obj) =>
                      setHighestQualification(obj.target.value)
                    }
                    value={highestQualification}
                  />
                </td>
              </tr>
              <tr>
                <td>College / University :</td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    onChange={(obj) => setCollege(obj.target.value)}
                    value={college}
                  />
                </td>
              </tr>
              <tr>
                <td>Year of Passout :</td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    onChange={(obj) => setPassoutyear(obj.target.value)}
                    value={passoutyear}
                  />
                </td>
              </tr>
              <tr>
                <td>Percentage :</td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    onChange={(obj) => setPercentage(obj.target.value)}
                    value={percentage}
                  />
                </td>
              </tr>
              <tr className="text-center">
                <td colSpan="2">
                  <button className="btn btn-warning rounded" onClick={save}>
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
