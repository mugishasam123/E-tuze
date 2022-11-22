export function emailValidator(email) {
    const re = /\S+@\S+\.\S+/;
    if (!email) return "Email can't be empty.";
    if (!re.test(email)) return "Invalid Email Address";
    return "";
  }
  
  export function nameValidator(name) {
    if (!name) return "Name can't be empty.";
    return "";
  }
  
  export function passwordValidator(password) {
    if (!password) return "Password can't be empty.";
    if (password.length < 5) return "Password must be at least 5 or more characters long.";
    return "";
  }
  
  export function genderValidator(gender) {
    if (gender === "Select") return "Gender not selected";
    return "";
  }
  
  export function phoneValidator(phone) {
    if (!phone) return "Phone Number is empty";
    if (phone.length < 9) return "Phone Number too short";
  }
  
  export function documentNumberValidator(docID) {
    if (!docID) return "Enter Emirates ID or Passport No";
    return "";
  }
  