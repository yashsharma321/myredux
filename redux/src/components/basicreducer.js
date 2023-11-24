const BasicDetails = (state = [], action) => {
  let mydata = Object.assign([], state);

  if (action.type === "basic") {
    mydata.push(action.data); // since only one data is coming from frontend, we can also directly assign it instead of push.
    //mydata = action.data;
  }
  return mydata;
};

export default BasicDetails;
