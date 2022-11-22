import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase'

const signInWithEmail = async (email,password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    return 'loggedIn';
  } catch (error) {
     return error
  }
};

export default signInWithEmail;