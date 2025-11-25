import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import vnFlag from "../assets/VietnamIcon.jpg";
import enFlag from "../assets/EnglishIcon.jpg";
import logo from "../assets/logo.webp";

const createLinkCls = (isHome) => () =>
  [
    "px-4 py-3 uppercase tracking-wide font-semibold transition-colors duration-200",
    isHome
      ? "text-white hover:text-orange-400"
      : "text-slate-900 hover:text-orange-500",
  ].join(" ");

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [showSearch, setShowSearch] = useState(false);

  // dropdown hover states
  const [openAbout, setOpenAbout] = useState(false);
  const [openField, setOpenField] = useState(false);
  const aboutTimer = useRef(null);
  const fieldTimer = useRef(null);

  // sticky header khi scroll
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    let rAF = 0;
    const onScroll = () => {
      cancelAnimationFrame(rAF);
      rAF = requestAnimationFrame(() => {
        const y = window.scrollY || document.documentElement.scrollTop;
        setIsSticky(y > 120); // ngưỡng kích hoạt sticky
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      cancelAnimationFrame(rAF);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Khi đổi trang (pathname thay đổi), đóng tất cả dropdown để tránh "kẹt" ở vị trí cũ
  useEffect(() => {
    setOpenAbout(false);
    setOpenField(false);
  }, [location.pathname]);

  // ==== Dropdown items =====
  const AboutDropdown = (
    <div
      className={[
        "absolute left-0 top-full mt-0.5 w-72 overflow-hidden shadow-2xl ring-1 ring-white/20",
        "transition-all duration-200 ease-out",
        openAbout
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-0.5 pointer-events-none",
        "before:content-[''] before:absolute before:-top-1 before:left-0 before:w-full before:h-3 before:block",
        "rounded-none border-0",
      ].join(" ")}
    >
      <div className="bg-gradient-to-r from-orange-200 via-orange-400 to-orange-500 divide-y divide-white/30">
        {[
          ["/gioi-thieu", "Giới thiệu về chúng tôi", true],
          ["/tam-nhin", "Tầm nhìn"],
          ["/su-menh", "Sứ mệnh"],
          ["/gia-tri-cot-loi", "Giá trị cốt lõi"],
        ].map(([to, text, bold], i) => (
          <NavLink
            key={i}
            to={to}
            className={`group block px-4 py-2.5 text-white transition-colors duration-200 hover:bg-white hover:text-orange-600 ${
              bold ? "font-semibold" : ""
            }`}
          >
            <span className="inline-block transform transition-transform duration-200 group-hover:translate-x-1">
              {text}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );

  const FieldDropdown = (
    <div
      className={[
        "absolute left-0 top-full mt-0.5 w-72 overflow-hidden shadow-2xl ring-1 ring-white/20",
        "transition-all duration-200 ease-out",
        openField
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-0.5 pointer-events-none",
        "before:content-[''] before:absolute before:-top-1 before:left-0 before:w-full before:h-3 before:block",
        "rounded-none border-0",
      ].join(" ")}
    >
      <div className="bg-gradient-to-r from-orange-200 via-orange-400 to-orange-500 divide-y divide-white/30">
        {[
          ["/o-to-di-dong", "Ô tô và di động"],
          ["/dich-vu-ki-thuat", "Dịch vụ kĩ thuật"],
          ["/tri-tue-nhan-tao", "Trí tuệ nhân tạo"],
        ].map(([to, text], i) => (
          <NavLink
            key={i}
            to={to}
            className="group block px-4 py-2.5 text-white transition-colors duration-200 hover:bg-white hover:text-orange-600"
          >
            <span className="inline-block transform transition-transform duration-200 group-hover:translate-x-1">
              {text}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  );

  return (
    <header className="relative w-full z-40">
      {/* NAV bình thường (ngay dưới TopBar) - LUÔN hiển thị */}
      <div
        className={`w-full transition-colors duration-300 ${
          isHome
            ? "bg-white/10 border-b border-white/20 backdrop-blur-md"
            : "bg-white border-b-2 border-orange-400 shadow-sm"
        }`}
      >
        <div className="container-default flex items-center justify-between h-14 md:h-16">
          {/* NAVIGATION */}
          <nav className="flex items-center gap-4 md:gap-6">
            <NavLink to="/" className={createLinkCls(isHome)}>
              Trang chủ
            </NavLink>

            {/* Giới thiệu */}
            <div
              className="relative"
              onMouseEnter={() => {
                clearTimeout(aboutTimer.current);
                setOpenAbout(true);
              }}
              onMouseLeave={() => {
                aboutTimer.current = setTimeout(() => setOpenAbout(false), 120);
              }}
            >
              <button
                className={`px-3 py-2 uppercase tracking-wide font-semibold flex items-center gap-1 transition-colors duration-200 ${
                  isHome
                    ? "text-white hover:text-orange-400"
                    : "text-slate-900 hover:text-orange-500"
                }`}
              >
                Giới thiệu
                <span
                  className={isHome ? "text-white/70" : "text-slate-500"}
                >
                  ▾
                </span>
              </button>
              {!isSticky && AboutDropdown}
            </div>

            {/* Lĩnh vực hoạt động */}
            <div
              className="relative"
              onMouseEnter={() => {
                clearTimeout(fieldTimer.current);
                setOpenField(true);
              }}
              onMouseLeave={() => {
                fieldTimer.current = setTimeout(() => setOpenField(false), 120);
              }}
            >
              <button
                className={`px-3 py-2 uppercase tracking-wide font-semibold flex items-center gap-1 transition-colors duration-200 ${
                  isHome
                    ? "text-white hover:text-orange-400"
                    : "text-slate-900 hover:text-orange-500"
                }`}
              >
                Lĩnh vực hoạt động
                <span
                  className={isHome ? "text-white/70" : "text-slate-500"}
                >
                  ▾
                </span>
              </button>
              {!isSticky && FieldDropdown}
            </div>

            <NavLink to="/khach-hang" className={createLinkCls(isHome)}>
              Khách hàng
            </NavLink>
            <NavLink to="/tuyen-dung" className={createLinkCls(isHome)}>
              Tuyển dụng
            </NavLink>
            <NavLink to="/lien-he" className={createLinkCls(isHome)}>
              Liên hệ
            </NavLink>
          </nav>

          {/* CỜ + SEARCH */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <img src={vnFlag} alt="VN" className="w-6 h-4 rounded-sm" />
              <img src={enFlag} alt="EN" className="w-6 h-4 rounded-sm" />
            </div>
            <button
              onClick={() => setShowSearch((s) => !s)}
              className={`p-1.5 rounded-md text-lg transition-colors duration-200 ${
                isHome
                  ? "bg-white/5 hover:bg-white/10 text-orange-400"
                  : "bg-orange-50 hover:bg-orange-100 text-orange-600"
              }`}
              aria-label="Tìm kiếm"
            >
              {showSearch ? "✕" : "Q"}
            </button>
          </div>
        </div>

        {showSearch && (
          <div className="container-default mt-2 pb-3">
            <div className="relative w-full md:w-2/3 mx-auto">
              <input
                type="text"
                placeholder="Nhập nội dung cần tìm..."
                className="w-full rounded-md border border-gray-300 pl-4 pr-10 py-2 text-black focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <span className="absolute right-3 top-2.5 text-gray-500">🔍</span>
            </div>
          </div>
        )}
      </div>

      {/* NAV sticky – overlay khi scroll */}
      {isSticky && (
        <div
          className={`fixed top-0 left-0 w-full z-50 border-b transition-colors duration-300 ${
            isHome
              ? "bg-black shadow-[0_2px_0_0_rgba(255,140,0,0.8)] border-transparent"
              : "bg-white/95 shadow-[0_2px_0_0_rgba(255,140,0,0.4)] border-gray-200"
          }`}
        >
          <div className="container-default h-12 flex items-center justify-between">
            <button className="flex items-center gap-2">
              <img src={logo} alt="GT System" className="h-6 object-contain" />
            </button>

            <nav className="flex items-center gap-4">
              <NavLink
                to="/"
                className={() =>
                  [
                    "px-2 py-2 uppercase text-xs md:text-sm font-extrabold transition-colors duration-200",
                    isHome
                      ? "text-white hover:text-orange-400"
                      : "text-slate-900 hover:text-orange-500",
                  ].join(" ")
                }
              >
                Trang chủ
              </NavLink>

              {/* Giới thiệu sticky */}
              <div
                className="relative"
                onMouseEnter={() => {
                  clearTimeout(aboutTimer.current);
                  setOpenAbout(true);
                }}
                onMouseLeave={() => {
                  aboutTimer.current = setTimeout(
                    () => setOpenAbout(false),
                    120
                  );
                }}
              >
                <button
                  className={`px-2 py-2 uppercase text-xs md:text-sm font-semibold transition-colors duration-200 ${
                    isHome
                      ? "text-white hover:text-orange-400"
                      : "text-slate-900 hover:text-orange-500"
                  }`}
                >
                  Giới thiệu ▾
                </button>
                {AboutDropdown}
              </div>

              {/* Lĩnh vực sticky */}
              <div
                className="relative"
                onMouseEnter={() => {
                  clearTimeout(fieldTimer.current);
                  setOpenField(true);
                }}
                onMouseLeave={() => {
                  fieldTimer.current = setTimeout(
                    () => setOpenField(false),
                    120
                  );
                }}
              >
                <button
                  className={`px-2 py-2 uppercase text-xs md:text-sm font-semibold transition-colors duration-200 ${
                    isHome
                      ? "text-white hover:text-orange-400"
                      : "text-slate-900 hover:text-orange-500"
                  }`}
                >
                  Lĩnh vực hoạt động ▾
                </button>
                {FieldDropdown}
              </div>

              <NavLink
                to="/khach-hang"
                className={() =>
                  [
                    "px-2 py-2 uppercase text-xs md:text-sm font-semibold transition-colors duration-200",
                    isHome
                      ? "text-white hover:text-orange-400"
                      : "text-slate-900 hover:text-orange-500",
                  ].join(" ")
                }
              >
                Khách hàng
              </NavLink>
              <NavLink
                to="/tuyen-dung"
                className={() =>
                  [
                    "px-2 py-2 uppercase text-xs md:text-sm font-semibold transition-colors duration-200",
                    isHome
                      ? "text-white hover:text-orange-400"
                      : "text-slate-900 hover:text-orange-500",
                  ].join(" ")
                }
              >
                Tuyển dụng
              </NavLink>
              <NavLink
                to="/lien-he"
                className={() =>
                  [
                    "px-2 py-2 uppercase text-xs md:text-sm font-semibold transition-colors duration-200",
                    isHome
                      ? "text-white hover:text-orange-400"
                      : "text-slate-900 hover:text-orange-500",
                  ].join(" ")
                }
              >
                Liên hệ
              </NavLink>
            </nav>

            <button
              onClick={() => setShowSearch((s) => !s)}
              className={`text-sm transition-colors duration-200 ${
                isHome
                  ? "text-white hover:text-orange-400"
                  : "text-slate-900 hover:text-orange-500"
              }`}
              aria-label="Tìm kiếm"
            >
              Q
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
