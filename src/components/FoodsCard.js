export default function FoodsCard({ imageUrl, name }) {
  return (
    <div className="">
      <img src={imageUrl} alt={name} className="w-80 h-80 object-cover" />
      <p>{name}</p>
    </div>
  );
}
