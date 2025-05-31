import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  address,
  email,
  phone,
  website,
  company,
}) => {
  return (
    <div className="bg-white shadow-md hover:shadow-lg mx-auto my-6 p-6 rounded-lg max-w-xl transition-shadow duration-300">
      <h2 className="mb-2 font-bold text-blue-700 text-2xl">{name}</h2>
      <p className="text-gray-600">@{username}</p>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-600">{phone}</p>
      <p className="mb-2 text-gray-600">{website}</p>

      <div className="text-gray-500 text-sm">
        <h4 className="font-semibold">Address:</h4>
        <p>
          {address.street}, {address.suite}, {address.city}
        </p>
        <p>Zip: {address.zipcode}</p>

        <h4 className="mt-2 font-semibold">Company:</h4>
        <p>{company.name}</p>
        <p className="italic">"{company.catchPhrase}"</p>
      </div>
    </div>
  );
};

export default UserCard;
