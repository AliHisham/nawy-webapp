import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <h1 className="text-lg font-bold">Apartments App</h1>
        <div>
          <Link href="/" className="mr-4">
            All Items
          </Link>
          <Link href="/create">Create</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
