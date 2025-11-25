import bgAbout from "../assets/background.webp";
import { NavLink } from "react-router-dom";

export default function TechnicalServices() {
  return (
    <div className="w-full bg-[#f7f7f7] text-gray-800">
      {/* ==== BANNER ==== */}
      <div className="relative w-full h-[360px] md:h-[420px] overflow-hidden">
        <img
          src={bgAbout}
          alt="Technical Services Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-orange-300 tracking-wide uppercase">
              Lĩnh vực hoạt động
            </p>
            <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold drop-shadow-xl">
              DỊCH VỤ KĨ THUẬT
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
              <span className="text-orange-400 font-semibold">Dịch vụ kĩ thuật</span>
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
                  alt="Dịch vụ kĩ thuật"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="p-6 md:p-8 space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-orange-500 tracking-wide">
                Dịch vụ kĩ thuật
              </h2>
              <div className="h-[2px] w-24 bg-orange-500 mb-3" />
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                Chúng tôi cung cấp các dịch vụ tư vấn, thiết kế, kiểm thử và bảo trì hệ thống
                cho nhiều lĩnh vực công nghiệp, đảm bảo hạ tầng công nghệ luôn vận hành ổn
                định và an toàn.
              </p>
              <p className="text-sm md:text-base leading-relaxed text-gray-700">
                Các dịch vụ kĩ thuật được triển khai với quy trình chuẩn hoá, đội ngũ kỹ sư
                giàu kinh nghiệm và các công cụ hiện đại, giúp khách hàng giảm thiểu rủi ro
                và tối ưu chi phí vận hành.
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}