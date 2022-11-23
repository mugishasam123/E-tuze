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
    if (password.length < 6) return "Password must be at least 6 or more characters long.";
    return "";
  }
  export function matchValidator(pass1,pass2) {
    if (pass1!==pass2) return "Passwords don't match"
    return "";
  }

  export function resumeValidator(resume) {
    if (!resume) return "Resume  can't be empty.";
    return "";
  }

  export function profileValidator(profile) {
    if (!profile) return "Profile photo can't be empty"
    return "";
  }

  export function passwordMatchValidator(password,passwordConfirm) {
    if (password) return "Password can't be empty.";
    if (password.length < 6) return "Password must be at least 6 or more characters long.";
    return "";
  }
  
  
  
  export function phoneValidator(phone) {
    if (!phone) return "Phone Number can't be empty";
    if (phone.length < 9) return "Phone Number too short";
  }
  
