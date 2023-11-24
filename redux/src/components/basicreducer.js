const BasicDetails = (state = [], action) => {
  let mydata = Object.assign([], state);

  if (action.type === "basic") {
    mydata.push(action.data);
  }
  console.log(mydata);
  return mydata;
};

export default BasicDetails;
