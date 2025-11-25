import logo from "../assets/logo.webp";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Hàng đầu: logo + slogan */}
      <div className="container-default py-8 border-b border-white/10">
        <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-6">
          {/* Logo là button */}
          <button
            type="button"
            className="focus:outline-none shrink-0"
            aria-label="Về trang chủ"
          >
            <img
              src={logo}
              alt="GT System"
              className="h-12 md:h-14 object-contain"
            />
          </button>

          {/* Slogan */}
          <p className="text-center md:text-left text-orange-400 font-extrabold uppercase tracking-wide leading-tight text-xl md:text-2xl">
            GTSYSTEM VIETNAM WANT YOU TO BE RICH
          </p>
        </div>
      </div>

      {/* Hàng nội dung chính */}
      <div className="container-default py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cột 1: Liên hệ */}
        <div>
          <h3 className="text-orange-400 font-bold uppercase mb-4">Liên hệ</h3>
          <ul className="space-y-3 text-white/90 text-sm md:text-base leading-relaxed">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-orange-400 mt-1" />
              <span>
                <strong>Văn phòng Hà Nội:</strong> Tầng 10, Tòa nhà MITEC, Lô E2, Khu đô thị mới Cầu Giấy,
                phường Yên Hòa, quận Cầu Giấy, thành phố Hà Nội, Việt Nam
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-orange-400" />
              <span>Điện thoại: 02432018205 - 02432018205</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-orange-400" />
              <span>Email: accountant-vn@gtsystem.co.kr</span>
            </li>
            <li className="flex items-center gap-3">
              <FaGlobe className="text-orange-400" />
              <span>Website: greentech-vn.com</span>
            </li>
          </ul>
        </div>

        {/* Cột 2: Danh mục */}
        <div>
          <h3 className="text-orange-400 font-bold uppercase mb-4">Danh mục</h3>
          <ul className="space-y-2 text-white/90 text-sm md:text-base">
            <li className="hover:text-orange-400 transition"><a href="#">Trang chủ</a></li>
            <li className="hover:text-orange-400 transition"><a href="#">Giới thiệu</a></li>
            <li className="hover:text-orange-400 transition"><a href="#">Tin tuyển dụng</a></li>
            <li className="hover:text-orange-400 transition"><a href="#">Liên hệ</a></li>
          </ul>
        </div>

        {/* Cột 3: Dịch vụ */}
        <div>
          <h3 className="text-orange-400 font-bold uppercase mb-4">Dịch vụ</h3>
          <ul className="space-y-2 text-white/90 text-sm md:text-base">
            <li className="hover:text-orange-400 transition"><a href="#">Ô tô & Di Động</a></li>
            <li className="hover:text-orange-400 transition"><a href="#">Dịch vụ Kĩ Thuật</a></li>
            <li className="hover:text-orange-400 transition"><a href="#">Trí Tuệ nhân tạo</a></li>
          </ul>
        </div>
      </div>

      {/* Bản quyền cuối */}
      <div className="bg-neutral-900">
        <div className="container-default py-4 text-center text-sm text-orange-400 font-semibold">
          BẢN QUYỀN THUỘC VỀ GTSYSTEM VIỆT NAM. COPYRIGHT 2025
        </div>
      </div>
    </footer>
  );
}
