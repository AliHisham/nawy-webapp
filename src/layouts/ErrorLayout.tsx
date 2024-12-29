import Link from "next/link";

interface ErrorLayoutProps {
  message: string;
}

const ErrorLayout = ({ message }: ErrorLayoutProps) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-3xl font-bold text-red-500">Error</h1>
      <p className="text-lg text-gray-700 mb-4">{message}</p>
      <Link href="/" className="text-blue-500 hover:underline">
        Go back to home
      </Link>
    </div>
  );
};

export default ErrorLayout;
