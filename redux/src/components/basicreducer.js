const BasicDetails = (state = [], action) => {
  let mydata = Object.assign([], state);

  if (action.type === "basic") {
    mydata.push(action.data);
  }
  return mydata;
};

export default BasicDetails;
