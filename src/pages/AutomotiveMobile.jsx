import bgAbout from "../assets/background.webp";
import { NavLink } from "react-router-dom";

export default function AutomotiveMobile() {
  return (
    <div className="w-full bg-[#f7f7f7] text-gray-800">
      {/* ==== BANNER ==== */}
      <div className="relative w-full h-[360px] md:h-[420px] overflow-hidden">
        <img
          src={bgAbout}
          alt="Automotive & Mobile Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-orange-300 tracking-wide uppercase">
              Lĩnh vực hoạt động
            </p>
            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-xl">
              Ô TÔ &amp; DI ĐỘNG
            </h1>
            <div className="flex items-center gap-2 text-white/90 text-sm md:text-base">
              <NavLink to="/" className="hover:text-orange-400 flex items-center gap-1">
                Trang chủ
              </NavLink>
              <span>/</span>
              <NavLink
                to="/linh-vuc-hoat-dong"
                className="hover:text-orange-400 flex items-center gap-1"
              >
                Lĩnh vực hoạt động
              </NavLink>
              <span>/</span>
              <span className="text-orange-400 font-semibold">Ô tô &amp; Di động</span>
            </div>
          </div>
        </div>
      </div>

      {/* ==== NỘI DUNG CHÍNH ==== */}
      <div className="container-default py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
          {/* Nội dung chính */}
          <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="w-full flex justify-center bg-black/5 py-6">
              <div className="bg-white p-1 shadow-sm" style={{ width: 800, height: 400 }}>
                <img
                  src={bgAbout}
                  alt="Ô tô & Di động"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-orange-500 tracking-wide">
                Ô tô &amp; Di động
              </h2>
              <div className="h-[2px] w-24 bg-orange-500 mb-3" />
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                Chúng tôi phát triển các giải pháp phần mềm cho ngành công nghiệp ô tô và
                thiết bị di động, từ hệ thống nhúng trên xe, nền tảng kết nối đến các ứng dụng
                hỗ trợ vận hành và bảo trì đội xe.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                Đội ngũ kỹ sư của chúng tôi am hiểu cả tiêu chuẩn an toàn lẫn yêu cầu hiệu
                năng cao, giúp khách hàng rút ngắn thời gian đưa sản phẩm ra thị trường và
                tối ưu chi phí phát triển.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}