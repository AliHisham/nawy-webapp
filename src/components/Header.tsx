import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-lg font-bold">My Item App</h1>
        <div>
          <Link href="/" className="mr-4">
            All Items
          </Link>
          <Link href="/item/1">Single Item</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
