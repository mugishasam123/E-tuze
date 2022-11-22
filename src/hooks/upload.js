import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import {storage} from '../utils/firebase'

const useUpload = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (!file) return;
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    if (e.target.name === "serviceImage") setServiceImgName(file.name);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        if (e.target.name === "serviceImage") return setServiceImageProgress(progress);
      },
      (error) => {
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          if (e.target.name === "serviceImage") return setServiceImg(downloadURL);
        });
      }
    );
  };

  export default useUpload;