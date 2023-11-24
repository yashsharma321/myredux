const EducationDetails = (state = [], action) => {
  let mydata = Object.assign([], state);

  if (action.type = "education") {
    mydata.push(action.data);
  }

  return mydata;
};
export default EducationDetails;
