import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<{ user: UserProps }> = ({ user }) => {
  return (
    <div className="bg-white shadow-md hover:shadow-lg mx-auto my-6 p-6 rounded-lg max-w-xl transition-shadow duration-300">
      <h2 className="mb-2 font-bold text-blue-700 text-2xl">{user.name}</h2>
      <p className="text-gray-600">@{user.username}</p>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-gray-600">{user.phone}</p>
      <p className="mb-2 text-gray-600">{user.website}</p>

      <div className="text-gray-500 text-sm">
        <h4 className="font-semibold">Address:</h4>
        <p>
          {user.address.street}, {user.address.suite}, {user.address.city}
        </p>
        <p>Zip: {user.address.zipcode}</p>

        <h4 className="mt-2 font-semibold">Company:</h4>
        <p>{user.company.name}</p>
        <p className="italic">"{user.company.catchPhrase}"</p>
      </div>
    </div>
  );
};

export default UserCard;
