// import Link from "next/link";

// const Header: React.FC = () => {
//   return (
//     <header className="bg-blue-600 shadow-md py-4 text-white">
//       <div className="flex justify-between items-center mx-auto px-4 container">
//         <h3 className="font-bold text-2xl">
//           <Link href="/">Daily Contents</Link>
//         </h3>
//         <nav>
//           <ul className="flex space-x-6">
//             <li className="hover:underline">
//               <Link href="/posts">Posts</Link>
//             </li>
//             <li className="hover:underline">
//               <Link href="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export async function getStaticProps() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users");
//   const posts = await response.json();

//   return {
//     props: {
//       posts,
//     },
//   };
// }

// export default Header;

// pages/users/index.tsx

import React from "react";
import { UserProps } from "@/interfaces";
import UserCard from "@/components/common/UserCard";

interface UsersPageProps {
  posts: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ posts }) => {
  return (
    <div className="bg-gray-50 p-6 min-h-screen">
      <h1 className="mb-8 font-bold text-gray-800 text-3xl text-center">
        Users
      </h1>
      {posts.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts = await response.json();

  return {
    props: {
      posts,
    },
  };
}

export default Users;
