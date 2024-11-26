import React, { useState, useEffect } from "react";
import RequestCard from "../common/RequestCard/RequestCard";
import { Link } from "react-router-dom";
import { db, auth } from "../../utils/firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { ClipLoader } from "react-spinners";

const fetchRequests = async () => {
  const requestsRef = collection(db, "requests");
  const userId = auth.currentUser.uid;
  console.log("userid", userId)
  const q = query(requestsRef, where("userID", "==", userId));
  const snapshot = await getDocs(q);
  console.log("snp", snapshot)
  return snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
};

const MyRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRequests()
      .then(setRequests)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1 className="text-center text-5xl font-bold text-gray-600 mt-5">
        My Requests
      </h1>
      <main className="mx-2 w-full">
        <div className="p-5 mt-1">
          {loading ? (
            <div className="flex flex-col items-center justify-center">
              <ClipLoader color="#36d7b7" />
            </div>
          ) : requests.length > 0 ? (
            requests.map((request) => (
              <Link
                to={`/client/dashboard/requests/${request.id}`}
                key={request.id}
              >
                <RequestCard request={request} />
              </Link>
            ))
          ) : (
            <p className="text-[gray] text-center">Once you have sent requests, they will show up here.</p>
          )}
        </div>
      </main>
    </>
  );
};

export default MyRequests;