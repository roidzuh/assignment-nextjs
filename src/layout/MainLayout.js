import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function MainLayout({ children, className }) {
  return (
    <div className="w-full ">
      <div className="mx-10">
        <Header />
        <main className={className}>{children}</main>
        <Footer />
      </div>
    </div>
  );
}
