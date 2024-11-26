import React, { useState, useEffect } from 'react';
import { auth, db } from '../../utils/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { Outlet, useNavigate } from 'react-router-dom';
import TopBar from '../../components/dashboard/TopBar';
import SideNav from '../../components/dashboard/SideNav';
import { MdPendingActions, MdSpaceDashboard } from 'react-icons/md';

const ClientDashboard = ({ user }) => {
    const [clientData, setClientData] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchClientData = async () => {
            try {
                const user = auth.currentUser;
                if (!user) {
                    navigate('/login');
                    return;
                }

                const clientDoc = await getDoc(doc(db, 'individuals', user.uid));
                if (clientDoc.exists()) {
                    setClientData(clientDoc.data());
                }
            } catch (error) {
                console.error('Error fetching client data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchClientData();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <div className="text-2xl text-gray-600">Loading...</div>
            </div>
        );
    }

    return (
        <div>
            <TopBar name={user.name} photoUrl={user.photoUrl} />
            <SideNav links={[
                {
                    to: "/client/dashboard",
                    icon: MdSpaceDashboard,
                    text: "Dashboard"
                },
                {
                    to: "/client/dashboard/requests",
                    icon: MdPendingActions,
                    text: "My Requests"
                }]} />
            <div className='absolute overflow-scroll w-[100%] md:w-[80%] right-0 w-full h-[91%] bg-gray-100 top-[9%]'>
                <Outlet />
            </div>
        </div>
    );
};

export default ClientDashboard;