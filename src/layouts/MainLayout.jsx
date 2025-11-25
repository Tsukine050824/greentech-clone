import { Outlet } from "react-router-dom";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingContact from "../components/FloatingContact";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-black">
      {/* phần header tổng: TopBar + Nav */}
      <TopBar />
      <Header />

      {/* nội dung từng trang */}
      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
      <FloatingContact />
    </div>
  );
}
