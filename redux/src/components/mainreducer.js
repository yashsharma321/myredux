import { combineReducers } from "redux";
import BasicDetails from "./basicreducer";
import ContactDetails from "./contactreducer";
import EducationDetails from "./educationreducer";
import ExperienceDetails from "./experiencereducer";

const Mainreducer = combineReducers({
  BasicDetails,
  ContactDetails,
  EducationDetails,
  ExperienceDetails,
});

export default Mainreducer;
