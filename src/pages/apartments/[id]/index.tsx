import { useRouter } from "next/router";

const ItemPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Item Details</h1>
      <p>This is the details page for item with ID: {id}</p>
    </div>
  );
};

export default ItemPage;
