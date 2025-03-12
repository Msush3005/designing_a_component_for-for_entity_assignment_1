import React from "react";

const Usercard = () => {
    const profilePhoto = "https://via.placeholder.com/150";
    const name = "Sushmitha Malleboina";
    const email = "sushmithaengr23@gmail.com";
    const phone = "9876543210";
    const address = "st.marie school new delhi";
  return (
    <div className="border rounded-lg shadow-md p-4 max-w-sm bg-white text-center">
      <img
        src={profilePhoto}
        alt="Profile"
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-600">{phone}</p>
      <p className="text-gray-600">{address}</p>
    </div>
  );
};

export default Usercard;
