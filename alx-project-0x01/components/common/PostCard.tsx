import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, body, userId, id }) => {
  return (
    <div className="bg-white shadow-lg hover:shadow-xl mx-auto my-6 p-6 rounded-lg max-w-xl transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="font-semibold text-gray-800 text-2xl">{title}</h2>
      </div>
      <p className="text-gray-600">{body}</p>
      <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
        <span>User ID: {userId}</span>
        <span>Post ID: {id}</span>
      </div>
    </div>
  );
};

export default PostCard;
