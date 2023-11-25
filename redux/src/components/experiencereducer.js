const ExperienceDetails = (state = [], action) => {
  let mydata = Object.assign([], state);

  if (action.type === "experience") {
    mydata = action.data;
  }

  return mydata;
};

export default ExperienceDetails;
