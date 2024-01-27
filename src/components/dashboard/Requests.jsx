import React, { useState, useEffect } from "react";
import RequestCard from "../common/RequestCard/RequestCard";
import { Link } from "react-router-dom";
import { db, auth } from "../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { ClipLoader } from "react-spinners";

const fetchRequests = async () => {
  const requests = [];
  const requestsRef = collection(db, "requests");
  const provider = auth.currentUser.email;
  const requestsSnapshot = await getDocs(requestsRef);
  requestsSnapshot.forEach((doc) => {
    const request = { ...doc.data(), id: doc.id };

    if (
      !request.responseStatus ||
      (request.responseStatus && request.providerEmail === provider)
    ) {
      requests.push(request);
    }
  });

  return requests;
};

const Requests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchRequests().then((data) => {
      setRequests(data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <h1 className="text-center text-5xl font-bold text-gray-600 mt-5">
        Client's Requests
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
                to={`/provider/dashboard/requests/${request.id}`}
                key={request.id}
              >
                <RequestCard key={request.id} request={request} />
              </Link>
            ))
          ):(
            <p className="text-[gray] text-center">
              No Requests Available
            </p>
          )}
        </div>
      </main>
    </>
  );
};

export default Requests;
