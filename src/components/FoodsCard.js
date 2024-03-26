import Link from "next/link";

export default function FoodsCard({ imageUrl, name, id }) {
  console.log(id);
  return (
    <div className="flex flex-col items-center gap-3">
      <img
        src={imageUrl}
        alt={name}
        className="w-56 h-56 rounded-lg object-cover "
      />
      <div>
        <p>{name}</p>
        <Link href={`/food/${id}`}>Detail</Link>
      </div>
    </div>
  );
}
