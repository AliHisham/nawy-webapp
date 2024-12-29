// pages/index.tsx
import Link from "next/link";

const items = [
  { id: 1, name: "Item 1" },
  { id: 2, name: "Item 2" },
  { id: 3, name: "Item 3" },
];

const HomePage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">All Items</h1>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={`/item/${item.id}`}
              className="text-blue-500 hover:underline"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
