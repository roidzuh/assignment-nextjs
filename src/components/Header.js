import Link from "next/link";

export default function Header() {
  return (
    <header className="py-4 bg-white fixed top-0 left-0 right-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center cursor-pointer">
        <h1 className="text-4xl font-bold text-blue-500 hover:text-blue-800">
          FOODIDU
        </h1>
        <nav>
          <ul className="flex gap-4">
            <Link href={"/food"} className="text-blue-500 hover:text-blue-800">
              Home
            </Link>
            <Link
              href={"/food/create"}
              className="text-blue-500 hover:text-blue-800"
            >
              Create Food
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
