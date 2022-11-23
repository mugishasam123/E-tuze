export function emailValidator(email) {
    const re = /\S+@\S+\.\S+/;
    if (!email) return "Email can't be empty.";
    if (!re.test(email)) return 'Invalid Email Address';
    return '';
  }
  
  export function passwordValidator(password) {
    if (!password) return "Password can't be empty.";
    if (password.length < 5)
      return 'Password must be at least 5 or more characters long.';
    return '';
  }