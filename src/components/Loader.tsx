import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Loader className="animate-spin text-blue-500" size={48} />
      <span className="ml-4 text-blue-500 text-lg">Loading...</span>
    </div>
  );
};

export default Loading;
