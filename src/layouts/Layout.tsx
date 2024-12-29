import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className=" ">
      <Header />
      <main className=" container mx-auto p-4">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
