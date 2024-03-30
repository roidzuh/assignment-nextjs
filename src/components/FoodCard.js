import Link from "next/link";

export default function FoodCard({ imageUrl, name, id }) {
  return (
    <div className="bg-gray-100 shadow-lg rounded-lg overflow-hidden">
      <img src={imageUrl} alt={name} className="w-full h-56 object-cover" />
      <div className="p-4">
        <p className="text-xl font-semibold mb-2">{name}</p>
        <Link href={`/food/${id}`} className="text-blue-500 hover:underline">
          Detail
        </Link>
      </div>
    </div>
  );
}
