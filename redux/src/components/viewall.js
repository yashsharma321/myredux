import { useSelector } from "react-redux";

export const Viewall = () => {
  let basicDetails = useSelector((state) => state.BasicDetails);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <table className="table table-borderless">
            <tbody>
              <tr>
                <td colSpan="2">
                  <strong>Kindly Check Your Details :</strong>
                </td>
              </tr>
              <tr>
                <td>Name : </td>
                <td>{basicDetails[0]?.[0]}</td>
              </tr>
              <tr>
                <td>Email :</td>
                <td>{basicDetails[0]?.[1]}</td>
              </tr>
              <tr>
                <td>Phone :</td>
                <td>{basicDetails[0]?.[2]}</td>
              </tr>
              <tr>
                <td colSpan="2">
                  <button className="btn btn-primary rounded">Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
