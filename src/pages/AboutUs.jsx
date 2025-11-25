import bgAbout from "../assets/background.webp"; // bạn thay bằng ảnh thật
import { NavLink } from "react-router-dom";

export default function AboutUs() {
  return (
    <div className="w-full bg-[#f7f7f7] text-gray-800">
      {/* ==== BANNER ==== */}
      <div className="relative w-full h-[360px] md:h-[420px] overflow-hidden">
        {/* Ảnh nền */}
        <img
          src={bgAbout}
          alt="About Background"
          className="w-full h-full object-cover object-center"
        />

        {/* Lớp phủ tối */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Text */}
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20">
          <div className="space-y-3">
            <p className="text-sm font-semibold text-orange-300 tracking-wide uppercase">
              Giới thiệu
            </p>
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-xl">
              GIỚI THIỆU
            </h1>
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-white/90 text-sm md:text-base">
              <NavLink to="/" className="hover:text-orange-400 flex items-center gap-1">
                Trang chủ
              </NavLink>
              <span>/</span>
              <span className="text-orange-400 font-semibold">Giới thiệu</span>
            </div>
          </div>
        </div>
      </div>

      {/* ==== NỘI DUNG CHÍNH ==== */}
      <div className="container-default py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_minmax(0,1fr)] gap-8 lg:gap-10">
          {/* ===== CỘT TRÁI: MENU GIỚI THIỆU ===== */}
          <aside>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="px-5 py-3 border-b border-gray-100 font-semibold text-sm uppercase tracking-wide text-gray-700">
                Giới thiệu
              </div>
              <nav className="divide-y divide-gray-100 text-sm">
                <NavLink
                  to="/gioi-thieu"
                  className={({ isActive }) =>
                    `block px-5 py-2.5 hover:bg-orange-50 ${
                      isActive ? "text-orange-500 font-semibold" : ""
                    }`
                  }
                >
                  &gt; Giới thiệu về chúng tôi
                </NavLink>
                <NavLink
                  to="/tam-nhin"
                  className={({ isActive }) =>
                    `block px-5 py-2.5 hover:bg-orange-50 ${
                      isActive ? "text-orange-500 font-semibold" : ""
                    }`
                  }
                >
                  &gt; Tầm nhìn
                </NavLink>
                <NavLink
                  to="/su-menh"
                  className={({ isActive }) =>
                    `block px-5 py-2.5 hover:bg-orange-50 ${
                      isActive ? "text-orange-500 font-semibold" : ""
                    }`
                  }
                >
                  &gt; Sứ mệnh
                </NavLink>
                <NavLink
                  to="/gia-tri-cot-loi"
                  className={({ isActive }) =>
                    `block px-5 py-2.5 hover:bg-orange-50 ${
                      isActive ? "text-orange-500 font-semibold" : ""
                    }`
                  }
                >
                  &gt; Giá trị cốt lõi
                </NavLink>
              </nav>
            </div>
          </aside>

          {/* ===== CỘT PHẢI: NỘI DUNG CHÍNH ===== */}
          <div className="space-y-8">
            {/* Khối ảnh + tiêu đề */}
            <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <div className="w-full flex justify-center bg-black/5 py-6">
                <div className="bg-white p-1 shadow-sm" style={{ width: 800, height: 400 }}>
                  <img
                    src={bgAbout}
                    alt="Mạch điện tử"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 md:p-8 space-y-4">
                <h2
                  id="gioi-thieu"
                  className="text-xl md:text-2xl font-bold text-orange-500 tracking-wide"
                >
                  Giới thiệu về chúng tôi
                </h2>
                {/* Đường kẻ cam dưới tiêu đề */}
                <div className="h-[2px] w-24 bg-orange-500 mb-3" />
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  GT SYSTEM Vietnam là công ty phát triển phần mềm trong các lĩnh vực:
                  Automotive, AI, Embedded System và các giải pháp công nghệ cao.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-gray-700">
                  Với đội ngũ kỹ sư giàu kinh nghiệm, chúng tôi mang đến các giải pháp thông minh,
                  đáp ứng yêu cầu khắt khe trong môi trường công nghiệp hiện đại.
                </p>

              </div>
            </article>

            {/* Tin liên quan */}
            <section className="space-y-4">
              <h3 className="text-base md:text-lg font-bold text-gray-800 uppercase tracking-wide">
                Tin liên quan
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {["Giá trị cốt lõi", "Sứ mệnh", "Tầm nhìn"].map((title) => (
                  <article
                    key={title}
                    className="cursor-pointer group"
                  >
                    <div className="bg-white p-1 border border-gray-200 shadow-sm mb-2">
                      <div className="aspect-[4/3] w-full bg-black/5 overflow-hidden">
                        <img
                          src={bgAbout}
                          alt={title}
                          className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-200"
                        />
                      </div>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">
                      {title}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
