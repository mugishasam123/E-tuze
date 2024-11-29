import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDoc, doc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { ClipLoader } from "react-spinners";

const excludedFields = ['Name', 'userID', 'date', 'email', 'Email', 'responseStatus', 'providerEmail', 'response', 'chatMessages'];

const RequestDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState(null);
    const [responder, setResponder] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const requestDoc = await getDoc(doc(db, "requests", id));
                if (requestDoc.exists()) {
                    const requestData = requestDoc.data();
                    setData(requestData);

                    if (requestData.responseStatus && requestData.providerEmail) {
                        const usersRef = collection(db, "users");
                        const q = query(usersRef, where("email", "==", requestData.providerEmail));
                        const userSnapshot = await getDocs(q);
                        if (!userSnapshot.empty) {
                            setResponder(userSnapshot.docs[0].data());
                        }
                    }
                }
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) return <div className="flex justify-center items-center h-screen"><ClipLoader color="#36d7b7" /></div>;
    if (!data) return <div className="text-center mt-8">Request not found</div>;

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-600 my-6">Request Details</h1>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Status</h2>
                    <div className="bg-gray-50 p-4 rounded">
                        {data.responseStatus ? (
                            <div className="text-gray-700">
                                <div className="text-green-500 font-medium mb-2">Responded by:</div>
                                <p className="font-medium">{responder?.name || 'Unknown Provider'}</p>
                                <p className="text-medium">{data.providerEmail}</p>
                            </div>
                        ) : (
                            <div className="text-yellow-500 font-medium">Pending Response</div>
                        )}
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your Responses</h2>
                    <div className="space-y-4">
                        {Object.entries(data).map(([question, answer], index) => {
                            if (excludedFields.includes(question)) return null;
                            return (
                                <div key={index} className="bg-gray-50 p-4 rounded">
                                    <div className="font-medium text-gray-700 mb-2">{question}</div>
                                    <div className="text-gray-600">
                                        {Array.isArray(answer) ? (
                                            <ul className="list-disc list-inside">
                                                {answer.map((item, i) => (
                                                    <li key={i}>{item.toString()}</li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p>{answer?.toString() || 'N/A'}</p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {data.responseStatus && data.response && (
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Provider's Response</h2>
                        <div className="bg-gray-50 p-4 rounded">
                            <p className="text-gray-700 whitespace-pre-wrap">{data.response.toString()}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RequestDetails;