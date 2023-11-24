import { useSelector } from "react-redux";

export const Viewall = () => {
  let basicDetails = useSelector((state) => state.BasicDetails);
  let contactDetails = useSelector((state) => state.ContactDetails);
  let educationDetails = useSelector((state) => state.EducationDetails);
  let experienceDetails = useSelector((state) => state.ExperienceDetails);

  return (
    <div className="container">
      <div className="row text-center mb-4">
        <div className="col-lg-12">
          <h2>Kindly Check Your Details</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <table className="table table-borderless table-striped">
            <tbody>
              <tr>
                <td colSpan="2">
                  <strong>Basic Details</strong>
                </td>
              </tr>
              <tr>
                <td>Name: </td>
                <td>{basicDetails[0]?.[0]}</td>
              </tr>
              <tr>
                <td>Email:</td>
                <td>{basicDetails[0]?.[1]}</td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td>{basicDetails[0]?.[2]}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-lg-6">
          <table className="table table-borderless table-striped">
            <tbody>
              <tr>
                <td colSpan="2">
                  <strong>Contact Details</strong>
                </td>
              </tr>
              <tr>
                <td>Present Address: </td>
                <td>{contactDetails[0]?.[0]}</td>
              </tr>
              <tr>
                <td>Permanent Address:</td>
                <td>{contactDetails[0]?.[1]}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-lg-6">
          <table className="table table-borderless table-striped">
            <tbody>
              <tr>
                <td colSpan="2">
                  <strong>Education Details</strong>
                </td>
              </tr>
              <tr>
                <td>Highest Qualification: </td>
                <td>{educationDetails[0]?.["highestQualification"]}</td>
              </tr>
              <tr>
                <td>College / University:</td>
                <td>{educationDetails[0]?.["college"]}</td>
              </tr>
              <tr>
                <td>Year of Passout:</td>
                <td>{educationDetails[0]?.["passoutyear"]}</td>
              </tr>
              <tr>
                <td>Percentage:</td>
                <td>{educationDetails[0]?.["percentage"]}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-lg-6">
          <table className="table table-borderless table-striped">
            <tbody>
              <tr>
                <td colSpan="2">
                  <strong>Experience Details</strong>
                </td>
              </tr>
              <tr>
                <td>Total no of company worked: </td>
                <td>{experienceDetails[0]?.["companyworked"]}</td>
              </tr>
              <tr>
                <td>Total project worked:</td>
                <td>{experienceDetails[0]?.["projectworked"]}</td>
              </tr>
              <tr>
                <td>Total years of experience:</td>
                <td>{experienceDetails[0]?.["totalexp"]}</td>
              </tr>
              <tr>
                <td>Your all tech skills:</td>
                <td>{experienceDetails[0]?.["techskills"]}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-lg-12 text-center my-4">
          <button
            className="btn btn-primary btn-lg rounded"
            onClick={() => window.print()}
          >
            Submit & Print
          </button>
        </div>
      </div>
    </div>
  );
};
