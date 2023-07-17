import React from "react";

const Profile = () => {
    return (
        <div>
            <div className="bg-orange-500">
                <h1 className="text-white text-center py-10 text-xl">
                    MY ACCOUNT
                </h1>
            </div>
            <div className="flex  justify-center">
                <div className="flex justify-center">
                    <div className="flex justify-center border border-1 mx-4 my-2  items-center">
                        <ul className="grid text-sm   justify-center items-center">
                            <li className="grid grid-cols-3 px-4 py-2 bg-slate-200 border-b justify-center items-center">
                                Dashboard
                            </li>
                            <li className="grid grid-cols-3  px-4 py-2 border-b  justify-center items-center">
                                Address (1)
                            </li>
                            <li className="grid grid-cols-3 px-4 py-2  justify-center items-center">
                                Logout
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                   <p>Hello Vaibhav mehar  </p>
                   <p className="font-bold ">Order History</p>
                   <div className="px-4 flex border border-green-800">
                        <p className="underline text-green-600 text-sm">MAKE YOUR FIRST ORDER</p>
                        <p className="text-sm">You haven't placed any orders yet.</p>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
