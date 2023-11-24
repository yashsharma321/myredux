import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Experience = () => {
  const [companyworked, setCompanyworked] = useState();
  const [projectworked, setProjectworked] = useState();
  const [totalexp, setTotalexp] = useState();
  const [techskills, setTechskills] = useState("");

  let mydata = {
    companyworked: companyworked,
    projectworked: projectworked,
    totalexp: totalexp,
    techskills: techskills,
  };

  let dispatch = useDispatch();
  let navigate = useNavigate();

  const save = () => {
    let dispatchdata = { type: "experience", data: mydata };
    dispatch(dispatchdata);
    navigate("../viewall");
  };

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
                  <input
                    type="text"
                    className="form-control"
                    onChange={(obj) => setCompanyworked(obj.target.value)}
                    value={companyworked}
                  />
                </td>
              </tr>
              <tr>
                <td>Total project worked:</td>
                <td>
                  <input
                    type="email"
                    className="form-control"
                    onChange={(obj) => setProjectworked(obj.target.value)}
                    value={projectworked}
                  />
                </td>
              </tr>
              <tr>
                <td>Total years of experience:</td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    onChange={(obj) => setTotalexp(obj.target.value)}
                    value={totalexp}
                  />
                </td>
              </tr>
              <tr>
                <td>Your all tech skills: </td>
                <td>
                  <textarea
                    className="form-control"
                    onChange={(obj) => setTechskills(obj.target.value)}
                    value={techskills}
                  ></textarea>
                </td>
              </tr>
              <tr className="text-center">
                <td colSpan="2">
                  <button className="btn btn-info rounded" onClick={save}>
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
