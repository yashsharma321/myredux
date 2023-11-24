const ContactDetails = (state = [], action) => {
  let mydata = Object.assign([], state);

  if (action.type = "contact") {
    mydata.push(action.data);
  }
  return mydata;
};

export default ContactDetails;
