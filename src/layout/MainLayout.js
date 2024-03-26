import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function MainLayout({ children }) {
  return (
    <div className="w-full">
      <div className="mx-10">
        <Header />
        <main className=" flex flex-wrap gap-8 justify-center">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
